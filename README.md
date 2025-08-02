# 🛍️ SEO-Optimized E-commerce Frontend

A minimal and fully functional **e-commerce frontend** built with **Next.js (App Router), TypeScript, Redux Toolkit, and Tailwind CSS**.  
Implements **SEO best practices**, **responsive design**, and **local state persistence** for a realistic e-commerce flow.

---

## 📖 Setup Guide

1. Clone the repository  
   git clone https://github.com/your-username/ecommerce-seo.git  
   cd ecommerce-seo

2. Install dependencies  
   npm install

3. Run the development server  
   npm run dev

4. Open the project in your browser  
   http://localhost:3000

5. Build for production  
   npm run build  
   npm start

---

## 📂 Brief Overview of Structure and Logic

### Project Structure
app/  
 ├─ layout.tsx               # Root layout (Server Component)  
 ├─ page.tsx                 # Home Page: Product grid  
 ├─ product/  
 │    └─ [id]/page.tsx       # Product Details (SSG + SEO)  
 ├─ checkout/page.tsx        # Checkout page with form validation  
 └─ orders/page.tsx          # Orders page with table and modal  

components/  
 ├─ ProductCard.tsx          # Single product card  
 ├─ ProductGrid.tsx          # Product listing grid  
 ├─ AddToCartButton.tsx      # Handles cart action via Redux  
 ├─ OrderTable.tsx           # Displays orders with modal details  
 ├─ LinkButton.tsx           # For Re usable Link button  
 └─ ReduxProvider.tsx        # Wraps Redux store for client  
 └─ ToastProvider.tsx        # For Notify  

redux/  
 ├─ store.ts                 # Configures Redux store  
 ├─ cartSlice.ts             # Handles cart state and persistence  
 └─ orderSlice.ts            # Handles order state and persistence  

types/  
 └─ index.ts                 # TypeScript types for Product, Cart, Order  

public/  
 ├─ robots.txt               # SEO crawler instructions  
 └─ sitemap.xml              # Sitemap for SEO  

styles/  
 └─ globals.css              # Tailwind CSS setup

---

### Logic Overview

1. **Home Page**
   - Fetches products from Fake Store API  
   - Displays in a responsive Tailwind grid  
   - Each product links to `/product/[id]`

2. **Product Details Page**
   - Uses Static Site Generation (SSG) with `generateStaticParams`  
   - Dynamic `<title>` & `<meta description>` for SEO  
   - Add to Cart button dispatches to Redux

3. **Cart & Checkout**
   - Redux Toolkit manages cart state  
   - State persists in localStorage  
   - Checkout form validates Full Name, Address, Phone  
   - On submit → Order saved to Redux + localStorage + cart cleared

4. **Orders Page**
   - Displays all placed orders in a table  
   - Click an order → modal with full details  
   - Orders also persist in localStorage

---

## 🔍 SEO Techniques Used

1. Dynamic Metadata  
   - Pages generate `<title>` and `<meta description>` using Next.js `generateMetadata`

2. Semantic HTML  
   - Pages use `<main>`, `<section>`, `<article>`, and accessible elements

3. Image Optimization  
   - All images have descriptive `alt` attributes for accessibility

4. Robots & Sitemap  
   - `public/robots.txt` allows search engines to crawl the site  
   - `public/sitemap.xml` provides indexable URLs

5. Static Site Generation (SSG)  
   - Product pages are statically generated for better SEO and performance

6. Clean URLs  
   - Example: `/product/1`, `/checkout`, `/orders`

