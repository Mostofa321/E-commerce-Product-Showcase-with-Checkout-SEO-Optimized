# Copilot Instructions for E-commerce Product Showcase with Checkout

## Project Overview
- This is a Next.js (App Router) e-commerce showcase with checkout and order management.
- Main features: product grid, product details, cart, checkout, and order history.
- State management uses Redux (`redux/` directory) for cart and order logic.

## Key Architecture
- **Pages:**
  - `app/` contains route-based pages: `product/[id]/`, `checkout/`, `orders/`, and main `page.tsx`.
- **Components:**
  - UI components in `components/`, including `ProductGrid`, `ProductCard`, `AddToCartButton`, and layout elements.
- **Redux:**
  - Cart and order state managed in `redux/cartSlice.ts`, `redux/orderSlice.ts`, and store setup in `redux/store.ts`.
  - Use `useDispatch` and `useSelector` from `react-redux` in components.
- **Types:**
  - Shared types in `types/index.ts` (e.g., `Product`, `Order`).

## Developer Workflows
- **Start Dev Server:** `npm run dev` (see README)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **No explicit test setup detected.**
- **Hot reload:** Editing files in `app/` or `components/` auto-updates the browser.

## Patterns & Conventions
- **Client Components:** Use `'use client'` at the top for interactive components (see `AddToCartButton.tsx`).
- **Redux Usage:**
  - Dispatch actions via `useDispatch()`.
  - Access state via `useSelector()`.
- **Styling:** Tailwind CSS classes are used for styling (see `globals.css`, component classNames).
- **Routing:** Dynamic routes (e.g., `product/[id]/page.tsx`) for product details.
- **SEO:** Layout and SEO handled in `components/Layout/SEOHead.tsx`.

## Integration Points
- **External:**
  - Next.js, React, Redux, Tailwind CSS.
- **No backend API integration detected in codebase.**

## Examples
- To add a product to cart: see `AddToCartButton.tsx` (dispatches `addToCart(product)`).
- To display products: see `ProductGrid.tsx` and `ProductCard.tsx`.
- To manage orders: see `OrderTable.tsx` and `redux/orderSlice.ts`.

## File References
- `app/` — main pages/routes
- `components/` — UI components
- `redux/` — state management
- `types/` — shared types

---
**If you add new features, document any new conventions or workflows here.**
