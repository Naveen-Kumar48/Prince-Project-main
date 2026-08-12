import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const titleMap: any = { 
    wedding: "Wedding Collection – Blazers, Kurtas, Lehengas for Ellenabad Weddings", 
    festival: "Festival Edit – Diwali, Eid, Navratri Specials", 
    school: "School Essentials – Uniforms Trusted by 500 Families", 
    winter: "Winter Warmers – Hoodies & Jackets for North India Winters", 
    summer: "Summer Collection – Cool Cottons for Ellenabad Heat" 
  }
  return {
    title: `${titleMap[slug] || `${slug} Collection`} | Ajay Readymade Store`,
    description: `Browse the ${slug} collection at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Quality fabrics, affordable prices, and latest designs.`,
    alternates: {
      canonical: `/collections/${slug}`,
    },
    keywords: [
      `${slug} collection Ellenabad`,
      `${slug} clothes store Ellenabad`,
      `best ${slug} wear near me`,
      "Ajay Readymade Store Ellenabad",
      "Gurudwara Road garments store",
    ],
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params
  const filtered = products.filter(p=>p.collectionType.includes(slug))
  const titleMap: any = { wedding: "Wedding Collection – Blazers, Kurtas, Lehengas for Ellenabad Weddings", festival: "Festival Edit – Diwali, Eid, Navratri Specials", school: "School Essentials – Uniforms Trusted by 500 Families", winter: "Winter Warmers – Hoodies & Jackets for North India Winters", summer: "Summer Collection – Cool Cottons for Ellenabad Heat" }
  return <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10"><h1 className="text-[32px] font-bold text-[#0B1D3A]">{titleMap[slug] || `${slug} Collection`}</h1><p className="text-slate-500 mt-2">{filtered.length} products • Curated for Ellenabad, Sirsa, Rania</p><div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">{(filtered.length?filtered:products).map(p=> <ProductCard key={p.id} product={p} />)}</div></div>
}
