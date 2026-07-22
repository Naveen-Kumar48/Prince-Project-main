# Ajay Readymade Store - Family Fashion Web Portal

A high-performance, modern, and SEO-optimized family fashion web catalog built for **Ajay Readymade Store**, Ellenabad's premium clothing store specializing in Men's Wear, Kids Wear, and Women's Wear.

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.x-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45.2-C5F14E?style=flat-square&logo=drizzle)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

---

## 📖 Table of Contents
1. [Overview](#-overview)
2. [Tech Stack](#-tech-stack)
3. [Key Features](#-key-features)
4. [Project Structure](#-project-structure)
5. [Database Architecture](#-database-architecture)
6. [Local SEO Strategy](#-local-seo-strategy)
7. [Getting Started](#-getting-started)
8. [Available Scripts](#-available-scripts)

---

## 🔍 Overview

**Ajay Readymade Store** is a localized family fashion destination based on Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana. The portal functions as a high-fidelity digital catalog and inquiry system focusing on:
*   **Men's Wear (45% Focus):** Formal and casual shirts, t-shirts, polo shirts, jeans, cargo pants, trousers, jackets, blazers, and festive/wedding kurtas.
*   **Kids Wear (35% Focus):** Baby wear, school uniforms, frocks, dresses, party wear, winter hoodies, and ethnic wear.
*   **Women's Wear (20% Focus):** Kurtis, kurti sets, palazzos, leggings, tops, and ethnic festive wear.

---

## 🛠 Tech Stack

*   **Framework:** Next.js (App Router, Server Components)
*   **Library:** React 19 (Beta/RC versions integrated)
*   **Styling:** Tailwind CSS v4.0.0 (using PostCSS config)
*   **Database ORM:** Drizzle ORM paired with Drizzle Kit for migrations
*   **Database Driver:** `node-postgres` (`pg` pool setup)
*   **Animations:** Framer Motion for smooth client-side transitions
*   **Icons:** Lucide React for UI iconography
*   **Validation & Utilities:** `clsx` and `tailwind-merge` for conditional class combinations

---

## ✨ Key Features

1.  **Dynamic SEO & Localized Landing Pages:** Direct location targeting through dynamic route templates (`src/app/[city]/page.tsx`) mapping Sirsa, Rania, Dabwali, Hanumangarh, and Ellenabad.
2.  **Structured JSON-LD Schema:** Includes `ClothingStore`, `WebSite`, and `BreadcrumbList` schemas injected into page layouts for Google Rich Snippets optimization.
3.  **B2C Inquiry / Lead Pipeline:** Features form submissions saving inquiries directly to the database with a reference to products of interest.
4.  **Responsive Product Catalog:** Fully adaptive grid displays featuring custom components (`ProductCard`, `CategoryGrid`, `HeroSlider`, `BestsellerTabs`).
5.  **WhatsApp Integration:** Floating click-to-chat action widget and location-specific message pre-fills.

---

## 📁 Project Structure

```text
ajay-readymade-website-development/
├── drizzle.config.json       # Drizzle database migration setup
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts config
├── tsconfig.json             # TypeScript settings
├── src/
│   ├── app/                  # Next.js App Router folders
│   │   ├── [city]/           # Dynamic SEO-optimized city routes
│   │   ├── about/            # About Us section
│   │   ├── api/              # API Route Handlers (enquiry, products, health)
│   │   ├── blogs/            # Articles and fashion guides
│   │   ├── category/         # Catalog categorized views
│   │   ├── collections/      # Curated themes (e.g. Wedding Edit)
│   │   ├── contact/          # Physical address and inquiry form
│   │   ├── gallery/          # Store and catalog media view
│   │   ├── globals.css       # Custom styling overrides
│   │   ├── layout.tsx        # Global Layout, fonts, and Schema wrappers
│   │   └── page.tsx          # Homepage view (sliders, strips, map)
│   ├── components/           # Reusable UI Blocks
│   │   ├── hero-slider.tsx   # Framer Motion carousel
│   │   ├── product-card.tsx  # Product listing grid item
│   │   ├── sections.tsx      # Landing page content modules
│   │   ├── site-header.tsx   # Responsive main navigation
│   │   ├── site-footer.tsx   # Informational footer with business details
│   │   └── store-map.tsx     # Embedded map section pointing to Gurudwara Road
│   ├── db/                   # Database files
│   │   ├── index.ts          # Postgres pool and Drizzle initialization
│   │   └── schema.ts         # Relational database schemas
│   └── lib/                  # Utilities & Static/Mock Data
│       ├── data.ts           # Product, testimonials, and brand seed datasets
│       └── utils.ts          # Classname merger helper
```

---

## 🗄 Database Architecture

The relational database layer utilizes PostgreSQL, structured via Drizzle ORM.

### Database Tables (`src/db/schema.ts`):
1.  **`categories`**: Tracks hierarchical navigation, target gender (`men`, `women`, `kids`, `unisex`), and priority ordering.
2.  **`brands`**: Lists brand profiles (`Louis Monarch`, `Urban Edge`, etc.) and a flag for featured partners.
3.  **`products`**: Central product records storing price details, stock, rating data, size arrays, color options, fabric details, and collection categorization flags (featured, bestseller, trending, new arrivals).
4.  **`reviews`**: Contains verified buyer reviews linked to specific products.
5.  **`blogs`**: Houses content-rich blogs for driving inbound search traffic.
6.  **`inquiries`**: Lead tracking for tracking contact inquiries, phone numbers, and products of interest.
7.  **`subscribers`**: Newsletter subscription emails.
8.  **`hero_banners`**: Homepage promotional carousel slides.

---

## 📈 Local SEO Strategy

To target consumers within the Sirsa-Ellenabad district radius, the application dynamically generates localized templates based on metadata configured in `src/lib/data.ts`:

*   **Ellenabad** (Main Flagship Store - Gurudwara Road)
*   **Sirsa** (25 km radius)
*   **Rania** (12 km radius)
*   **Dabwali** (35 km radius)
*   **Hanumangarh** (60 km radius)

Every city landing page automatically registers tailored metadata, unique keywords, distance indicators, and canonical links to boost search placement.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18.x or later) and PostgreSQL installed on your system.

### 2. Configure Environment Variables
Create a `.env` file (or `.env.local`) at the root of the project:
```env
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/app_db"
```

### 3. Install Dependencies
Run the installation command in your terminal:
```bash
npm install
```

### 4. Database Setup & Migrations
Sync your schemas and run migrations using Drizzle Kit:
```bash
# Generate database schema migrations
npx drizzle-kit generate

# Push migrations directly to your database instance
npx drizzle-kit push
```

### 5. Running the Application
Launch the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Compiles the application for production deployment.
*   `npm run start`: Starts the Next.js server with the production build.
*   `npm run lint`: Analyzes project codebase using ESLint.
*   `npm run typecheck`: Validates TypeScript structures without building output.
#   a j a y - r e a d y m a d e - w e b s i t e  
 #   a j a y - r e a d y m a d e - w e b s i t e  
 #   p r o j e c t  
 