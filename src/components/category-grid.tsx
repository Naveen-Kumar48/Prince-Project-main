import Link from "next/link"
import { categoryTiles } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function CategoryGrid() {
  const men = categoryTiles.filter(c => c.gender === "men")
  const kids = categoryTiles.filter(c => c.gender === "kids")
  const women = categoryTiles.filter(c => c.gender === "women")

  const Group = ({ title, tag, items, accent }: { title: string; tag: string; items: typeof categoryTiles; accent: string }) => (
    <div>
      <div className="flex items-end justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-[20px] font-bold text-[#0B1D3A]">{title}</h3>
          <span className={`text-[11px] px-2.5 py-1 rounded-full font-bold ${accent}`}>{tag}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {items.map(c => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="group" title={c.keyword} aria-label={c.keyword}>
            <div className="relative rounded-[16px] overflow-hidden aspect-square bg-[#F8F9FB] border border-slate-100 group-hover:shadow-premium transition">
              <img src={c.image} alt={`${c.name} - ${c.keyword} at Ajay Readymade Store`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F23]/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <span className="text-white text-[12px] font-semibold leading-tight">{c.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/80 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-14 lg:py-20 bg-white" aria-labelledby="cat-heading">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#C8A951] mb-3">
            <span className="w-8 h-px bg-[#C8A951]" /> Shop by Category <span className="w-8 h-px bg-[#C8A951]" />
          </div>
          <h2 id="cat-heading" className="text-[30px] lg:text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1D3A]">Explore Our Complete Range of Categories</h2>
          <p className="mt-3 text-slate-600 text-[15px]">From formal shirts and jeans to girls&apos; frocks and women&apos;s kurtis — the widest variety of readymade garments in Ellenabad, all under one roof.</p>
        </div>
        <div className="space-y-12">
          <Group title="Men's Wear" tag="45% FOCUS" items={men} accent="bg-[#0B1D3A] text-white" />
          <Group title="Kids Wear" tag="35% FOCUS" items={kids} accent="bg-[#C8A951] text-white" />
          <Group title="Women's Wear" tag="20% CURATED" items={women} accent="bg-slate-200 text-slate-700" />
        </div>
      </div>
    </section>
  )
}
