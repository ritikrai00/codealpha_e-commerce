const mongoose = require("mongoose")

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", (error) => {
  console.error("MongoDB connection error:", error)
  process.exit(1)
})

db.once("open", async () => {
  console.log("Connected to MongoDB successfully")

  try {
    // Test the connection by creating collections
    await db.createCollection("users")
    await db.createCollection("products")
    await db.createCollection("orders")

    console.log("Database collections created successfully")
    console.log("Database setup complete!")

    process.exit(0)
  } catch (error) {
    console.error("Error setting up database:", error)
    process.exit(1)
  }
})
