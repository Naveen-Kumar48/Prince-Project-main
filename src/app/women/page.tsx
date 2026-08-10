import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export const metadata = {
  title: "Women's Wear in Ellenabad – Kurti, Palazzo, Ethnic | Ajay Readymade",
  description: "Curated Women's Wear in Ellenabad (20% focus). Kurti, kurti sets, leggings, palazzo, ethnic festive wear. Premium festive collection for Ellenabad, Sirsa, Rania families.",
  alternates: {
    canonical: "/women",
  },
}

export default function WomenPage() {
  const women = products.filter(p=>p.gender==="women")
  return (
    <div className="bg-[#FCFCFD]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-6"><Link href="/" className="hover:text-[#0B1D3A]">Home</Link><span>/</span><span className="text-[#0B1D3A] font-semibold">Women&apos;s Wear • 20% Curated</span></div>
        <div className="rounded-[24px] bg-white border p-8 lg:p-10 flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">20% CURATED • FESTIVE FOCUS</span>
            <h1 className="mt-4 text-[38px] lg:text-[48px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0B1D3A]">Women&apos;s<br/><span className="text-slate-400 font-medium">Festive Edit</span></h1>
            <p className="mt-4 text-slate-600 max-w-[520px]">Kurtis, kurti sets, palazzo, leggings, ethnic festive wear. Handpicked for Diwali, weddings, and family functions. Limited but premium.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:w-[360px] self-start">
            {[
              { label: "Products", val: "120+" },
              { label: "Festival", val: "New" },
              { label: "Rating", val: "4.7" },
            ].map(s=>(
              <div key={s.label} className="rounded-2xl bg-[#F8F9FB] border p-4 text-center"><p className="text-2xl font-bold text-[#0B1D3A]">{s.val}</p><p className="text-xs text-slate-500 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-4">
            <div className="rounded-[20px] border bg-white p-5">
              <h3 className="font-semibold text-[#0B1D3A]">Filter Women&apos;s</h3>
              <div className="mt-4 space-y-3 text-sm">
                {["Kurti","Kurti Set","Palazzo","Leggings","Tops","Ethnic","Western","Dupatta","Party Wear"].map(c=>(
                  <label key={c} className="flex items-center gap-2"><input type="checkbox" className="rounded" />{c}</label>
                ))}
              </div>
            </div>
          </aside>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {women.map(p=> <ProductCard key={p.id} product={p} />)}
            {women.length===0 && <div className="col-span-3 py-20 text-center border rounded-[24px] bg-white">More festive arrivals coming this Diwali • Visit store for trial</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
