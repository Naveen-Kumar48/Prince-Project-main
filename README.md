<div align="center">

# 🛍️ Ajay Readymade Store

A modern, responsive, and SEO-friendly web portal for **Ajay Readymade Store** in Ellenabad — designed to showcase stylish men’s, women’s, and kids’ fashion while helping customers discover products, ask inquiries, and visit the store with ease.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45.2-C5F14E?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[Explore Web Portal](#-overview) • [Key Features](#-key-features) • [Tech Stack](#-tech-stack) • [Database Architecture](#-database-architecture) • [Getting Started](#-getting-started)

</div>

------------------------------------------------------------------------------------------------------------

## 📖 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Local SEO Strategy](#-local-seo-strategy)
- [Project Structure](#-project-structure)
- [Database Architecture](#-database-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#1-prerequisites)
  - [Environment Setup](#2-environment-setup)
  - [Installation](#3-installation)
  - [Database Migration](#4-database-migration)
  - [Development Server](#5-development-server)
- [Available Scripts](#-available-scripts)
- [Contact & Store Location](#-contact--store-location)

---

## 🔍 Overview

**Ajay Readymade Store** is a premier family fashion hub located on Gurudwara Road, Ellenabad (Haryana). This web portal acts as a high-fidelity catalog, local search magnet, and B2C inquiry system engineered to convert digital interest into footfall and direct sales.

### Catalog Highlights:
* 👔 **Men's Wear:** Formals, Casual Shirts, T-Shirts, Polos, Denim, Cargo Trousers, Blazers, and Festive Wedding Kurtas.
* 👗 **Women's Wear:** Designer Kurtis, Kurti Sets, Palazzos, Leggings, Ethnic Wear, and Western Tops.
* 🧒 **Kids' Wear:** Baby Collections, Party Dresses, Ethnic Wear, Winter Hoodies, and School Uniforms.
* 🏷️ **Brand Showcase:** Highlighting top partners like *Louis Monarch*, *Urban Edge*, and more.

---

## 🛠 Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | React Server Components, dynamic file routes, metadata generation |
| **Frontend Library** | React 19 | Modern UI rendering engine |
| **Styling** | Tailwind CSS v4 | PostCSS engine, modern utility styles, custom design system |
| **ORM** | Drizzle ORM (v0.45.2) | Type-safe PostgreSQL ORM with Drizzle Kit migrations |
| **Database Driver** | `node-postgres` (`pg`) | High-performance connection pool management |
| **Animations** | Framer Motion | Smooth carousel slides, page transitions, interactive UI elements |
| **Icons** | Lucide React | Clean, responsive vector icons |
| **Utilities** | `clsx` + `tailwind-merge` | Conditional and merged dynamic class combinations |

---
## ✨ Key Features

- 🌐 **Localized Multi-City SEO Pages:** Dynamic routing template (`/src/app/[city]/page.tsx`) generating over **45+ localized landing pages** specifically targeting search queries for villages and towns in Sirsa (Haryana) and Hanumangarh (Rajasthan) districts.
- 🏷️ **Rich Structured Data (JSON-LD):** Built-in Google Rich Snippets integration including `ClothingStore`, `WebSite`, and `BreadcrumbList` schemas.
- 💬 **Direct WhatsApp Inquiry Pipeline:** Floating multi-channel action buttons with pre-configured messages for instant customer support and lead closing.
- 📥 **B2C Customer Lead Capture:** Built-in inquiry form saving product-level leads directly into the PostgreSQL database.
- 📱 **Fully Responsive Modern Catalog:** Adaptive grids, category carousels, bestseller tabs, and brand showcases optimized for mobile, tablet, and desktop screens.
- 🗺️ **Interactive Store Finder:** Embedded Google Map navigation directing shoppers straight to the flagship store on Gurudwara Road.
- 📑 **Dynamic Sitemap & Robots Generator:** Automated `sitemap.ts` and `robots.ts` ensuring immediate indexing by search engine crawlers.

--------------------------------------------------

## 📈 Local SEO Strategy

To dominate local search results within a 60km radius of the flagship store, the application leverages dynamic regional routing (`/[city]`) backed by location-specific datasets (`src/lib/data.ts`). This is optimized to capture high-intent local search queries like *"kapde ki dukan near me"*, *"readymade garments in [city]"*, or *"clothing store near [city]"*.

### Target Locations Covered:
* 📍 **Core Hubs:** Ellenabad (Flagship Store), Sirsa, Rania, Dabwali, Hanumangarh.
* 📍 **Surrounding Towns & Villages (40+ locations):** Nathusari Chopta, Jiwan Nagar, Kalanwali, Tibbi, Rawatsar, Bhadra, Nohar, Sangaria, Mallekan, Jamal, Madhosinghana, Talwara Khurd, Pohraka, Kuttabadh, Chautala, Odhan, Goriwala, Ding, Chaharwala, Khuiyan Malkana, Kariwala, Loolgarh, Sherpura, Phoolkan, Bajekan, Jodhpuria, Suchan Kotli, Vaidwala, Sikandarpur, Kangpur, Ottu, Kharian, Musahibwala, Nathusari Kalan, Kashi Ka Bass, Mojdin Khera, Dhani Majra, Santoshnagar, Mithanpura, Khairpur, and more.

### Search Intent Mapping:
- **School Uniforms:** Optimized to capture local school queries (*DAV school uniform Ellenabad, SRS school uniform, Nachiketan school uniform*).
- **Brands & Quality:** Captures searches for popular regional clothing brands (*Sparky jeans Ellenabad, Mufti shirts, Raymond suiting, Peter England casuals*).
- **Vernacular Queries:** SEO optimized for Hindi-English hybrid searches (*"saste kapde ki dukan Ellenabad", "dulhe ke kapde", "wedding coat pant blazer shop Ellenabad"*).

Each localized route auto-configures targeted metadata, open-graph tags, location badges, travel distances, and localized canonical links.

---

## 📁 Project Structure

```text
ajay-readymade-website-development/
├── drizzle.config.json       # Drizzle Kit migration & schema configuration
├── next.config.ts            # Next.js framework configuration
├── package.json              # Dependencies and NPM scripts
├── tsconfig.json             # TypeScript compiler settings
├── src/
│   ├── app/                  # Next.js App Router Structure
│   │   ├── [city]/           # Dynamic regional SEO landing pages
│   │   ├── about/            # About Us page
│   │   ├── admin/            # Admin control section
│   │   ├── api/              # API route handlers (inquiry, products, health)
│   │   ├── blogs/            # Articles and fashion guides
│   │   ├── brands/           # Partner brands catalog
│   │   ├── category/         # Categorized collection views
│   │   ├── collections/      # Curated themes (e.g., Festive Edit)
│   │   ├── contact/          # Store location & inquiry page
│   │   ├── gallery/          # Store media gallery
│   │   ├── kids/             # Dedicated Kids' Wear catalog
│   │   ├── men/              # Dedicated Men's Wear catalog
│   │   ├── new-arrivals/     # New seasonal collections
│   │   ├── offers/           # Special discounts and promotional banners
│   │   ├── product/          # Product detail views
│   │   ├── trending/         # Trending styles section
│   │   ├── women/            # Dedicated Women's Wear catalog
│   │   ├── globals.css       # Tailwind CSS imports & global styles
│   │   ├── layout.tsx        # Base root layout, typography & JSON-LD schema
│   │   ├── page.tsx          # Main homepage view
│   │   ├── robots.ts         # Automated search engine robots directives
│   │   └── sitemap.ts        # Automated SEO XML sitemap generator
│   ├── components/           # Modular UI Components
│   │   ├── category-grid.tsx # Visual category tiles
│   │   ├── contact-form.tsx  # Customer inquiry submission form
│   │   ├── hero-slider.tsx   # Framer Motion banner slider
│   │   ├── product-card.tsx  # Product listing card component
│   │   ├── sections.tsx      # Landing page feature sections
│   │   ├── site-footer.tsx   # Comprehensive footer with map link & contact
│   │   ├── site-header.tsx   # Responsive sticky navbar
│   │   └── store-map.tsx     # Embedded Google Map container
│   ├── db/                   # Database Layer
│   │   ├── index.ts          # Postgres pool setup and Drizzle ORM client
│   │   └── schema.ts         # Drizzle schema models (products, leads, etc.)
│   └── lib/                  # Utilities & Static Data
│       ├── data.ts           # Product catalog, cities, & store metadata
│       └── utils.ts          # Utility functions (`clsx` + `tailwind-merge`)
```

---

## 🗄 Database Architecture

Database operations are powered by **PostgreSQL** and managed using **Drizzle ORM** (`src/db/schema.ts`).

### Schema Model Overview:
1. **`categories`** — Navigation hierarchy, target genders (`men`, `women`, `kids`, `unisex`), and priority ordering.
2. **`brands`** — Featured partner brands and catalog associations.
3. **`products`** — Core catalog containing pricing, size options, stock levels, fabric details, colors, and promotional flags (*featured, bestseller, trending, new arrivals*).
4. **`reviews`** — Buyer reviews and ratings mapped to products.
5. **`blogs`** — SEO fashion articles driving inbound search traffic.
6. **`inquiries`** — Lead capture storing customer name, phone number, message, and target product reference.
7. **`subscribers`** — Newsletter subscription list.
8. **`hero_banners`** — Promotional homepage sliders and active hero banners.

-----

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites
- **Node.js**: `v18.x` or later (Recommended: `v20.x+`)
- **PostgreSQL**: `v16.x` database instance
- **npm**: `v9.x+` package manager

### 2. Environment Setup
Create a `.env` file in the root directory:

```env
DATABASE_URL=""
```

### 3. Installation
Install project dependencies:

```bash
npm install
```

### 4. Database Migration
Generate and apply database migrations using Drizzle Kit:

```bash
# Generate SQL migration scripts from schema
npx drizzle-kit generate

# Push database schema directly to PostgreSQL
npx drizzle-kit push
```

### 5. Development Server
Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

------------------------------

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches local development server with hot-reload |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts Next.js production server |
| `npm run lint` | Runs ESLint check across the codebase |
| `npm run typecheck` | Validates TypeScript types (`tsc --noEmit`) |

---

## 📍 Contact & Store Location

* 🏢 **Store Name:** Ajay Readymade Store
* 📍 **Address:** Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102
* 🛍️ **Specialization:** Family Fashion — Men's, Women's & Kids' Wear
