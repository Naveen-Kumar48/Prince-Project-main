import { MetadataRoute } from "next"
import { products, blogs } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ajayreadymade.com"
  const staticRoutes = ["", "/men", "/kids", "/women", "/trending", "/new-arrivals", "/offers", "/brands", "/gallery", "/about", "/blogs", "/contact"].map(r=>({ url: `${base}${r}`, lastModified: new Date(), priority: r==="" ? 1 : 0.8 }))
  const productRoutes = products.map(p=>({ url: `${base}/product/${p.slug}`, lastModified: new Date(), priority: 0.7 }))
  const blogRoutes = blogs.map(b=>({ url: `${base}/blogs/${b.slug}`, lastModified: new Date(b.date), priority: 0.6 }))
  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
