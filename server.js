const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

// MongoDB connection with better error handling
mongoose
  .connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully")
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  })

// MongoDB connection event listeners
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error)
})

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected")
})

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  brand: { type: String },
  size: { type: String },
  expDate: { type: String },
  mfdDate: { type: String },
  suggestions: [{ type: String }],
  allegations: [{ type: String }],
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
})

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "pending" },
  shippingAddress: {
    street: String,
    city: String,
    zipCode: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model("User", userSchema)
const Product = mongoose.model("Product", productSchema)
const Order = mongoose.model("Order", orderSchema)

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Routes

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
    mongodb: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
    timestamp: new Date().toISOString(),
  })
})

// User registration
app.post("/api/register", async (req, res) => {
  try {
    console.log("Registration attempt:", req.body)
    const { username, email, password } = req.body

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" })
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    })

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()
    console.log("User created successfully:", user._id)
    res.status(201).json({ message: "User created successfully" })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({ error: "Internal server error: " + error.message })
  }
})

// User login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET)
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Add a new endpoint to add multiple products at once

// Add products in bulk (for importing product data)
app.post("/api/products/bulk", async (req, res) => {
  try {
    const products = req.body.products

    if (!Array.isArray(products)) {
      return res.status(400).json({ error: "Products must be an array" })
    }

    // Transform the product data to match our schema
    const transformedProducts = products.map((product) => ({
      name: product.title,
      description: product.description,
      price: Number(product.price),
      image: product.images && product.images.length > 0 ? product.images[0] : "/placeholder.svg?height=300&width=300",
      category: product.category,
      stock: Number(product.stock),
      brand: product.brand,
      size: product.size,
      expDate: product.expDate,
      mfdDate: product.mfdDate,
      suggestions: product.suggestion || [],
      allegations: product.allegations || [],
      images: product.images || [],
    }))

    // Clear existing products and add new ones
    await Product.deleteMany({})
    const result = await Product.insertMany(transformedProducts)

    res.json({
      message: `Successfully added ${result.length} products`,
      products: result,
    })
  } catch (error) {
    console.error("Bulk product creation error:", error)
    res.status(500).json({ error: "Failed to add products: " + error.message })
  }
})

// Create order
app.post("/api/orders", authenticateToken, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body
    let totalAmount = 0

    // Calculate total amount
    for (const item of items) {
      const product = await Product.findById(item.productId)
      totalAmount += product.price * item.quantity
    }

    const order = new Order({
      userId: req.user.userId,
      items,
      totalAmount,
      shippingAddress,
    })

    await order.save()
    res.status(201).json(order)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get user orders
app.get("/api/orders", authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId }).populate("items.productId")
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Seed products (for demo)
app.post("/api/seed", async (req, res) => {
  try {
    await Product.deleteMany({})

    const sampleProducts = [
      {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 99.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Electronics",
        stock: 50,
      },
      {
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking",
        price: 199.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Electronics",
        stock: 30,
      },
      {
        name: "Coffee Maker",
        description: "Automatic coffee maker with programmable settings",
        price: 79.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Home",
        stock: 25,
      },
      {
        name: "Running Shoes",
        description: "Comfortable running shoes for all terrains",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Sports",
        stock: 40,
      },
    ]

    await Product.insertMany(sampleProducts)
    res.json({ message: "Products seeded successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Serve static files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Global error handler
app.use((error, req, res, next) => {
  console.error("Global error handler:", error)
  res.status(500).json({ error: "Internal server error" })
})

// Handle 404 for API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
