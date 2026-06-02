# Cafe Raweeya Website - Complete Structure Guide

This project is a full-featured Next.js website for a bakery & cafe business with Firebase integration.

## Project Structure

### 📁 `/app` - Next.js App Router
- **`page.tsx`** - Home page with hero, features, and gallery
- **`layout.tsx`** - Root layout wrapper
- **`globals.css`** - Global styles

#### Routes
- **`/menu`** - Menu page with product grid and filters
- **`/about`** - About page with cafe story
- **`/contact`** - Contact form and location

#### Admin Section
- **`/admin`** - Dashboard overview
- **`/admin/login`** - Authentication page
- **`/admin/products`** - Product management
  - **`/new`** - Create new product
  - **`/[id]/edit`** - Edit existing product
- **`/admin/categories`** - Category management
- **`/admin/settings`** - Site settings

### 📁 `/components` - React Components

#### `/common`
- **Navbar.tsx** - Navigation header with dropdowns
- **Footer.tsx** - Footer with links and social media
- **SectionTitle.tsx** - Reusable section heading component
- **Loading.tsx** - Loading spinner component

#### `/home`
- **Hero.tsx** - Hero banner section
- **AboutPreview.tsx** - About section preview
- **FeaturedProducts.tsx** - Featured products cards
- **GalleryPreview.tsx** - Location and contact preview

#### `/products`
- **ProductCard.tsx** - Individual product card component
- **ProductGrid.tsx** - Grid layout for products
- **CategoryFilter.tsx** - Category filter buttons

#### `/admin`
- **AdminSidebar.tsx** - Admin navigation sidebar
- **ProductForm.tsx** - Product create/edit form
- **ProductTable.tsx** - Products table with actions
- **ProtectedRoute.tsx** - Route protection wrapper

### 📁 `/lib` - Utilities & Services

- **firebase.ts** - Firebase configuration
- **products.ts** - Product CRUD operations
- **categories.ts** - Category CRUD operations
- **auth.ts** - Authentication utilities
- **upload.ts** - File upload utilities

### 📁 `/types` - TypeScript Types

- **product.ts** - Product type definition
- **category.ts** - Category type definition
- **site.ts** - Site configuration type

### 📁 `/public` - Static Assets

- **`/images`** - Image directory for cafe photos
- **logo.png** - Cafe logo

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Get your Firebase config credentials
3. Update `.env.local` with your Firebase credentials

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_value
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value
# ... etc
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Features

✅ **Public Pages**
- Home page with hero section
- About page with cafe story
- Menu page with product filtering
- Contact page with contact form

✅ **Admin Panel**
- Product management (Create, Read, Update, Delete)
- Category management
- Site settings
- Protected admin routes

✅ **Design**
- Warm amber color scheme
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Tailwind CSS styling

✅ **Technology**
- Next.js 16+ with App Router
- React 19
- TypeScript
- Tailwind CSS
- Firebase (configuration ready)

## Customization

### Update Cafe Information
Edit these files to customize cafe details:
- **Home page content**: `/app/page.tsx`
- **About page**: `/app/about/page.tsx`
- **Navbar links**: `/components/common/Navbar.tsx`
- **Footer links**: `/components/common/Footer.tsx`
- **Site settings**: `/app/admin/settings/page.tsx`

### Add Products
1. Go to Admin Dashboard: http://localhost:3000/admin/login
2. Navigate to Products
3. Click "Add Product"
4. Fill in product details

### Customize Colors
Edit Tailwind classes throughout components. Current scheme uses amber colors:
- `text-amber-900` - Dark text
- `bg-amber-900` - Dark background
- `bg-amber-50` - Light background

Change all `amber-*` classes to use a different color palette (e.g., `blue-*`, `rose-*`)

## Next Steps

1. **Configure Firebase** - Add your Firebase project credentials
2. **Add Images** - Add cafe and product images to `/public/images`
3. **Implement Authentication** - Complete Firebase auth in `/lib/auth.ts`
4. **Add Products** - Use admin panel to add your menu items
5. **Deploy** - Deploy to Vercel, Netlify, or your preferred hosting

## Environment Variables

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
vercel
```

### Other Platforms

Works with any Node.js hosting (Netlify, Railway, etc.)

## Support

For issues or questions about the structure, refer to:
- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Firebase Docs: https://firebase.google.com/docs

---

**Created:** June 2026 | **Version:** 1.0.0
