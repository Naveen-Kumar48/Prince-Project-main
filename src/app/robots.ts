import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || ""
  const base = rawUrl && !rawUrl.includes("localhost") ? rawUrl : "https://ajayreadymade.com"
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"]
      },
      {
        userAgent: ["Googlebot", "Bingbot", "PerplexityBot", "GPTBot", "ChatGPT-User", "Google-Extended", "ClaudeBot"],
        allow: "/",
        disallow: ["/api/", "/admin/"]
      }
    ],
    sitemap: `${base}/sitemap.xml`
  }
}

