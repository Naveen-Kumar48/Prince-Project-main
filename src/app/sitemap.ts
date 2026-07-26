import { MetadataRoute } from "next"
import { products, blogs, categoryTiles } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || ""
  const base = rawUrl && !rawUrl.includes("localhost") ? rawUrl : "https://ajayreadymade.com"
  
  const staticRoutes = [
    "", "/men", "/kids", "/women", "/trending", "/new-arrivals", 
    "/offers", "/brands", "/gallery", "/about", "/blogs", "/contact"
  ].map(r => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    priority: r === "" ? 1.0 : 0.9,
    changeFrequency: "daily" as const
  }))

  const cityRoutes = [
    "/ellenabad", "/sirsa", "/rania", "/dabwali", "/hanumangarh"
  ].map(c => ({
    url: `${base}${c}`,
    lastModified: new Date(),
    priority: 0.95,
    changeFrequency: "daily" as const
  }))

  const collectionRoutes = [
    "/collections/wedding", "/collections/festival", "/collections/school", "/collections/winter"
  ].map(c => ({
    url: `${base}${c}`,
    lastModified: new Date(),
    priority: 0.85,
    changeFrequency: "weekly" as const
  }))

  const categoryRoutes = categoryTiles.map(c => ({
    url: `${base}/category/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: "weekly" as const
  }))

  const productRoutes = products.map(p => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
    priority: 0.75,
    changeFrequency: "weekly" as const
  }))

  const blogRoutes = blogs.map(b => ({
    url: `${base}/blogs/${b.slug}`,
    lastModified: new Date(b.date),
    priority: 0.7,
    changeFrequency: "monthly" as const
  }))

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...collectionRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...blogRoutes
  ]
}

