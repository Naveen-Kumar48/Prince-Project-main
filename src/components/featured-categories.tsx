import Link from "next/link"
import { categories } from "@/lib/data"
import { ArrowUpRight, Shirt, GraduationCap, Heart } from "lucide-react"

export function FeaturedCategories() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 lg:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#FFC800] mb-2 sm:mb-3">
              <span className="w-8 h-0.5 bg-[#FFC800]" /> Priority Collections
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0A1931]">
              Shop by Priority
              <br />
              <span className="text-slate-400 font-medium text-[20px] sm:text-[28px] lg:text-[34px]">
                Men 45% • Kids 35% • Women 20%
              </span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
            We prioritize what Ellenabad families buy most. More variety, better
            prices, faster restocks in Men&apos;s and Kids wear. Women&apos;s
            festive edited collection.
          </p>
        </div>

        {/* Priority bar visualization */}
        <div className="mb-8 lg:mb-10">
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-2">
            <span>Men</span>
            <span className="ml-auto">Kids</span>
            <span className="ml-auto">Women</span>
          </div>
          <div className="relative h-7 sm:h-8 rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
            <div className="h-full bg-[#0A1931] flex items-center justify-center text-white text-xs font-bold" style={{ width: "45%" }}>
              45%
            </div>
            <div className="h-full bg-[#FFC800] flex items-center justify-center text-[#0A1931] text-xs font-bold" style={{ width: "35%" }}>
              35%
            </div>
            <div className="h-full bg-slate-300 flex items-center justify-center text-slate-700 text-xs font-bold" style={{ width: "20%" }}>
              20%
            </div>
          </div>
        </div>

        {/* Priority cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Men 45% — largest */}
          <Link
            href="/men"
            className="md:col-span-2 lg:col-span-6 group relative rounded-[22px] sm:rounded-[28px] overflow-hidden h-[340px] sm:h-[420px] lg:h-[520px] bg-[#0A1931] shadow-xl"
          >
            <img
              src={categories[0].image}
              alt="Men's Wear"
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/60 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-white text-[#0A1931] text-[10.5px] sm:text-xs font-bold">
                45% STORE FOCUS
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#FFC800] text-[#0A1931] text-[10.5px] sm:text-xs font-bold">
                245 PRODUCTS
              </span>
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0A1931] transition">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-1.5">
                <Shirt className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC800]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFC800]">
                  Highest Priority
                </span>
              </div>
              <h3 className="text-[32px] sm:text-[42px] font-bold leading-[0.9] text-white tracking-[-0.03em]">
                Men&apos;s Wear
              </h3>
              <p className="mt-2 sm:mt-3 text-white/80 text-[13.5px] sm:text-[15px] max-w-[360px] line-clamp-2 sm:line-clamp-none">
                Formal shirts, jeans, cargos, blazers, kurtas. Highest variety in Sirsa district.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {["Formal", "Jeans", "Cargo", "Blazers", "Wedding"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/15 backdrop-blur border border-white/10 text-white text-[11px] sm:text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Kids 35% — medium */}
          <Link
            href="/kids"
            className="md:col-span-1 lg:col-span-4 group relative rounded-[22px] sm:rounded-[28px] overflow-hidden h-[300px] sm:h-[420px] lg:h-[520px] bg-[#FFFDF0] shadow-lg"
          >
            <img
              src={categories[1].image}
              alt="Kids Wear"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/30 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#FFC800] text-[#0A1931] text-[10.5px] sm:text-xs font-bold">
                35% STORE FOCUS
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white text-[#0A1931] text-[10.5px] sm:text-xs font-bold">
                180 PRODUCTS
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="flex items-center gap-2 mb-1.5">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC800]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFC800]">
                  High Priority
                </span>
              </div>
              <h3 className="text-[26px] sm:text-[32px] font-bold leading-[0.95] text-white tracking-[-0.02em]">
                Kids Fashion
              </h3>
              <p className="mt-2 text-white/80 text-xs sm:text-sm">
                School • Party • Winter • Ethnic
              </p>
              <div className="mt-3.5 inline-flex h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-[#FFC800] text-[#0A1931] text-xs sm:text-sm font-bold items-center gap-1">
                Explore Kids <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </Link>

          {/* Women 20% — smallest */}
          <Link
            href="/women"
            className="md:col-span-1 lg:col-span-2 group relative rounded-[22px] sm:rounded-[28px] overflow-hidden h-[260px] sm:h-[420px] lg:h-[520px] bg-[#F8F9FB] border shadow-sm"
          >
            <img
              src={categories[2].image}
              alt="Women's Wear"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/85 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#0A1931] text-[10.5px] sm:text-[11px] font-bold">
                20% • Curated
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-1.5">
                <Heart className="w-4 h-4 text-[#FFC800]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#FFC800]">
                  Curated
                </span>
              </div>
              <h3 className="text-[22px] sm:text-[24px] font-bold leading-[0.95] text-white">
                Women&apos;s Wear
              </h3>
              <p className="mt-1.5 text-white/80 text-[12px] sm:text-[13px]">
                Kurtis • Palazzo • Festive
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

