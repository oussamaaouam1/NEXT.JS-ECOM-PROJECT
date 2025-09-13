# Active SW - Sports and Gym Wear E-commerce Platform

A modern e-commerce platform built with Next.js and Strapi, specializing in athletic and gym wear.

## 🚀 Tech Stack

### Frontend (ecom-web-site)
- [Next.js](https://nextjs.org/) 15.1.3
- [React](https://reactjs.org/) 19.0.0
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Clerk](https://clerk.com/) for authentication
- [Stripe](https://stripe.com/) for payment processing
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Axios](https://axios-http.com/) for API requests

### Backend (ecommerce-strapi)
- [Strapi](https://strapi.io/) v5.6.0
- [PostgreSQL](https://www.postgresql.org/) database
- [Cloudinary](https://cloudinary.com/) for media storage

## ✨ Features

### User Features
- Authentication (Sign up/Sign in) with Clerk
- Product browsing by categories
- Detailed product views
- Shopping cart functionality
- Secure checkout with Stripe
- Email notifications for orders
- Responsive design for all devices

### Product Categories
- Men's Wear
- Women's Wear
- Accessories

### Admin Features (Strapi)
- Product management
- Order management
- Category management
- Media management
- User management

## 🛠️ Installation

### Frontend Setup

```bash
cd ecom-web-site
npm install
npm run dev
```

Required environment variables (.env.local):
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_URL=http://localhost:1337/api
NEXT_PUBLIC_REST_API_KEY=
STRIPE_SECRET_KEY=
RESEND_API_KEY=
```

### Backend Setup

```bash
cd ecommerce-strapi
npm install
npm run develop
```

Required environment variables (.env):
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

## 📁 Project Structure

### Frontend Structure
```
ecom-web-site/
  ├── app/                    # Next.js app directory
  │   ├── _components/       # Shared components
  │   ├── _redux/           # Redux store and slices
  │   ├── _utils/           # Utility functions and API clients
  │   ├── (auth)/           # Authentication routes
  │   ├── product-details/  # Product detail pages
  │   ├── cart/            # Shopping cart
  │   └── ...              # Other feature directories
  ├── public/              # Static files
  └── ...
```

### Backend Structure
```
ecommerce-strapi/
  ├── config/              # Strapi configurations
  ├── src/
  │   ├── api/            # API endpoints and models
  │   ├── admin/          # Admin panel customization
  │   └── ...
  └── data/               # Seed data
```

## 🔑 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products?filters[category][id][$eq]=:id` - Get products by category

### Cart
- `POST /api/carts` - Add to cart
- `GET /api/carts` - Get cart items
- `DELETE /api/carts/:id` - Remove from cart

### Orders
- `POST /api/orders` - Create order

## 🚀 Deployment

### Frontend
The Next.js application can be deployed on [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com/).

### Backend
The Strapi backend can be deployed on any Node.js hosting platform or using [Strapi Cloud](https://cloud.strapi.io).

## 📝 License

