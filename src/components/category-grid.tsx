import Link from "next/link"
import { categoryTiles } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function CategoryGrid() {
  const men = categoryTiles.filter(c => c.gender === "men")
  const kids = categoryTiles.filter(c => c.gender === "kids")
  const women = categoryTiles.filter(c => c.gender === "women")

  const Group = ({ title, tag, items, accent }: { title: string; tag: string; items: typeof categoryTiles; accent: string }) => (
    <div>
      <div className="flex items-end justify-between mb-3.5">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <h3 className="text-[18px] sm:text-[22px] font-bold text-[#0A1931]">{title}</h3>
          <span className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full font-extrabold ${accent}`}>{tag}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
        {items.map(c => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="group" title={c.keyword} aria-label={c.keyword}>
            <div className="relative rounded-[16px] overflow-hidden aspect-square bg-[#F8F9FB] border border-slate-100 group-hover:shadow-premium transition">
              <img src={c.image} alt={`${c.name} - ${c.keyword} at Ajay Readymade Store`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <span className="text-white text-[12px] sm:text-[13px] font-bold leading-tight drop-shadow-sm">{c.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/90 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition hidden sm:block" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-10 lg:py-20 bg-white" aria-labelledby="cat-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 lg:mb-10 text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#0A1931] mb-2 sm:mb-3">
            <span className="w-8 h-0.5 bg-[#FFC800]" /> Shop by Category <span className="w-8 h-0.5 bg-[#FFC800]" />
          </div>
          <h2 id="cat-heading" className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931]">Explore Our Complete Range of Categories</h2>
          <p className="mt-2.5 text-slate-600 text-[13.5px] sm:text-[15px]">From formal shirts and jeans to girls&apos; frocks and women&apos;s kurtis — the widest variety of readymade garments in Ellenabad, all under one roof.</p>
        </div>
        <div className="space-y-10 lg:space-y-12">
          <Group title="Men's Wear" tag="45% FOCUS" items={men} accent="bg-[#0A1931] text-white" />
          <Group title="Kids Wear" tag="35% FOCUS" items={kids} accent="bg-[#FFC800] text-[#0A1931]" />
          <Group title="Women's Wear" tag="20% CURATED" items={women} accent="bg-slate-200 text-slate-700" />
        </div>
      </div>
    </section>
  )
}
