# Product Overview

## Project Purpose
A multi-page static e-commerce website for a luxury jewellery store. The site allows customers to browse, filter, and purchase handcrafted jewellery online without any backend server — all state is managed client-side via localStorage.

## Value Proposition
- Elegant, luxury-focused shopping experience for high-end jewellery
- Fully client-side: no server or database required
- Persistent cart across pages using localStorage
- Responsive design for mobile and desktop shoppers

## Key Features
- **Product Catalogue**: 23+ products across Earrings, Necklaces, and Rings categories loaded from `products.json`
- **Shop & Filtering**: Filter products by category (Earrings, Necklaces, Rings) and sort by price or name
- **Product Details**: Dedicated product detail page with image gallery and add-to-cart
- **Shopping Cart**: Slide-in offcanvas cart with item count badge, quantity controls, and running total
- **Cart View Page**: Full cart review page before checkout
- **Checkout**: Multi-step checkout form (shipping + payment) with order summary
- **User Authentication UI**: Login/register modal overlay (client-side only, no real auth)
- **Contact Form**: Contact page with form validation
- **About Page**: Brand story and team information
- **Back-to-Top Button**: Appears on scroll across all pages
- **Discount Promotions**: 25% discount on making charges highlighted on home page

## Product Catalogue
Products are stored in `products.json` with fields:
- `id`, `name`, `category`, `price`, `oldPrice`, `discount` (%), `image`, `order`

Categories: Earrings (7 products), Necklaces (5 products), Rings (7 products)

Price range: $240 – $525

## Target Users
- Jewellery shoppers looking for premium handcrafted pieces
- Gift buyers browsing curated collections (Lammar, Fermina, Tolentino)
- Mobile and desktop users expecting a responsive luxury retail experience

## Pages
| Page | File |
|------|------|
| Home | `home.html` |
| Shop | `shop.html` |
| Product Details | `productsdetails.html` |
| Cart View | `cartView.html` |
| Checkout | `checkout.html` |
| Login | `login.html` |
| About | `about.html` |
| Contact | `contact.html` |
