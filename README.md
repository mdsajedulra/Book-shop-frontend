## 🔗 Live Link
https://book-shop-client-ashy.vercel.app

## 🚀 Features

- 🛒 Browse and view details of books
- 🔐 Auth system with role-based access
- 🧑‍💼 Admin Dashboard to manage products and users
- 👤 User profile management and order history
- 💳 Checkout system
- 📚 Add, edit, and delete books (admin)
- 📦 Manage orders (admin)

## 🧪 Tech Stack

- React
- TypeScript
- Redux Toolkit (RTK Query)
- TailwindCSS
- React Router DOM
- Vite
- DaisyUI

## 🔐 Admin Credentials

To access the admin dashboard, use the following credentials:

```json
{
  "email": "team2@gmail.com",
  "password": "72423855"
}
```

## 🛠️ Installation & Running Locally

Make sure you have **Node.js (18+)** and **npm** or **yarn** installed.

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-shop-client.git
cd book-shop-client
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Setup Environment (if any)

If your project requires environment variables, create a `.env` file and add them accordingly.

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will be running at: [http://localhost:5173](http://localhost:5173)

## 🧭 Project Routes Overview

### Public Routes:
- `/` – Home Page
- `/all-products` – All available books
- `/about` – About Us
- `/contact` – Contact Page
- `/book-details/:id` – Book Details
- `/login` – Login Page
- `/register` – Registration Page
- `*` – 404 Not Found

### User Routes (`/user`)
- `/user/orders` – View your orders
- `/user/edit-profile` – Edit your profile
- `/user/reset-password` – Reset your password
- `/user/checkout/:id` – Checkout page

### Admin Routes (`/admin`)
- `/admin` – Admin Profile
- `/admin/orders` – Manage all orders
- `/admin/products` – View and manage products
- `/admin/users` – Manage users
- `/admin/add-book` – Add a new book

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)
