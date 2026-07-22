import { pgTable, text, integer, boolean, timestamp, jsonb, serial, varchar, doublePrecision } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 140 }).notNull().unique(),
  description: text("description"),
  parentId: integer("parent_id"),
  priority: integer("priority").default(0),
  gender: varchar("gender", { length: 20 }), // men, kids, women, unisex
  image: text("image"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 140 }).notNull().unique(),
  logo: text("logo"),
  description: text("description"),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 220 }).notNull().unique(),
  description: text("description"),
  shortDescription: varchar("short_description", { length: 300 }),
  categoryId: integer("category_id").references(() => categories.id),
  brandId: integer("brand_id").references(() => brands.id),
  price: integer("price").notNull(), // in paise/rupees *100? keep simple integer rupees
  comparePrice: integer("compare_price"),
  fabric: varchar("fabric", { length: 100 }),
  sizes: jsonb("sizes").$type<string[]>(),
  colors: jsonb("colors").$type<{ name: string; hex: string }[]>(),
  images: jsonb("images").$type<string[]>(),
  stock: integer("stock").default(100),
  rating: doublePrecision("rating").default(4.5),
  reviewCount: integer("review_count").default(0),
  gender: varchar("gender", { length: 20 }), // men/kids/women
  collectionType: varchar("collection_type", { length: 50 }), // wedding/festival/summer/winter/school/trending/new
  season: varchar("season", { length: 20 }),
  isFeatured: boolean("is_featured").default(false),
  isTrending: boolean("is_trending").default(false),
  isNewArrival: boolean("is_new_arrival").default(false),
  isBestseller: boolean("is_bestseller").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => products.id),
  authorName: varchar("author_name", { length: 120 }).notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  isVerified: boolean("is_verified").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 250 }).notNull(),
  slug: varchar("slug", { length: 270 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content"),
  coverImage: text("cover_image"),
  category: varchar("category", { length: 80 }),
  author: varchar("author", { length: 120 }),
  publishedAt: timestamp("published_at").defaultNow(),
  isPublished: boolean("is_published").default(true),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 150 }),
  message: text("message"),
  productInterest: varchar("product_interest", { length: 200 }),
  source: varchar("source", { length: 50 }).default("website"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 150 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const heroBanners = pgTable("hero_banners", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  subtitle: varchar("subtitle", { length: 300 }),
  image: text("image").notNull(),
  ctaText: varchar("cta_text", { length: 100 }),
  ctaLink: varchar("cta_link", { length: 200 }),
  priority: integer("priority").default(0),
  isActive: boolean("is_active").default(true),
});

export const mediaItems = pgTable("media_items", {
  id: serial("id").primaryKey(),
  section: varchar("section", { length: 50 }).notNull(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  image: text("image").notNull(),
  altText: varchar("alt_text", { length: 200 }),
  sortOrder: integer("sort_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});
