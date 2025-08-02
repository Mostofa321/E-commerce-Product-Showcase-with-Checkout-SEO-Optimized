# 🛍️ SEO-Optimized E-commerce Frontend

A minimal yet fully functional **e-commerce frontend** built with **Next.js (App Router), TypeScript, Redux Toolkit, and Tailwind CSS**.  
This project demonstrates **SEO best practices**, **state management with Redux**, and **responsive UI**.

---

## 📌 Features

### ✅ Core Features
- **Home Page**
  - Fetches product list from [Fake Store API](https://fakestoreapi.com/products)
  - Responsive product grid with **title, price, image**
  - "View Details" button linking to individual product pages

- **Product Details Page** (`/product/[id]`)
  - Static Site Generation (**SSG**) with `generateStaticParams`
  - Shows **full product information** and **Add to Cart** button
  - Dynamic **`<title>`** and **`<meta description>`** for SEO

- **Cart & Checkout Page** (`/checkout`)
  - **Redux Toolkit** manages cart state
  - Checkout form with **validation**
  - On submit → **Order saved in Redux** + **Thank You confirmation**
  - **LocalStorage persistence** for cart

- **Orders Page** (`/orders`)
  - Table of all placed orders (persisted in Redux + localStorage)
  - Each order shows **ID, Customer, Total Items, Amount, Date**
  - Click an order to view **full details in a modal**

---

### 🌐 SEO Optimization
- Dynamic `<title>` and `<meta description>` for all pages
- **Semantic HTML5 tags** (`<main>`, `<section>`, `<article>`)
- **Image alt attributes** for better accessibility
- `robots.txt` and `sitemap.xml` included in `public/`
- Clean and crawlable URLs (e.g., `/product/5`, `/orders`)

---

### 🛠️ Tech Stack
- **Next.js 14+ (App Router)**
- **TypeScript**
- **Redux Toolkit & React-Redux**
- **Tailwind CSS**
- **LocalStorage** for cart & order persistence

---
## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mostofa321/E-commerce-Product-Showcase-with-Checkout-SEO-Optimized.git
   cd E-commerce-Product-Showcase-with-Checkout-SEO-Optimized
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

📦 Build for Production
bash
Copy
Edit
npm run build
npm start
