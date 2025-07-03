Here’s your cleaned-up and professionalized `README.md` for **ShopEasy**. The structure is preserved, typos and inconsistencies are fixed, and formatting is improved for clarity and presentation.

---

# 🛒 ShopEasy - E-Commerce Store

A full-stack e-commerce application built with **HTML**, **CSS**, **JavaScript** (frontend), **Express.js** (backend), and **MongoDB** (database).

---

## 🌟 Features

### 🛍️ Customer Features

* **Product Catalog**: Browse products with category filtering
* **Product Details**: View detailed product info, suggestions, and notices
* **Shopping Cart**: Add/remove items and update quantities
* **User Authentication**: Register and log in securely
* **Order Processing**: Complete checkout with shipping info
* **Responsive Design**: Optimized for desktop and mobile devices

### 🏪 Product Management

* **Multiple Categories**: Bakery, Dairy, Frozen Foods
* **Rich Product Data**: Images, descriptions, pricing, and stock
* **Brand Information**: Show product brands and specifications
* **Expiration Tracking**: Manufacturing and expiration dates
* **Product Suggestions**: Usage tips and serving information

### 🔧 Technical Features

* **RESTful API**: Clean, structured endpoints
* **JWT Authentication**: Secure session management
* **MongoDB Integration**: Persistent, scalable data storage
* **Error Handling**: Comprehensive feedback and logging
* **Static File Serving**: Optimized delivery for images/assets

---

## 🚀 Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or higher)
* [MongoDB](https://www.mongodb.com/) (local or Atlas)
* **npm** or **yarn**

---

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/ritikrai00/codealpha_e-commerce.git

# Install dependencies
npm install
```

📁 *Place your product images in the `public/images/` folder.*

---

### 2. Import Products

```bash
# Import sample products to the database
npm run import-products
```

---

### 3. Start the Server

```bash
# Start the application
npm start
```

---

### 4. Access the Application

* 🌐 Visit: `http://localhost:3000`

---

## 📁 Project Structure

```
ecommerce-site/
├── server.js               # Express server & routes
├── package.json            # Project metadata & scripts
├── setup-db.js             # MongoDB setup script
├── import-products.js      # Product seeding script
├── README.md               # This file
└── public/                 # Static assets
    ├── index.html          # Main HTML
    ├── styles.css          # CSS styles
    ├── script.js           # Frontend JS
    └── images/             # Product images
        ├── chocolate-mousse-torte-cake.png
        ├── triple-chocolate-enrobed-brownie-cake.png
        └── ... (31 total images)
```

---

## 📦 Available Scripts

| Script                    | Description                           |
| ------------------------- | ------------------------------------- |
| `npm start`               | Start the production server           |
| `npm run import-products` | Import product data into the database |

---

## 🗄️ Database Schema

### 🔐 Users Collection

```js
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (hashed),
  createdAt: Date
}
```

### 🛒 Products Collection

```js
{
  name: String (required),
  description: String (required),
  price: Number (required),
  image: String (required),
  category: String (required),
  stock: Number,
  brand: String,
  size: String,
  expDate: String,
  mfdDate: String,
  suggestions: [String],
  allegations: [String],
  images: [String],
  createdAt: Date
}
```

### 📦 Orders Collection

```js
{
  userId: ObjectId (ref: User),
  items: [
    {
      productId: ObjectId (ref: Product),
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: String,
  shippingAddress: {
    street: String,
    city: String,
    zipCode: String,
    country: String
  },
  createdAt: Date
}
```

---

## 🌐 API Endpoints

### 🔐 Authentication

* `POST /api/register` – Register new user
* `POST /api/login` – User login
* `GET /api/health` – Server health check

### 📦 Products

* `GET /api/products` – Get all products
* `GET /api/products/:id` – Get product by ID
* `POST /api/products/bulk` – Bulk add products
* `POST /api/seed` – Add sample product data

### 🧾 Orders (Protected)

* `POST /api/orders` – Create new order
* `GET /api/orders` – Get orders for logged-in user

---

## 🖼️ Image Requirements

* **Formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
* **Recommended Size**: 300x300px or larger
* **Naming**: Filenames must match references (case-sensitive)

---

## ⚙️ Configuration

### MongoDB Connection

* **Local**: `mongodb://localhost:27017/ecommerce`
* **MongoDB Atlas**: Replace URI in `server.js`

---

## 🔒 Security Features

* **Password Hashing**: Secure with bcrypt
* **JWT Auth**: Token-based user sessions
* **Input Validation**: Prevent malformed data
* **CORS Setup**: Proper cross-origin configuration
* **Error Handling**: No sensitive info in responses

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

**Happy Shopping! 🛒**

---

