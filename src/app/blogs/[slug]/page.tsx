import { blogs } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajayreadymade.com"

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const b = blogs.find((x) => x.slug === slug)
  if (!b) return { title: "Blog not found" }

  const ogImage = b.image || `${siteUrl}/og-image.jpg`
  const fullUrl = `${siteUrl}/blogs/${b.slug}`

  return {
    title: b.title,
    description: b.description ?? b.excerpt,
    keywords: b.keywords ?? [],
    authors: [{ name: "Ajay Readymade Store" }],
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: "article",
      url: fullUrl,
      title: b.title,
      description: b.description ?? b.excerpt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: b.title }],
      siteName: "Ajay Readymade Store",
      locale: "en_IN",
      publishedTime: b.date,
    },
    twitter: {
      card: "summary_large_image",
      title: b.title,
      description: b.description ?? b.excerpt,
      images: [ogImage],
    },
  }
}

// Map category → internal link
const categoryLinks: Record<string, { href: string; label: string }[]> = {
  "Men's Fashion": [
    { href: "/men", label: "Men's Wear Collection" },
    { href: "/collections/wedding", label: "Wedding Collection" },
    { href: "/new-arrivals", label: "New Arrivals" },
  ],
  "Kids Fashion": [
    { href: "/kids", label: "Kids Wear Collection" },
    { href: "/collections/school", label: "School Uniforms" },
    { href: "/new-arrivals", label: "New Arrivals" },
  ],
  "Women's Fashion": [
    { href: "/women", label: "Women's Wear Collection" },
    { href: "/collections/festival", label: "Festival Collection" },
    { href: "/new-arrivals", label: "New Arrivals" },
  ],
  "Style Tips": [
    { href: "/men", label: "Men's Wear" },
    { href: "/women", label: "Women's Wear" },
    { href: "/kids", label: "Kids Wear" },
  ],
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const b = blogs.find((x) => x.slug === slug)
  if (!b) return notFound()

  const relatedPosts = blogs.filter((x) => x.slug !== slug).slice(0, 3)
  const internalLinks = categoryLinks[b.category] ?? categoryLinks["Style Tips"]
  const fullUrl = `${siteUrl}/blogs/${b.slug}`

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: b.title,
    description: b.description ?? b.excerpt,
    image: b.image,
    datePublished: b.date,
    dateModified: b.date,
    author: {
      "@type": "Organization",
      name: "Ajay Readymade Store",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Ajay Readymade Store",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    url: fullUrl,
    keywords: (b.keywords ?? []).join(", "),
    articleSection: b.category,
    inLanguage: "en-IN",
    about: {
      "@type": "Thing",
      name: "Fashion and Clothing in Ellenabad, Haryana",
    },
  }

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blogs` },
      { "@type": "ListItem", position: 3, name: b.title, item: fullUrl },
    ],
  }

  const formattedDate = new Date(b.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Nav */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[860px] mx-auto px-6 pt-8 pb-0"
      >
        <ol className="flex items-center gap-1.5 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-[#0B1D3A] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-[#0B1D3A] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li
            className="text-[#0B1D3A] font-medium truncate max-w-[200px]"
            aria-current="page"
          >
            {b.title}
          </li>
        </ol>
      </nav>

      {/* Article */}
      <article className="max-w-[860px] mx-auto px-6 py-10" itemScope itemType="https://schema.org/Article">

        {/* Category Badge */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] text-xs font-bold hover:bg-[#F5ECC8] transition-colors"
        >
          <Tag className="w-3 h-3" />
          {b.category}
        </Link>

        {/* Title */}
        <h1
          itemProp="headline"
          className="mt-5 text-[32px] lg:text-[42px] font-bold leading-[1.1] text-[#0B1D3A] tracking-[-0.02em]"
        >
          {b.title}
        </h1>

        {/* Meta: date, read time, location */}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <time itemProp="datePublished" dateTime={b.date}>
              {formattedDate}
            </time>
          </span>
          {b.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              {b.readTime}
            </span>
          )}
          <span className="text-slate-400">•</span>
          <span className="text-[#0B1D3A] font-medium">
            Ajay Readymade Store, Ellenabad
          </span>
        </div>

        {/* Hero Image */}
        <div className="mt-8 rounded-[24px] overflow-hidden shadow-lg">
          <img
            src={b.image}
            alt={b.title}
            itemProp="image"
            className="w-full aspect-[16/9] object-cover"
            loading="eager"
          />
        </div>

        {/* Excerpt / Intro */}
        <p className="mt-8 text-[18px] text-slate-700 leading-relaxed font-medium border-l-4 border-[#C8A951] pl-5 bg-[#FBF6E9]/50 py-3 pr-4 rounded-r-[12px]">
          {b.excerpt}
        </p>

        {/* Article Body */}
        <div
          className="mt-8 space-y-5"
          itemProp="articleBody"
        >
          {(b.body ?? []).map((para, i) => (
            <p
              key={i}
              className="text-[16px] leading-[1.85] text-slate-700"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Internal Links CTA Block */}
        <div className="mt-12 rounded-[20px] bg-gradient-to-br from-[#0B1D3A] to-[#122954] p-7 text-white">
          <p className="text-sm font-bold text-[#C8A951] uppercase tracking-wider mb-3">
            Shop Related Collections
          </p>
          <p className="text-white/80 text-sm mb-5">
            Explore our curated collections at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102.
          </p>
          <div className="flex flex-wrap gap-3">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-[#0B1D3A] transition-all duration-200"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Store Info Block */}
        <div className="mt-8 rounded-[20px] bg-[#F8F9FB] border border-slate-200 p-6">
          <p className="font-bold text-[#0B1D3A] text-[15px] mb-2">
            Visit Ajay Readymade Store
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>Address:</strong> Gurudwara Road, Near Singla Hospital, Ellenabad, Sirsa District, Haryana 125102
            <br />
            <strong>Phone / WhatsApp:</strong>{" "}
            <a
              href="tel:+919596885527"
              className="text-[#0B1D3A] font-semibold hover:underline"
            >
              +91-95968-85527
            </a>
            <br />
            <strong>Hours:</strong> Mon–Sat 10:00 AM – 9:00 PM, Sun 11:00 AM – 8:00 PM
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-[#0B1D3A] text-white text-sm font-semibold hover:bg-[#122954] transition-colors"
            >
              Get Directions
            </Link>
            <a
              href="https://wa.me/919596885527?text=Hi%20Ajay%20Readymade%20Store,%20I%20read%20your%20blog%20and%20want%20to%20enquire"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1dbb5b] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#0B1D3A] font-semibold text-sm hover:gap-3 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Style Journal
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          className="max-w-[1100px] mx-auto px-6 pb-16"
          aria-labelledby="related-heading"
        >
          <div className="border-t border-slate-200 pt-12">
            <h2
              id="related-heading"
              className="text-[24px] font-bold text-[#0B1D3A] mb-8"
            >
              More from the Style Journal
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group rounded-[20px] border border-slate-200 overflow-hidden bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] font-bold mb-2 self-start">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-[#0B1D3A] text-[15px] leading-snug line-clamp-2 group-hover:text-[#C8A951] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-auto pt-3">
                      {post.readTime ?? "5 min read"} •{" "}
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
