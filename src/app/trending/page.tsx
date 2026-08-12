import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
export const metadata = {
  title: "Trending Now in Ellenabad & Sirsa | Ajay Readymade",
  description: "Discover the most popular & trending fashion items this week at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Top choices for Men, Women & Kids.",
  alternates: {
    canonical: "/trending",
  },
  keywords: [
    "Trending clothes Ellenabad",
    "Latest fashion trends Sirsa Ellenabad",
    "Popular men's clothing Ellenabad",
    "Best selling kids wear Ellenabad",
    "Top rated fashion items Ellenabad",
  ],
}
export default function Page() {
  const tr = products.filter(p=>p.isTrending)
  return <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10"><h1 className="text-[32px] font-bold text-[#0B1D3A]">Trending This Week • Ellenabad, Sirsa, Rania</h1><p className="text-slate-500 mt-2">Most viewed in last 7 days at store & online</p><div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">{tr.map(p=> <ProductCard key={p.id} product={p} />)}</div></div>
}
