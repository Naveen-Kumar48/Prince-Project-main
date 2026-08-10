import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export const metadata = {
  title: "Men's Wear in Ellenabad – Formal Shirts, Jeans, Cargo, Blazers | Ajay Readymade",
  description: "Ellenabad's largest Men's Wear collection (45% focus). Formal shirts, t-shirts, jeans, cargo pants, blazers, kurta pajama. 245+ products. Visit Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Sirsa, Rania, Dabwali delivery.",
  alternates: {
    canonical: "/men",
  },
}

export default function MenPage() {
  const mens = products.filter(p=>p.gender==="men")
  return (
    <div className="bg-[#FCFCFD]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-6"><Link href="/" className="hover:text-[#0B1D3A]">Home</Link><span>/</span><span className="text-[#0B1D3A] font-semibold">Men&apos;s Wear • 45% Store Priority</span></div>
        <div className="rounded-[24px] bg-[#0B1D3A] p-8 lg:p-10 text-white flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#C8A951] text-[#0B1D3A] text-xs font-bold">45% FOCUS • OUR NO.1 CATEGORY</span>
            <h1 className="mt-4 text-[38px] lg:text-[48px] font-bold leading-[0.9] tracking-[-0.03em]">Men&apos;s Wear<br/><span className="text-[#E9D09A]">Ellenabad&apos;s Largest</span></h1>
            <p className="mt-4 text-white/70 max-w-[520px]">Formal shirts, casual shirts, t-shirts, polo, jeans, cargos, trousers, jackets, sweaters, blazers, kurta pajama. Premium brands, honest prices, perfect fitting.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:w-[360px]">
            {[
              { label: "Products", val: "245+" },
              { label: "Brands", val: "12" },
              { label: "Rating", val: "4.8" },
            ].map(s=>(
              <div key={s.label} className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center"><p className="text-2xl font-bold">{s.val}</p><p className="text-xs text-white/50 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-4">
            <div className="rounded-[20px] border bg-white p-5">
              <h3 className="font-semibold text-[#0B1D3A]">Filter Men&apos;s Collection</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="font-medium">Category</p>
                {["Formal Shirts","Casual Shirts","T-Shirts","Jeans","Cargo Pants","Trousers","Jackets","Blazers","Kurta"].map(c=>(
                  <label key={c} className="flex items-center gap-2"><input type="checkbox" className="rounded" />{c}</label>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] bg-[#FBF6E9] border border-[#E9D09A]/30 p-5">
              <p className="text-sm font-semibold text-[#0B1D3A]">Need help? Visit store</p>
              <p className="text-xs text-slate-600 mt-2">Our staff can find perfect fitting in 2 minutes. No guesswork like online.</p>
            </div>
          </aside>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {mens.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
