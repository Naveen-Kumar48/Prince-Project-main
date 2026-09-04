import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

export const metadata = {
  title: "Kids Wear in Ellenabad – Frocks, School Dress, Party Wear | Ajay Readymade",
  description: "Best Kids Wear in Ellenabad (35% focus). Frocks, dresses, school uniforms, baby wear, winter hoodies, ethnic wear. 180+ products. Trusted by 500 families in Ellenabad, Sirsa, Rania.",
  alternates: {
    canonical: "/kids",
  },
  keywords: [
    "best kids cloth shop in Ellenabad 125102",
    "best cloth shop in Ellenabad 125102",
    "Kids Wear Ellenabad 125102",
    "Kids clothing store near me Ellenabad 125102",
    "Bachon ke kapde dukan Ellenabad 125102",
    "Kids school dress uniform Ellenabad 125102",
    "Girls fancy party frock Ellenabad",
    "Boys t-shirt jeans shop Ellenabad",
    "Baby dress clothing shop Ellenabad 125102",
    "Kids winter hoodie jacket Ellenabad",
    "Kids ethnic wedding wear Ellenabad 125102",
    "Best kids store Gurudwara Road Ellenabad 125102",
    "School uniform shop near Singla Hospital Ellenabad 125102",
    "DAV school uniform Ellenabad",
    "SRS school uniform Ellenabad",
    "Nachiketan school uniform Ellenabad",
    "Nivedita school dress Ellenabad",
    "Government school dress dukan Ellenabad 125102",
    "Kids school uniform store Sirsa Haryana 125102",
  ],
}

export default function KidsPage() {
  const kids = products.filter(p=>p.gender==="kids")
  return (
    <div className="bg-[#FCFCFD]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-6"><Link href="/" className="hover:text-[#0B1D3A]">Home</Link><span>/</span><span className="text-[#0B1D3A] font-semibold">Kids Wear • 35% Store Priority</span></div>
        <div className="rounded-[24px] bg-gradient-to-br from-[#C8A951] to-[#DDBB6A] p-8 lg:p-10 text-[#0B1D3A] flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#0B1D3A] text-white text-xs font-bold">35% FOCUS • TRUSTED BY 5000+ PARENTS</span>
            <h1 className="mt-4 text-[38px] lg:text-[48px] font-bold leading-[0.9] tracking-[-0.03em]">Kids Wear<br/><span className="text-white">School to Party</span></h1>
            <p className="mt-4 text-[#0B1D3A]/70 max-w-[520px] font-medium">Baby wear, boys tees, girls frocks, school uniforms, party wear, winter wear, ethnic festival. Soft fabrics, durable stitching, happy kids.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:w-[360px]">
            {[
              { label: "Products", val: "180+" },
              { label: "School Trusted", val: "500+" },
              { label: "Rating", val: "4.9" },
            ].map(s=>(
              <div key={s.label} className="rounded-2xl bg-white/80 border border-white/50 p-4 text-center"><p className="text-2xl font-bold">{s.val}</p><p className="text-xs text-slate-600 mt-1">{s.label}</p></div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="space-y-4">
            <div className="rounded-[20px] border bg-white p-5">
              <h3 className="font-semibold text-[#0B1D3A]">Filter Kids Collection</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="font-medium">Age Group</p>
                {["0-2Y Baby","2-4Y Toddler","4-8Y Kids","8-14Y Teens","School Wear","Party Wear","Winter","Ethnic"].map(c=>(
                  <label key={c} className="flex items-center gap-2"><input type="checkbox" className="rounded" />{c}</label>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] bg-[#0B1D3A] text-white p-5">
              <p className="text-sm font-semibold">School Season Special</p>
              <p className="text-xs text-white/60 mt-2">Pack of 2 school shirts at ₹699. Durable, fade-resistant.</p>
              <button className="mt-3 h-9 px-4 rounded-full bg-white text-[#0B1D3A] text-xs font-semibold">View Offer</button>
            </div>
          </aside>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {kids.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
