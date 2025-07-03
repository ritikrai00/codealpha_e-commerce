// Global variables
let currentUser = null
let cart = JSON.parse(localStorage.getItem("cart")) || []
let products = []

// API base URL - Change this to point to your Express server
const API_BASE = "http://localhost:3000"

// Add category filtering functionality
let currentCategory = "all"

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  updateCartCount()
  checkAuthStatus()
})

// Initialize the application
async function initializeApp() {
  try {
    await loadProducts()
    showPage("home")
  } catch (error) {
    console.error("Failed to initialize app:", error)
  }
}

// Setup event listeners
function setupEventListeners() {
  // Login form
  document.getElementById("login-form").addEventListener("submit", handleLogin)

  // Register form
  document.getElementById("register-form").addEventListener("submit", handleRegister)

  // Checkout form
  document.getElementById("checkout-form").addEventListener("submit", handleCheckout)
}

// Check authentication status
function checkAuthStatus() {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")

  if (token && user) {
    currentUser = JSON.parse(user)
    updateAuthUI()
  }
}

// Update authentication UI
function updateAuthUI() {
  const loginBtn = document.getElementById("login-btn")
  const registerBtn = document.getElementById("register-btn")
  const logoutBtn = document.getElementById("logout-btn")
  const userWelcome = document.getElementById("user-welcome")

  if (currentUser) {
    loginBtn.style.display = "none"
    registerBtn.style.display = "none"
    logoutBtn.style.display = "block"
    userWelcome.style.display = "block"
    userWelcome.textContent = `Welcome, ${currentUser.username}!`
  } else {
    loginBtn.style.display = "block"
    registerBtn.style.display = "block"
    logoutBtn.style.display = "none"
    userWelcome.style.display = "none"
  }
}

// Show page
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page")
  pages.forEach((page) => page.classList.remove("active"))

  // Show selected page
  const targetPage = document.getElementById(`${pageId}-page`)
  if (targetPage) {
    targetPage.classList.add("active")

    // Load page-specific content
    if (pageId === "products") {
      // Add category filters
      const filtersContainer = document.getElementById("category-filters-container")
      if (filtersContainer && products.length > 0) {
        filtersContainer.innerHTML = createCategoryFilters()
      }
      displayProducts()
    }
  }
}

// Load products from API
async function loadProducts() {
  try {
    console.log("Fetching products from:", `${API_BASE}/api/products`)
    const response = await fetch(`${API_BASE}/api/products`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server returned non-JSON response")
    }

    products = await response.json()
    console.log("Products loaded successfully:", products.length)
  } catch (error) {
    console.error("Error loading products:", error)
    showError("Failed to load products. Make sure the server is running on port 3000.")
  }
}

// Update displayProducts function to include filtering and brand display
function displayProducts() {
  const productsGrid = document.getElementById("products-grid")

  if (products.length === 0) {
    productsGrid.innerHTML = '<div class="loading">Loading products...</div>'
    return
  }

  // Filter products by category
  const filteredProducts =
    currentCategory === "all" ? products : products.filter((product) => product.category === currentCategory)

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<div class="loading">No products found in this category.</div>'
    return
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card">
            ${product.brand ? `<div class="product-brand">${product.brand}</div>` : ""}
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 100)}${product.description.length > 100 ? "..." : ""}</p>
                ${product.size ? `<p class="product-size"><strong>Size:</strong> ${product.size}</p>` : ""}
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart('${product._id}')">Add to Cart</button>
                    <button class="btn btn-secondary" onclick="showProductDetails('${product._id}')">View Details</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Add function to create category filters
function createCategoryFilters() {
  const categories = ["all", ...new Set(products.map((p) => p.category))]

  const filtersHtml = categories
    .map(
      (category) =>
        `<button class="category-filter ${category === currentCategory ? "active" : ""}" 
             onclick="filterByCategory('${category}')">
       ${category === "all" ? "All Products" : category}
     </button>`,
    )
    .join("")

  return `<div class="category-filters">${filtersHtml}</div>`
}

// Add function to filter by category
function filterByCategory(category) {
  currentCategory = category

  // Update active filter button
  document.querySelectorAll(".category-filter").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  displayProducts()
}

// Show product details
function showProductDetails(productId) {
  const product = products.find((p) => p._id === productId)
  if (!product) return

  const productDetails = document.getElementById("product-details")

  // Build suggestions HTML
  const suggestionsHtml =
    product.suggestions && product.suggestions.length > 0
      ? `<div class="product-suggestions">
         <h4>Suggestions:</h4>
         <ul>${product.suggestions.map((s) => `<li>${s}</li>`).join("")}</ul>
       </div>`
      : ""

  // Build allegations HTML
  const allegationsHtml =
    product.allegations && product.allegations.length > 0
      ? `<div class="product-allegations">
         <h4>Important Information:</h4>
         <ul>${product.allegations.map((a) => `<li>${a}</li>`).join("")}</ul>
       </div>`
      : ""

  productDetails.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details-info">
            <h2>${product.name}</h2>
            <div class="product-meta">
                ${product.brand ? `<p><strong>Brand:</strong> ${product.brand}</p>` : ""}
                ${product.size ? `<p><strong>Size:</strong> ${product.size}</p>` : ""}
                ${product.expDate ? `<p><strong>Exp Date:</strong> ${product.expDate}</p>` : ""}
            </div>
            <div class="price">$${product.price.toFixed(2)}</div>
            <p class="product-description">${product.description}</p>
            ${suggestionsHtml}
            ${allegationsHtml}
            <div class="quantity-selector">
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1" max="${product.stock}">
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCartWithQuantity('${product._id}')">Add to Cart</button>
                <button class="btn btn-secondary" onclick="showPage('products')">Back to Products</button>
            </div>
        </div>
    `

  showPage("product-details")
}

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p._id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.productId === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      productId: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showSuccess("Product added to cart!")
}

// Add to cart with quantity
function addToCartWithQuantity(productId) {
  const quantity = Number.parseInt(document.getElementById("quantity").value)
  addToCart(productId, quantity)
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count")
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
}

// Show cart
function showCart() {
  displayCart()
  showPage("cart")
}

// Display cart
function displayCart() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
                <button class="btn btn-primary" onclick="showPage('products')">Shop Now</button>
            </div>
        `
    cartTotal.textContent = "0.00"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <label>Qty:</label>
                <input type="number" value="${item.quantity}" min="1" 
                       onchange="updateCartItemQuantity('${item.productId}', this.value)">
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.productId}')">Remove</button>
        </div>
    `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toFixed(2)
}

// Update cart item quantity
function updateCartItemQuantity(productId, newQuantity) {
  const quantity = Number.parseInt(newQuantity)
  if (quantity <= 0) {
    removeFromCart(productId)
    return
  }

  const item = cart.find((item) => item.productId === productId)
  if (item) {
    item.quantity = quantity
    localStorage.setItem("cart", JSON.stringify(cart))
    updateCartCount()
    displayCart()
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  displayCart()
  showSuccess("Item removed from cart!")
}

// Show checkout
function showCheckout() {
  if (!currentUser) {
    showError("Please login to proceed with checkout.")
    showPage("login")
    return
  }

  if (cart.length === 0) {
    showError("Your cart is empty!")
    return
  }

  showPage("checkout")
}

// Handle login
async function handleLogin(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  if (!loginData.email || !loginData.password) {
    showError("Email and password are required")
    return
  }

  try {
    console.log("Attempting login with:", { ...loginData, password: "[HIDDEN]" })

    const response = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })

    console.log("Login response status:", response.status)

    // Check if response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text()
      console.error("Non-JSON response:", textResponse)
      throw new Error("Server returned non-JSON response")
    }

    const data = await response.json()

    if (response.ok) {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      currentUser = data.user
      updateAuthUI()
      showSuccess("Login successful!")
      showPage("home")
      e.target.reset()
    } else {
      showError(data.error || "Login failed")
    }
  } catch (error) {
    console.error("Login error:", error)
    showError("Login failed. Please check the console and try again.")
  }
}

// Handle register
async function handleRegister(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const registerData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  }

  // Basic validation
  if (!registerData.username || !registerData.email || !registerData.password) {
    showError("All fields are required")
    return
  }

  if (registerData.password.length < 6) {
    showError("Password must be at least 6 characters long")
    return
  }

  try {
    console.log("Attempting registration with:", { ...registerData, password: "[HIDDEN]" })

    const response = await fetch(`${API_BASE}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })

    console.log("Registration response status:", response.status)
    console.log("Registration response headers:", response.headers)

    // Check if response is JSON
    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text()
      console.error("Non-JSON response:", textResponse)
      throw new Error("Server returned non-JSON response")
    }

    const data = await response.json()
    console.log("Registration response data:", data)

    if (response.ok) {
      showSuccess("Registration successful! Please login.")
      showPage("login")
      e.target.reset()
    } else {
      showError(data.error || "Registration failed")
    }
  } catch (error) {
    console.error("Registration error:", error)
    showError("Registration failed. Please check the console and try again.")
  }
}

// Handle checkout
async function handleCheckout(e) {
  e.preventDefault()

  if (!currentUser) {
    showError("Please login to place an order.")
    return
  }

  const formData = new FormData(e.target)
  const shippingAddress = {
    street: formData.get("street"),
    city: formData.get("city"),
    zipCode: formData.get("zipCode"),
    country: formData.get("country"),
  }

  const orderData = {
    items: cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    })),
    shippingAddress,
  }

  try {
    const token = localStorage.getItem("token")
    const response = await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    })

    const data = await response.json()

    if (response.ok) {
      // Clear cart
      cart = []
      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartCount()

      showSuccess("Order placed successfully! Thank you for your purchase.")
      showPage("home")
      e.target.reset()
    } else {
      showError(data.error || "Order failed")
    }
  } catch (error) {
    console.error("Checkout error:", error)
    showError("Order failed. Please try again.")
  }
}

// Logout
function logout() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  currentUser = null
  updateAuthUI()
  showSuccess("Logged out successfully!")
  showPage("home")
}

// Utility functions
function showError(message) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll(".error, .success")
  existingMessages.forEach((msg) => msg.remove())

  const errorDiv = document.createElement("div")
  errorDiv.className = "error"
  errorDiv.textContent = message

  const main = document.querySelector(".main")
  main.insertBefore(errorDiv, main.firstChild)

  // Auto remove after 5 seconds
  setTimeout(() => {
    errorDiv.remove()
  }, 5000)
}

function showSuccess(message) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll(".error, .success")
  existingMessages.forEach((msg) => msg.remove())

  const successDiv = document.createElement("div")
  successDiv.className = "success"
  successDiv.textContent = message

  const main = document.querySelector(".main")
  main.insertBefore(successDiv, main.firstChild)

  // Auto remove after 3 seconds
  setTimeout(() => {
    successDiv.remove()
  }, 3000)
}
