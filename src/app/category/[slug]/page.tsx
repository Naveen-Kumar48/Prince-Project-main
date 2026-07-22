import { products, categoryTiles, store } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"

export function generateStaticParams() {
  return categoryTiles.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = categoryTiles.find(c => c.slug === slug)
  if (!cat) return { title: "Category not found" }
  return {
    title: `${cat.name} in Ellenabad | Ajay Readymade Store`,
    description: `Buy premium ${cat.name} at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Affordable prices, latest ${cat.keyword} for the whole family. Also serving Sirsa, Rania, Dabwali, Hanumangarh.`,
    alternates: { canonical: `/category/${cat.slug}` },
    keywords: [cat.keyword, `${cat.name} Ellenabad`, `${cat.name} near me`, "Ajay Readymade Store", "Readymade Garments Ellenabad"],
  }
}

// Map a category tile to matching products (fallback to gender group)
function productsForCategory(slug: string, gender: string) {
  const byCat = products.filter(p => p.categorySlug === slug || p.category.toLowerCase().includes(slug.replace(/^(mens|womens|kids|boys|girls|baby)-/, "").replace(/-/g, " ")))
  return byCat.length ? byCat : products.filter(p => p.gender === gender)
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = categoryTiles.find(c => c.slug === slug)
  if (!cat) return notFound()
  const list = productsForCategory(slug, cat.gender)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajayreadymade.com" },
      { "@type": "ListItem", position: 2, name: cat.gender === "men" ? "Men's Wear" : cat.gender === "kids" ? "Kids Wear" : "Women's Wear", item: `https://ajayreadymade.com/${cat.gender}` },
      { "@type": "ListItem", position: 3, name: cat.name, item: `https://ajayreadymade.com/category/${cat.slug}` },
    ],
  }

  return (
    <div className="bg-[#FCFCFD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#0B1D3A]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/${cat.gender}`} className="hover:text-[#0B1D3A] capitalize">{cat.gender}&apos;s Wear</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B1D3A] font-semibold">{cat.name}</span>
        </nav>

        <header className="rounded-[24px] bg-[#0B1D3A] p-8 lg:p-10 text-white">
          <h1 className="text-[34px] lg:text-[44px] font-bold leading-[0.9] tracking-[-0.03em]">{cat.name} in Ellenabad</h1>
          <p className="mt-4 text-white/70 max-w-[620px]">Discover the latest {cat.name.toLowerCase()} collection at Ajay Readymade Store. Premium quality, affordable prices, and the widest variety in Ellenabad. Try before you buy with same-day alteration.</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#E9D09A]"><MapPin className="w-4 h-4" /> {store.fullAddress}</p>
        </header>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* SEO text */}
        <div className="mt-14 rounded-[20px] bg-white border p-6">
          <h2 className="text-[20px] font-bold text-[#0B1D3A]">{cat.name} at Ajay Readymade Store, Ellenabad</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">Looking for the best {cat.keyword.toLowerCase()}? Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, is Ellenabad&apos;s most trusted family fashion destination since 1998. We offer a huge variety of {cat.name.toLowerCase()} at affordable prices with new arrivals every week. Families from Ellenabad, Sirsa, Rania, Dabwali, and Hanumangarh choose us for quality, honest pricing, and friendly service. Visit us today or enquire on WhatsApp.</p>
        </div>
      </div>
    </div>
  )
}
