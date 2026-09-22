import { blogs } from "@/lib/data"
import Link from "next/link"
import type { Metadata } from "next"
import { Clock, BookOpen } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajayreadymade.com"

export const metadata: Metadata = {
  title: "Fashion Blog & Style Journal",
  description:
    "Read style guides, wedding fashion advice & garment care tips for Ellenabad families from the experts at Ajay Readymade Store.",
  alternates: { canonical: "/blogs" },
  keywords: [
    "Fashion blog Ellenabad",
    "Style tips men women kids Ellenabad",
    "Wedding dress guide Ellenabad",
    "Clothing care tips Haryana",
    "Ajay Readymade style journal",
    "School uniform guide Ellenabad 125102",
    "Men formal shirt guide Sirsa",
    "Kids winter wear Ellenabad",
    "Women kurti fashion Haryana",
  ],
  openGraph: {
    type: "website",
    url: `${siteUrl}/blogs`,
    title: "Fashion Blog – Style Tips for Ellenabad Families | Ajay Readymade",
    description:
      "Fashion advice, clothing care tips & wedding style guides for men, women & kids in Ellenabad, Sirsa, Rania.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Ajay Readymade Store Style Journal",
      },
    ],
    siteName: "Ajay Readymade Store",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Blog – Style Tips for Ellenabad Families | Ajay Readymade",
    description:
      "Fashion advice, clothing care tips & wedding style guides from Ajay Readymade Store, Ellenabad.",
    images: [`${siteUrl}/og-image.jpg`],
  },
}

// Group blogs by category for filter display
const allCategories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))]

export default function BlogListingPage() {
  const featuredBlog = blogs[0]
  const remainingBlogs = blogs.slice(1)

  // ItemList JSON-LD for blog listing
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ajay Readymade Store Style Journal",
    description:
      "Fashion tips, clothing guides, and style advice for families in Ellenabad, Sirsa, and Haryana",
    url: `${siteUrl}/blogs`,
    numberOfItems: blogs.length,
    itemListElement: blogs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.title,
      url: `${siteUrl}/blogs/${b.slug}`,
      image: b.image,
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blogs` },
    ],
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-[#0B1D3A] via-[#122954] to-[#0B1D3A] pt-16 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A951] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C8A951] rounded-full blur-[100px]" />
          </div>
          <div className="max-w-[1100px] mx-auto relative">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#C8A951]" />
              <span className="text-[#C8A951] font-bold text-sm uppercase tracking-widest">
                Style Journal
              </span>
            </div>
            <h1 className="text-[36px] lg:text-[52px] font-bold text-white leading-[1.05] tracking-[-0.02em] max-w-[680px]">
              Fashion Tips for Ellenabad, Sirsa & Rania Families
            </h1>
            <p className="mt-5 text-white/70 text-[16px] max-w-[540px] leading-relaxed">
              Expert style advice, clothing guides & local fashion insights from
              Ajay Readymade Store — your trusted clothing destination in
              Ellenabad since 1998.
            </p>
            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white hover:text-[#0B1D3A] cursor-pointer transition-colors"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 py-14">

          {/* Featured Post */}
          {featuredBlog && (
            <section aria-labelledby="featured-post" className="mb-14">
              <p className="text-xs font-bold text-[#C8A951] uppercase tracking-widest mb-5">
                Featured Article
              </p>
              <Link
                href={`/blogs/${featuredBlog.slug}`}
                id="featured-post"
                className="group grid lg:grid-cols-2 gap-0 rounded-[24px] overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                aria-label={`Read: ${featuredBlog.title}`}
              >
                <div className="overflow-hidden">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] text-xs font-bold mb-4 self-start">
                    {featuredBlog.category}
                  </span>
                  <h2 className="text-[24px] lg:text-[28px] font-bold text-[#0B1D3A] leading-snug group-hover:text-[#C8A951] transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <p className="mt-3 text-slate-600 text-[15px] leading-relaxed line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredBlog.readTime ?? "5 min read"}
                    </span>
                    <span>
                      {new Date(featuredBlog.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[#0B1D3A] font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article →
                  </span>
                </div>
              </Link>
            </section>
          )}

          {/* Remaining Blog Grid */}
          <section aria-labelledby="all-posts">
            <h2
              id="all-posts"
              className="text-[22px] font-bold text-[#0B1D3A] mb-8"
            >
              All Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group rounded-[20px] border border-slate-200 overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                  aria-label={`Read: ${post.title}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] font-bold mb-3 self-start">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-[#0B1D3A] text-[16px] leading-snug line-clamp-2 group-hover:text-[#C8A951] transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime ?? "5 min read"}
                      </span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Internal Navigation Links for SEO */}
          <section
            className="mt-16 rounded-[20px] bg-[#F8F9FB] border border-slate-200 p-8"
            aria-labelledby="category-links-heading"
          >
            <h2
              id="category-links-heading"
              className="text-[18px] font-bold text-[#0B1D3A] mb-2"
            >
              Shop by Category at Ajay Readymade Store, Ellenabad
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Browse our full clothing collections for men, women, and kids — all
              available at our store on Gurudwara Road, Near Singla Hospital,
              Ellenabad, Haryana 125102.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/men", label: "Men's Wear", desc: "Shirts, Jeans, Blazers" },
                { href: "/women", label: "Women's Wear", desc: "Kurtis, Palazzos, Ethnic" },
                { href: "/kids", label: "Kids Wear", desc: "Frocks, Uniforms, Party Wear" },
                { href: "/collections/wedding", label: "Wedding Collection", desc: "For Every Family Member" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[16px] bg-white border border-slate-200 p-4 hover:border-[#C8A951] hover:shadow-sm transition-all group"
                >
                  <p className="font-semibold text-[#0B1D3A] text-[15px] group-hover:text-[#C8A951] transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
