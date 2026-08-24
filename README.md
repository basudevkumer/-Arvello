# 🛋️ Arvello

<div align="center">

### **Premium Furniture. Modern Web Experience.**

A refined full-stack furniture e-commerce platform designed for modern living.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge\&logo=next.js\&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=000000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br />

![Status](https://img.shields.io/badge/Status-In_Development-C9943A?style=flat-square)
![Architecture](https://img.shields.io/badge/Architecture-Monorepo-063041?style=flat-square)
![License](https://img.shields.io/badge/License-Unlicensed-lightgrey?style=flat-square)

<br />

**Discover · Explore · Shop · Experience**

</div>

---

## ✦ About Arvello

**Arvello** is a premium furniture e-commerce platform built for customers who appreciate thoughtful design, quality furniture, and a seamless digital shopping experience.

From discovering curated furniture collections to exploring interior inspiration and managing a shopping cart, Arvello brings the complete furniture shopping journey into one elegant platform.

The project is structured as a **full-stack monorepo**, combining a modern **Next.js frontend** with a scalable **Node.js + Express.js backend** and **MongoDB** database.

> **Our philosophy:**
> *Furniture shopping should feel as beautiful as the furniture itself.*

---

## ✦ Experience

<div align="center">

|     🏠 Discover     |     🛍️ Shop    |   💡 Inspire   |
| :-----------------: | :-------------: | :------------: |
| Curated collections | Premium catalog | Interior ideas |

|    🔎 Explore    |    🛒 Manage    |    ⚡ Experience   |
| :--------------: | :-------------: | :---------------: |
| Search & filters | Cart & checkout | Fast & responsive |

</div>

---

## ✦ Key Features

### 🏠 Curated Discovery

A premium homepage designed around featured collections, trending furniture, seasonal campaigns, and curated content.

### 🛍️ Product Experience

Detailed product pages with product information, pricing, categories, availability, and shopping actions.

### 🔎 Smart Search & Filtering

Quickly discover products through keyword search, categories, and filtering options.

### 💡 Inspiration

A dedicated space for interior design ideas, furniture arrangements, and curated visual inspiration.

### 🏷️ Deals & Offers

Highlight promotional products, seasonal campaigns, discounts, and special offers.

### 🛒 Shopping Cart

A smooth cart experience for adding, removing, and updating products before checkout.

### 👤 Authentication

Secure account registration, login, logout, and protected user functionality using JWT-based authentication.

### 📱 Responsive Design

Designed for a consistent experience across:

**Mobile → Tablet → Laptop → Desktop**

### ⚡ Performance

Built with the Next.js App Router to provide modern rendering, optimized navigation, and a fast user experience.

---

## ✦ Tech Stack

<div align="center">

| Layer        | Technology      | Role                      |
| :----------- | :-------------- | :------------------------ |
| **Frontend** | Next.js         | App Router & rendering    |
|              | Tailwind CSS v4 | UI styling                |
|              | JavaScript ES6+ | Application logic         |
| **Backend**  | Node.js         | Server runtime            |
|              | Express.js      | REST API                  |
|              | JWT             | Authentication            |
| **Database** | MongoDB         | Data storage              |
|              | Mongoose        | Data modeling             |
| **Tooling**  | Git & GitHub    | Version control           |
|              | ESLint          | Code quality              |
|              | dotenv          | Environment configuration |

</div>

---

## ✦ System Architecture

Arvello follows a clean **frontend → API → database** architecture.

```text
                         ┌────────────────────┐
                         │      Customer      │
                         │   Web / Mobile     │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │     Next.js        │
                         │    Frontend        │
                         │                    │
                         │ App Router         │
                         │ UI Components      │
                         │ State Management   │
                         └─────────┬──────────┘
                                   │
                              REST API
                                   │
                                   ▼
                         ┌────────────────────┐
                         │   Express.js API   │
                         │                    │
                         │ Routes             │
                         │ Controllers        │
                         │ Middleware         │
                         │ Validation         │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │      MongoDB       │
                         │                    │
                         │ Users              │
                         │ Products           │
                         │ Categories         │
                         │ Cart               │
                         │ Orders             │
                         └────────────────────┘
```

---

## ✦ Project Structure

```text
Arvello/
│
├── client/                         # Next.js Frontend
│   │
│   ├── public/                     # Static assets
│   │
│   └── src/
│       ├── app/                    # App Router
│       ├── components/
│       │   ├── layout/             # Navbar, Footer, Search
│       │   ├── ui/                 # Reusable UI components
│       │   └── shared/             # Shared components
│       │
│       ├── hooks/                  # Custom React hooks
│       ├── lib/                    # Utilities & configuration
│       ├── services/               # API service functions
│       └── context/                # Global state
│
├── server/                         # Node.js + Express Backend
│   │
│   └── src/
│       ├── config/                 # Database & environment
│       ├── models/                 # Mongoose models
│       ├── controllers/            # Business logic
│       ├── routes/                 # API routes
│       ├── middlewares/            # Auth & error handling
│       ├── services/               # External services
│       ├── validators/             # Request validation
│       └── utils/                  # Helper functions
│
├── .gitignore
├── README.md
└── package.json
```

---

## ✦ Site Navigation

<div align="center">

| Page               | Route          | Description          |
| :----------------- | :------------- | :------------------- |
| 🏠 **Home**        | `/`            | Featured collections |
| 🛍️ **Shop**       | `/shop`        | Product catalog      |
| 📂 **Categories**  | `/categories`  | Furniture categories |
| 💡 **Inspiration** | `/inspiration` | Interior inspiration |
| 🏷️ **Deals**      | `/deal`        | Offers & promotions  |
| ℹ️ **About**       | `/about-us`    | About Arvello        |
| ✉️ **Contact**     | `/contact`     | Contact information  |
| 🔍 **Search**      | `/search?q=`   | Product search       |
| 👤 **Account**     | `/account`     | User account         |
| 🛒 **Cart**        | `/cart`        | Shopping cart        |

</div>

---

## ✦ API

**Base URL**

```text
http://localhost:5000/api
```

### Authentication

| Method | Endpoint         | Purpose           |
| :----: | :--------------- | :---------------- |
| `POST` | `/auth/register` | Register user     |
| `POST` | `/auth/login`    | Authenticate user |
| `POST` | `/auth/logout`   | Logout user       |

### Products

| Method | Endpoint        | Purpose             |
| :----: | :-------------- | :------------------ |
|  `GET` | `/products`     | Get all products    |
|  `GET` | `/products/:id` | Get product details |

### Categories

| Method | Endpoint      | Purpose            |
| :----: | :------------ | :----------------- |
|  `GET` | `/categories` | Get all categories |

### Cart

|  Method  | Endpoint    | Purpose          |
| :------: | :---------- | :--------------- |
|   `GET`  | `/cart`     | Get user's cart  |
|  `POST`  | `/cart`     | Add product      |
|  `PATCH` | `/cart/:id` | Update cart item |
| `DELETE` | `/cart/:id` | Remove cart item |

> The API will expand as additional e-commerce modules are introduced.

---

## ✦ Getting Started

### Requirements

Before running Arvello locally, make sure you have:

```text
Node.js    18+
npm        Latest
MongoDB    Local or MongoDB Atlas
Git        Latest
```

### 01 — Clone

```bash
git clone https://github.com/basudevkumer/Arvello.git

cd Arvello
```

### 02 — Install Frontend

```bash
cd client

npm install
```

### 03 — Install Backend

```bash
cd ../server

npm install
```

### 04 — Environment Variables

Create:

```text
client/.env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Create:

```text
server/.env
```

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

> 🔐 **Never commit environment files or secrets to Git.**

### 05 — Start Backend

```bash
cd server

npm run dev
```

### 06 — Start Frontend

```bash
cd client

npm run dev
```

<div align="center">

**Frontend**

`http://localhost:3000`

**Backend**

`http://localhost:5000`

</div>

---

## ✦ Git Workflow

Arvello uses a **Feature Branch → Pull Request → Code Review → Merge** workflow.

```text
                     ┌───────────────┐
                     │     main      │
                     └───────┬───────┘
                             │
                             ▼
                   ┌───────────────────┐
                   │   Feature Branch  │
                   └─────────┬─────────┘
                             │
                             ▼
                         Develop
                             │
                             ▼
                           Commit
                             │
                             ▼
                            Push
                             │
                             ▼
                       Pull Request
                             │
                             ▼
                        Code Review
                             │
                             ▼
                       ┌───────────┐
                       │   Merge   │
                       └─────┬─────┘
                             │
                             ▼
                           main
```

### Branch Naming

```text
feature/product-page
feature/authentication
feature/shopping-cart

fix/cart-calculation
fix/navbar-responsive

refactor/product-service
docs/update-readme
```

### Example

```bash
git checkout -b feature/product-listing

git add .

git commit -m "feat: add product listing page"

git push origin feature/product-listing
```

---

## ✦ Commit Convention

We use a simple Conventional Commit style.

|    Prefix   | Meaning              |
| :---------: | :------------------- |
|   `feat:`   | New feature          |
|    `fix:`   | Bug fix              |
| `refactor:` | Code restructuring   |
|   `docs:`   | Documentation        |
|   `style:`  | Formatting / styling |
|   `chore:`  | Maintenance          |
|   `test:`   | Tests                |

### Examples

```text
feat: add product filtering
fix: resolve cart quantity issue
refactor: improve product service
docs: update API documentation
style: refine product card UI
chore: update dependencies
test: add authentication tests
```

---

## ✦ Main Branch Protection

The `main` branch is protected to maintain code quality and project stability.

| Rule               |     Policy    |
| :----------------- | :-----------: |
| Direct Push        |   ❌ Disabled  |
| Pull Request       |   ✅ Required  |
| Code Review        |   ✅ Required  |
| CI Checks          |   ✅ Required  |
| Force Push         |   ❌ Disabled  |
| Broken Build Merge | ❌ Not Allowed |

> **Think → Branch → Build → Review → Merge**

---

## ✦ Development Principles

### 🎯 Simplicity

Write code that is easy to understand, maintain, and extend.

### 🧩 Reusability

Build reusable UI components, utilities, hooks, and services instead of duplicating logic.

### 🔐 Security

Never expose secrets, credentials, tokens, or sensitive environment variables.

### 📦 Separation of Concerns

Keep presentation, business logic, API communication, validation, and database logic separated.

### 📐 Consistency

Follow existing naming conventions, folder structures, formatting rules, and architectural patterns.

### 🔎 Quality

Every Pull Request should be tested, reviewed, and production-ready before merging.

---

## ✦ Roadmap

### Foundation

* [x] Monorepo architecture
* [x] Frontend / backend separation
* [x] Initial project structure
* [x] Git workflow

### Storefront

* [ ] Premium homepage
* [ ] Shop page
* [ ] Product details
* [ ] Categories
* [ ] Search
* [ ] Product filtering
* [ ] Inspiration / Lookbook
* [ ] Deals & promotions

### Authentication

* [ ] Registration
* [ ] Login
* [ ] Logout
* [ ] JWT authentication
* [ ] Protected routes
* [ ] Profile management

### E-Commerce

* [ ] Shopping cart
* [ ] Wishlist
* [ ] Checkout
* [ ] Order management
* [ ] Payment gateway
* [ ] Order tracking

### Admin

* [ ] Admin authentication
* [ ] Admin dashboard
* [ ] Product management
* [ ] Category management
* [ ] Order management
* [ ] User management
* [ ] Analytics

### Production

* [ ] Performance optimization
* [ ] CI/CD pipeline
* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] Production database
* [ ] Monitoring & logging

---

## ✦ Project Status

<div align="center">

### 🚧 In Development

| Component          | Technology          |
| :----------------- | :------------------ |
| **Architecture**   | Full-Stack Monorepo |
| **Frontend**       | Next.js             |
| **Backend**        | Node.js + Express   |
| **Database**       | MongoDB             |
| **Styling**        | Tailwind CSS v4     |
| **Authentication** | JWT                 |

</div>

---

## ✦ Contributing

Arvello is currently developed as a collaborative team project.

Before opening a Pull Request:

* Follow the project architecture
* Create a dedicated feature branch
* Keep commits meaningful
* Test your changes locally
* Follow the commit convention
* Keep code clean and reusable
* Clearly describe your Pull Request
* Respond to review feedback

---

## ✦ License

This project currently has **no open-source license**.

All rights reserved.

---

<div align="center">

## 🛋️ Arvello

### **Premium Furniture. Modern Web Experience.**

*Designed for modern living.*

<br />

**Built with precision. Crafted with passion.**

<br />

`Next.js` · `Node.js` · `Express.js` · `MongoDB`

<br />

**Made with ❤️ by the Arvello Team**

</div>
