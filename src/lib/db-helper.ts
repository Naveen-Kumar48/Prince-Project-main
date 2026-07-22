import { db } from "@/db";
import { sql } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { products as staticProducts, categories as staticCategories } from "./data";
import { initDb } from "@/db/init";

const JSON_DB_PATH = path.join(process.cwd(), "src/lib/mock-db-store.json");

// Helper to load fallback JSON store
function getJsonStore(): {
  products: any[];
  categories: any[];
  inquiries: any[];
  mediaItems: any[];
} {
  if (!fs.existsSync(JSON_DB_PATH)) {
    // Initialize default structure
    const initialMedia = [
      { id: 1, section: "about", key: "about-1", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", altText: "desktop about image", sortOrder: 1, isActive: true },
      { id: 2, section: "about", key: "about-2", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", altText: "about black image", sortOrder: 2, isActive: true },
      { id: 3, section: "about", key: "about-3", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80", altText: "about pink image", sortOrder: 3, isActive: true },
      { id: 4, section: "banner", key: "banner-1", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=80", altText: "Men's collection banner", sortOrder: 1, isActive: true },
      { id: 5, section: "banner", key: "banner-2", image: "https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=1400", altText: "Kids collection banner", sortOrder: 2, isActive: true },
      { id: 6, section: "banner", key: "banner-3", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1400&q=80", altText: "Wedding season banner", sortOrder: 3, isActive: true },
    ];

    const mappedCategories = staticCategories.map((c, idx) => ({
      id: idx + 1,
      name: c.name,
      slug: c.slug,
      description: `Shop the latest ${c.name} collection.`,
      parentId: null,
      priority: c.priority,
      gender: c.gender,
      image: c.image,
      isActive: true,
      createdAt: new Date().toISOString()
    }));

    const mappedProducts = staticProducts.map((p) => {
      let categoryId = 1;
      if (p.gender === "kids") categoryId = 2;
      else if (p.gender === "women") categoryId = 3;

      let brandId = 1;
      if (p.brand === "Urban Edge") brandId = 2;
      else if (p.brand === "Tiny Trends") brandId = 3;
      else if (p.brand === "Royal Club") brandId = 4;
      else if (p.brand === "Denim Co") brandId = 5;
      else if (p.brand === "Kidzo") brandId = 6;

      return {
        ...p,
        categoryId,
        brandId,
        isActive: true,
        collectionType: p.collectionType || [],
        createdAt: new Date().toISOString()
      };
    });

    const store = {
      products: mappedProducts,
      categories: mappedCategories,
      inquiries: [],
      mediaItems: initialMedia
    };

    fs.writeFileSync(JSON_DB_PATH, JSON.stringify(store, null, 2), "utf8");
    return store;
  }

  try {
    const data = fs.readFileSync(JSON_DB_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON database store, returning empty defaults:", err);
    return { products: [], categories: [], inquiries: [], mediaItems: [] };
  }
}

function saveJsonStore(store: any) {
  try {
    fs.writeFileSync(JSON_DB_PATH, JSON.stringify(store, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing JSON database store:", err);
  }
}

// Global flag to track real DB connection health
let canUseRealDb = true;
let isInitialized = false;

async function checkAndInitDb() {
  if (isInitialized) return;
  try {
    // Force a simple health check query
    await db.execute(sql`SELECT 1`);
    canUseRealDb = true;
    console.log("Database connection successful. Setting up schemas...");
    await initDb();
  } catch (e) {
    console.warn("Real database not connected, running with JSON fallback storage.");
    canUseRealDb = false;
  }
  isInitialized = true;
}

// PRODUCTS API
export async function getProducts(): Promise<any[]> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`
        SELECT p.*, c.name as category_name, c.slug as category_slug 
        FROM products p
        LEFT JOIN categories c ON p.category_id = c.id
        ORDER BY p.id ASC
      `);
      return res.rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        slug: row.slug,
        description: row.description,
        shortDescription: row.short_description,
        categoryId: row.category_id,
        category: row.category_name || 'General',
        categorySlug: row.category_slug || 'general',
        brandId: row.brand_id,
        brand: row.brand_id === 1 ? 'Louis Monarch' : row.brand_id === 2 ? 'Urban Edge' : row.brand_id === 3 ? 'Tiny Trends' : row.brand_id === 4 ? 'Royal Club' : row.brand_id === 5 ? 'Denim Co' : 'Kidzo',
        price: row.price,
        comparePrice: row.compare_price,
        fabric: row.fabric,
        sizes: typeof row.sizes === 'string' ? JSON.parse(row.sizes) : row.sizes,
        colors: typeof row.colors === 'string' ? JSON.parse(row.colors) : row.colors,
        images: typeof row.images === 'string' ? JSON.parse(row.images) : row.images,
        stock: row.stock,
        rating: row.rating,
        reviewCount: row.review_count,
        gender: row.gender,
        collectionType: typeof row.collection_type === 'string' ? JSON.parse(row.collection_type) : row.collection_type || [],
        season: row.season,
        isFeatured: row.is_featured,
        isTrending: row.is_trending,
        isNewArrival: row.is_new_arrival,
        isBestseller: row.is_bestseller,
        isActive: row.is_active !== false,
      }));
    } catch (e) {
      console.error("Database query failed, falling back to JSON:", e);
    }
  }

  // Fallback to JSON
  const store = getJsonStore();
  return store.products;
}

export async function getProductBySlug(slug: string): Promise<any | null> {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

export async function createProduct(product: any): Promise<any> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`
        INSERT INTO products (
          name, slug, description, short_description, category_id, brand_id,
          price, compare_price, fabric, sizes, colors, images, stock, rating, review_count,
          gender, collection_type, season, is_featured, is_trending, is_new_arrival, is_bestseller
        ) VALUES (
          ${product.name},
          ${product.slug},
          ${product.description},
          ${product.shortDescription},
          ${product.categoryId},
          ${product.brandId || 1},
          ${product.price},
          ${product.comparePrice || null},
          ${product.fabric},
          ${JSON.stringify(product.sizes)},
          ${JSON.stringify(product.colors || [])},
          ${JSON.stringify(product.images || [])},
          ${product.stock},
          ${product.rating || 4.5},
          ${product.reviewCount || 0},
          ${product.gender},
          ${JSON.stringify(product.collectionType || [])},
          ${product.season || ''},
          ${product.isFeatured || false},
          ${product.isTrending || false},
          ${product.isNewArrival || false},
          ${product.isBestseller || false}
        ) RETURNING id
      `);
      product.id = res.rows[0].id;
      return product;
    } catch (e) {
      console.error("Database insert failed:", e);
    }
  }

  const store = getJsonStore();
  const newId = store.products.length > 0 ? Math.max(...store.products.map(p => p.id)) + 1 : 1;
  const newProduct = { ...product, id: newId };
  store.products.push(newProduct);
  saveJsonStore(store);
  return newProduct;
}

export async function updateProduct(id: number, fields: any): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      // Map JS camelCase variables to postgres snake_case variables
      await db.execute(sql`
        UPDATE products SET 
          name = COALESCE(${fields.name}, name),
          price = COALESCE(${fields.price}, price),
          compare_price = COALESCE(${fields.comparePrice}, compare_price),
          stock = COALESCE(${fields.stock}, stock),
          gender = COALESCE(${fields.gender}, gender),
          fabric = COALESCE(${fields.fabric}, fabric),
          is_featured = COALESCE(${fields.isFeatured}, is_featured),
          is_trending = COALESCE(${fields.isTrending}, is_trending),
          is_new_arrival = COALESCE(${fields.isNewArrival}, is_new_arrival),
          is_bestseller = COALESCE(${fields.isBestseller}, is_bestseller)
        WHERE id = ${id}
      `);
      return true;
    } catch (e) {
      console.error("Database update failed:", e);
    }
  }

  const store = getJsonStore();
  const index = store.products.findIndex(p => p.id === id);
  if (index !== -1) {
    store.products[index] = { ...store.products[index], ...fields };
    saveJsonStore(store);
    return true;
  }
  return false;
}

export async function deleteProduct(id: number): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`DELETE FROM products WHERE id = ${id}`);
      return true;
    } catch (e) {
      console.error("Database delete failed:", e);
    }
  }

  const store = getJsonStore();
  const initialLen = store.products.length;
  store.products = store.products.filter(p => p.id !== id);
  saveJsonStore(store);
  return store.products.length < initialLen;
}

// CATEGORIES API
export async function getCategories(): Promise<any[]> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`SELECT * FROM categories ORDER BY priority DESC`);
      return res.rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        slug: row.slug,
        description: row.description,
        parentId: row.parent_id,
        priority: row.priority,
        gender: row.gender,
        image: row.image,
        isActive: row.is_active !== false,
      }));
    } catch (e) {
      console.error("Database query failed:", e);
    }
  }

  const store = getJsonStore();
  return store.categories;
}

export async function createCategory(cat: any): Promise<any> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`
        INSERT INTO categories (name, slug, description, priority, gender, image)
        VALUES (${cat.name}, ${cat.slug}, ${cat.description || ''}, ${cat.priority || 0}, ${cat.gender || 'men'}, ${cat.image || ''})
        RETURNING id
      `);
      cat.id = res.rows[0].id;
      return cat;
    } catch (e) {
      console.error("Database category creation failed:", e);
    }
  }

  const store = getJsonStore();
  const newId = store.categories.length > 0 ? Math.max(...store.categories.map(c => c.id)) + 1 : 1;
  const newCategory = { ...cat, id: newId, isActive: true };
  store.categories.push(newCategory);
  saveJsonStore(store);
  return newCategory;
}

export async function updateCategory(id: number, fields: any): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`
        UPDATE categories SET
          name = COALESCE(${fields.name}, name),
          slug = COALESCE(${fields.slug}, slug),
          description = COALESCE(${fields.description}, description),
          priority = COALESCE(${fields.priority}, priority),
          gender = COALESCE(${fields.gender}, gender),
          image = COALESCE(${fields.image}, image)
        WHERE id = ${id}
      `);
      return true;
    } catch (e) {
      console.error("Database category update failed:", e);
    }
  }

  const store = getJsonStore();
  const index = store.categories.findIndex(c => c.id === id);
  if (index !== -1) {
    store.categories[index] = { ...store.categories[index], ...fields };
    saveJsonStore(store);
    return true;
  }
  return false;
}

export async function deleteCategory(id: number): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`DELETE FROM categories WHERE id = ${id}`);
      return true;
    } catch (e) {
      console.error("Database category deletion failed:", e);
    }
  }

  const store = getJsonStore();
  const initialLen = store.categories.length;
  store.categories = store.categories.filter(c => c.id !== id);
  saveJsonStore(store);
  return store.categories.length < initialLen;
}

// INQUIRIES API
export async function getInquiries(): Promise<any[]> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`SELECT * FROM inquiries ORDER BY created_at DESC`);
      return res.rows.map((row: any) => ({
        id: row.id,
        name: row.name,
        phone: row.phone,
        email: row.email,
        message: row.message,
        productInterest: row.product_interest,
        source: row.source,
        createdAt: row.created_at,
      }));
    } catch (e) {
      console.error("Database query failed:", e);
    }
  }

  const store = getJsonStore();
  return store.inquiries;
}

export async function saveInquiry(inquiry: any): Promise<any> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`
        INSERT INTO inquiries (name, phone, email, message, product_interest, source)
        VALUES (${inquiry.name}, ${inquiry.phone}, ${inquiry.email || ''}, ${inquiry.message || ''}, ${inquiry.productInterest || ''}, ${inquiry.source || 'website'})
        RETURNING id, created_at
      `);
      return { ...inquiry, id: res.rows[0].id, createdAt: res.rows[0].created_at };
    } catch (e) {
      console.error("Database inquiry save failed:", e);
    }
  }

  const store = getJsonStore();
  const newId = store.inquiries.length > 0 ? Math.max(...store.inquiries.map(i => i.id)) + 1 : 1;
  const newInquiry = { ...inquiry, id: newId, createdAt: new Date().toISOString() };
  store.inquiries.unshift(newInquiry); // newer first
  saveJsonStore(store);
  return newInquiry;
}

export async function deleteInquiry(id: number): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`DELETE FROM inquiries WHERE id = ${id}`);
      return true;
    } catch (e) {
      console.error("Database inquiry deletion failed:", e);
    }
  }

  const store = getJsonStore();
  const initialLen = store.inquiries.length;
  store.inquiries = store.inquiries.filter(i => i.id !== id);
  saveJsonStore(store);
  return store.inquiries.length < initialLen;
}

// MEDIA API
export async function getMediaItems(): Promise<any[]> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`SELECT * FROM media_items ORDER BY section ASC, sort_order ASC`);
      return res.rows.map((row: any) => ({
        id: row.id,
        section: row.section,
        key: row.key,
        image: row.image,
        altText: row.alt_text,
        sortOrder: row.sort_order,
        isActive: row.is_active !== false,
        createdAt: row.created_at,
      }));
    } catch (e) {
      console.error("Database query failed:", e);
    }
  }

  const store = getJsonStore();
  return store.mediaItems;
}

export async function createMediaItem(media: any): Promise<any> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      const res = await db.execute(sql`
        INSERT INTO media_items (section, key, image, alt_text, sort_order, is_active)
        VALUES (${media.section}, ${media.key}, ${media.image}, ${media.altText || ''}, ${media.sortOrder || 0}, ${media.isActive !== false})
        RETURNING id
      `);
      media.id = res.rows[0].id;
      return media;
    } catch (e) {
      console.error("Database media insertion failed:", e);
    }
  }

  const store = getJsonStore();
  const newId = store.mediaItems.length > 0 ? Math.max(...store.mediaItems.map(m => m.id)) + 1 : 1;
  const newMedia = { ...media, id: newId, isActive: media.isActive !== false };
  store.mediaItems.push(newMedia);
  saveJsonStore(store);
  return newMedia;
}

export async function updateMediaItem(id: number, fields: any): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`
        UPDATE media_items SET
          section = COALESCE(${fields.section}, section),
          key = COALESCE(${fields.key}, key),
          image = COALESCE(${fields.image}, image),
          alt_text = COALESCE(${fields.altText}, alt_text),
          sort_order = COALESCE(${fields.sortOrder}, sort_order),
          is_active = COALESCE(${fields.isActive}, is_active)
        WHERE id = ${id}
      `);
      return true;
    } catch (e) {
      console.error("Database media update failed:", e);
    }
  }

  const store = getJsonStore();
  const index = store.mediaItems.findIndex(m => m.id === id);
  if (index !== -1) {
    store.mediaItems[index] = { ...store.mediaItems[index], ...fields };
    saveJsonStore(store);
    return true;
  }
  return false;
}

export async function deleteMediaItem(id: number): Promise<boolean> {
  await checkAndInitDb();
  if (canUseRealDb) {
    try {
      await db.execute(sql`DELETE FROM media_items WHERE id = ${id}`);
      return true;
    } catch (e) {
      console.error("Database media deletion failed:", e);
    }
  }

  const store = getJsonStore();
  const initialLen = store.mediaItems.length;
  store.mediaItems = store.mediaItems.filter(m => m.id !== id);
  saveJsonStore(store);
  return store.mediaItems.length < initialLen;
}
