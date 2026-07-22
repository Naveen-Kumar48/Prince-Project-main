import Link from "next/link"
import { categories } from "@/lib/data"
import { ArrowUpRight, Shirt, GraduationCap, Heart } from "lucide-react"

export function FeaturedCategories() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#C8A951] mb-3">
              <span className="w-8 h-px bg-[#C8A951]" /> Priority Collections
            </div>
            <h2 className="text-[32px] lg:text-[42px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1D3A]">
              Shop by Priority
              <br />
              <span className="text-slate-400 font-medium">
                Men 45% • Kids 35% • Women 20%
              </span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-slate-600">
            We prioritize what Ellenabad families buy most. More variety, better
            prices, faster restocks in Men&apos;s and Kids wear. Women&apos;s
            festive edited collection.
          </p>
        </div>

        {/* Priority bar visualization */}
        <div className="mb-10">
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-2">
            <span>Men</span>
            <span className="ml-auto">Kids</span>
            <span className="ml-auto">Women</span>
          </div>
          <div className="relative h-8 rounded-full bg-slate-100 overflow-hidden flex">
            <div className="h-full bg-[#0B1D3A] flex items-center justify-center text-white text-xs font-bold" style={{ width: "45%" }}>
              45%
            </div>
            <div className="h-full bg-[#C8A951] flex items-center justify-center text-white text-xs font-bold" style={{ width: "35%" }}>
              35%
            </div>
            <div className="h-full bg-slate-300 flex items-center justify-center text-slate-600 text-xs font-bold" style={{ width: "20%" }}>
              20%
            </div>
          </div>
        </div>

        {/* Priority cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Men 45% — largest */}
          <Link
            href="/men"
            className="lg:col-span-6 group relative rounded-[28px] overflow-hidden h-[520px] bg-[#0B1D3A] shadow-xl"
          >
            <img
              src={categories[0].image}
              alt="Men's Wear"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F23] via-[#0B1D3A]/60 to-transparent" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-[#0B1D3A] text-xs font-bold">
                45% STORE FOCUS
              </span>
              <span className="px-3 py-1 rounded-full bg-[#C8A951] text-white text-xs font-bold">
                245 PRODUCTS
              </span>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B1D3A] transition">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-2">
                <Shirt className="w-5 h-5 text-[#C8A951]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C8A951]">
                  Highest Priority
                </span>
              </div>
              <h3 className="text-[42px] font-bold leading-[0.9] text-white tracking-[-0.03em]">
                Men&apos;s <br />
                Wear
              </h3>
              <p className="mt-3 text-white/70 text-[15px] max-w-[360px]">
                Formal shirts, jeans, cargos, blazers, kurtas. Highest variety
                in Sirsa district.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Formal", "Jeans", "Cargo", "Blazers", "Wedding"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/10 text-white text-xs"
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
            className="lg:col-span-4 group relative rounded-[28px] overflow-hidden h-[520px] bg-[#FBF6E9] shadow-lg"
          >
            <img
              src={categories[1].image}
              alt="Kids Wear"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F23]/90 via-[#070F23]/20 to-transparent" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-[#C8A951] text-white text-xs font-bold">
                35% STORE FOCUS
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#0B1D3A] text-xs font-bold">
                180 PRODUCTS
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-[#C8A951]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C8A951]">
                  High Priority
                </span>
              </div>
              <h3 className="text-[32px] font-bold leading-[0.95] text-white tracking-[-0.02em]">
                Kids <br />
                Fashion
              </h3>
              <p className="mt-3 text-white/70 text-sm">
                School • Party • Winter • Ethnic
              </p>
              <div className="mt-4 inline-flex h-10 px-5 rounded-full bg-white text-[#0B1D3A] text-sm font-semibold items-center gap-1">
                Explore Kids <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Women 20% — smallest */}
          <Link
            href="/women"
            className="lg:col-span-2 group relative rounded-[28px] overflow-hidden h-[520px] bg-[#F8F9FB] border shadow-sm"
          >
            <img
              src={categories[2].image}
              alt="Women's Wear"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-[1.04] transition duration-[1.2s]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F23]/80 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 rounded-full bg-white/90 text-[#0B1D3A] text-[11px] font-bold">
                20% • Curated
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-[#C8A951]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C8A951]">
                  Curated
                </span>
              </div>
              <h3 className="text-[24px] font-bold leading-[0.95] text-white">
                Women&apos;s <br />
                Wear
              </h3>
              <p className="mt-2 text-white/70 text-[13px]">
                Kurtis • Palazzo • Festive
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
