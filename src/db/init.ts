import { db } from "./index";
import { sql } from "drizzle-orm";

export async function initDb() {
  try {
    console.log("Initializing database tables...");

    // Create categories table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        slug VARCHAR(140) NOT NULL UNIQUE,
        description TEXT,
        parent_id INTEGER,
        priority INTEGER DEFAULT 0,
        gender VARCHAR(20),
        image TEXT,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create brands table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS brands (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        slug VARCHAR(140) NOT NULL UNIQUE,
        logo TEXT,
        description TEXT,
        is_featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create products table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        slug VARCHAR(220) NOT NULL UNIQUE,
        description TEXT,
        short_description VARCHAR(300),
        category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
        brand_id INTEGER REFERENCES brands(id) ON DELETE SET NULL,
        price INTEGER NOT NULL,
        compare_price INTEGER,
        fabric VARCHAR(100),
        sizes JSONB,
        colors JSONB,
        images JSONB,
        stock INTEGER DEFAULT 100,
        rating DOUBLE PRECISION DEFAULT 4.5,
        review_count INTEGER DEFAULT 0,
        gender VARCHAR(20),
        collection_type JSONB,
        season VARCHAR(20),
        is_featured BOOLEAN DEFAULT false,
        is_trending BOOLEAN DEFAULT false,
        is_new_arrival BOOLEAN DEFAULT false,
        is_bestseller BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create reviews table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
        author_name VARCHAR(120) NOT NULL,
        rating INTEGER NOT NULL,
        comment TEXT,
        is_verified BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create blogs table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(250) NOT NULL,
        slug VARCHAR(270) NOT NULL UNIQUE,
        excerpt TEXT,
        content TEXT,
        cover_image TEXT,
        category VARCHAR(80),
        author VARCHAR(120),
        published_at TIMESTAMP DEFAULT NOW(),
        is_published BOOLEAN DEFAULT true
      )
    `);

    // Create inquiries table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(150),
        message TEXT,
        product_interest VARCHAR(200),
        source VARCHAR(50) DEFAULT 'website',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create subscribers table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(150) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Create hero_banners table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS hero_banners (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        subtitle VARCHAR(300),
        image TEXT NOT NULL,
        cta_text VARCHAR(100),
        cta_link VARCHAR(200),
        priority INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true
      )
    `);

    // Create media_items table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS media_items (
        id SERIAL PRIMARY KEY,
        section VARCHAR(50) NOT NULL,
        key VARCHAR(100) NOT NULL UNIQUE,
        image TEXT NOT NULL,
        alt_text VARCHAR(200),
        sort_order INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    console.log("Database tables created or verified successfully.");

    // Seed database if empty
    await seedDatabase();
  } catch (error) {
    console.error("Error initializing database tables:", error);
  }
}

async function seedDatabase() {
  try {
    // 1. Seed Categories
    const catCountRes = await db.execute(sql`SELECT COUNT(*) FROM categories`);
    const catCount = parseInt((catCountRes.rows[0] as any).count);
    if (catCount === 0) {
      console.log("Seeding categories...");
      await db.execute(sql`
        INSERT INTO categories (id, name, slug, description, priority, gender, image) VALUES
        (1, 'Men''s Wear', 'men', 'Premium Men''s Clothing', 45, 'men', 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80'),
        (2, 'Kids Wear', 'kids', 'Durable Kids Clothing', 35, 'kids', 'https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=800'),
        (3, 'Women''s Wear', 'women', 'Elegant Women''s Clothing', 20, 'women', 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80')
      `);
      // Reset serial sequence
      await db.execute(sql`SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))`);
    }

    // 2. Seed Brands
    const brandCountRes = await db.execute(sql`SELECT COUNT(*) FROM brands`);
    const brandCount = parseInt((brandCountRes.rows[0] as any).count);
    if (brandCount === 0) {
      console.log("Seeding brands...");
      await db.execute(sql`
        INSERT INTO brands (id, name, slug, logo, description, is_featured) VALUES
        (1, 'Louis Monarch', 'louis-monarch', 'LM', 'Premium formal shirts', true),
        (2, 'Urban Edge', 'urban-edge', 'UE', 'Cargo and casual wear', true),
        (3, 'Tiny Trends', 'tiny-trends', 'TT', 'Comfortable kids dresses', true),
        (4, 'Royal Club', 'royal-club', 'RC', 'Luxury polo shirts', true),
        (5, 'Denim Co', 'denim-co', 'DC', 'Durable stretch jeans', true),
        (6, 'Kidzo', 'kidzo', 'KZ', 'Winter and casual wear for kids', true)
      `);
      // Reset serial sequence
      await db.execute(sql`SELECT setval('brands_id_seq', (SELECT MAX(id) FROM brands))`);
    }

    // 3. Seed Products
    const prodCountRes = await db.execute(sql`SELECT COUNT(*) FROM products`);
    const prodCount = parseInt((prodCountRes.rows[0] as any).count);
    if (prodCount === 0) {
      console.log("Seeding products...");
      // Let's import mock data dynamically to seed
      const { products: defaultProducts } = require("../lib/data");

      for (const p of defaultProducts) {
        // Map category slug to id
        let categoryId = 1; // Men
        if (p.gender === "kids") categoryId = 2;
        else if (p.gender === "women") categoryId = 3;

        // Map brand name to id
        let brandId = 1;
        if (p.brand === "Urban Edge") brandId = 2;
        else if (p.brand === "Tiny Trends") brandId = 3;
        else if (p.brand === "Royal Club") brandId = 4;
        else if (p.brand === "Denim Co") brandId = 5;
        else if (p.brand === "Kidzo") brandId = 6;

        await db.execute(sql`
          INSERT INTO products (
            id, name, slug, description, short_description, category_id, brand_id,
            price, compare_price, fabric, sizes, colors, images, stock, rating, review_count,
            gender, collection_type, is_featured, is_trending, is_new_arrival, is_bestseller
          ) VALUES (
            ${p.id},
            ${p.name},
            ${p.slug},
            ${p.description},
            ${p.shortDescription},
            ${categoryId},
            ${brandId},
            ${p.price},
            ${p.comparePrice || null},
            ${p.fabric},
            ${JSON.stringify(p.sizes)},
            ${JSON.stringify(p.colors)},
            ${JSON.stringify(p.images)},
            ${p.stock},
            ${p.rating},
            ${p.reviewCount},
            ${p.gender},
            ${JSON.stringify(p.collectionType)},
            ${p.isFeatured || false},
            ${p.isTrending || false},
            ${p.isNewArrival || false},
            ${p.isBestseller || false}
          )
        `);
      }
      // Reset serial sequence
      await db.execute(sql`SELECT setval('products_id_seq', (SELECT MAX(id) FROM products))`);
    }

    // 4. Seed Media Items matching Silk Spells Admin visual and data
    const mediaCountRes = await db.execute(sql`SELECT COUNT(*) FROM media_items`);
    const mediaCount = parseInt((mediaCountRes.rows[0] as any).count);
    if (mediaCount === 0) {
      console.log("Seeding media items...");
      await db.execute(sql`
        INSERT INTO media_items (section, key, image, alt_text, sort_order, is_active) VALUES
        ('about', 'about-1', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', 'desktop about image', 1, true),
        ('about', 'about-2', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80', 'about black image', 2, true),
        ('about', 'about-3', 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80', 'about pink image', 3, true),
        ('banner', 'banner-1', 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=80', 'Men''s collection banner', 1, true),
        ('banner', 'banner-2', 'https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=1400', 'Kids collection banner', 2, true),
        ('banner', 'banner-3', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1400&q=80', 'Wedding season banner', 3, true)
      `);
    }

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
