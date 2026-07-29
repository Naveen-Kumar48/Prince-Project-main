import { HeroSlider } from "@/components/hero-slider"
import { FeaturedCategories } from "@/components/featured-categories"
import { CategoryGrid } from "@/components/category-grid"
import { CollectionStrip, FeaturedProducts, BestsellerTabs, TestimonialSection, StoreGallery, BlogPreview, BrandStrip, Newsletter, TrustBadges } from "@/components/sections"
import { StoreMap } from "@/components/store-map"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Semantic H1 + intro for SEO */}
      <section className="pt-12 pb-2 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center max-w-[820px]">
          <h1 className="text-[34px] lg:text-[46px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1D3A]">Fashion for Every Family</h1>
          <p className="mt-4 text-slate-600 text-[16px] leading-relaxed">Ajay Readymade Store is the best clothing store in Ellenabad for the latest Men&apos;s, Women&apos;s &amp; Kids Wear at affordable prices. Located on Gurudwara Road, Near Singla Hospital, with new arrivals every week.</p>
        </div>
      </section>

      <FeaturedCategories />
      <CategoryGrid />
      <CollectionStrip />
      <FeaturedProducts />
      <BestsellerTabs />
      <BrandStrip />

      {/* Wedding Fest highlight */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="rounded-[28px] bg-gradient-to-br from-[#0B1D3A] via-[#122954] to-[#0B1D3A] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8A951] rounded-full blur-[120px]" />
            </div>
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full bg-[#C8A951] text-[#0B1D3A] text-xs font-bold">WEDDING SEASON 2025 • ELLENABAD&apos;S BIGGEST COLLECTION</span>
                <h2 className="mt-5 text-[36px] lg:text-[48px] font-bold leading-[0.9] text-white tracking-[-0.03em]">Groom & Family?<br/><span className="text-[#E9D09A]">We&apos;ve Got You Covered</span></h2>
                <p className="mt-4 text-white/70 text-[16px] leading-relaxed max-w-[520px]">Blazers, wedding sherwanis, kurta pajamas for men, lehengas & frocks for kids. 45+ styles tried & trusted by 300+ wedding families in Sirsa & Ellenabad last season. Same-day trial & alteration available.</p>
                <div className="mt-8 flex gap-3">
                  <Link href="/collections/wedding" className="h-12 px-7 rounded-full bg-white text-[#0B1D3A] font-semibold flex items-center justify-center gap-2 hover:bg-[#FBF6E9]">Explore Wedding Edit <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/contact" className="h-12 px-7 rounded-full bg-white/10 border border-white/20 text-white font-medium flex items-center justify-center hover:bg-white/15">Book Visit</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" className="rounded-[20px] h-[220px] w-full object-cover" alt="Wedding blazer" />
                  <div className="rounded-[20px] bg-white p-5">
                    <p className="text-xs font-bold tracking-wide text-[#C8A951] uppercase">Most Rented?</p>
                    <p className="font-semibold text-[#0B1D3A] mt-1">Navy Blazer • Trusted at 200+ weddings</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-[20px] bg-[#FBF6E9] p-5 border"><p className="text-3xl font-bold text-[#0B1D3A]">300+</p><p className="text-sm text-slate-600">Wedding families in 2024 season</p></div>
                  <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80" className="rounded-[20px] h-[220px] w-full object-cover" alt="Kids wedding wear" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <StoreGallery />
      <BlogPreview />
      <StoreMap />
      <Newsletter />
      <TrustBadges />

      {/* SEO text block */}
      <section className="py-12 bg-[#F8F9FB] border-t">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-[24px] font-bold text-[#0B1D3A]">Ajay Readymade Store – #1 Clothing Store in Ellenabad for Men&apos;s & Kids Fashion</h2>
            <p className="text-[15px] leading-relaxed text-slate-600">Welcome to Ajay Readymade Store, Ellenabad&apos;s most loved family fashion destination since 1998. Located on <strong>Gurudwara Road, Near Singla Hospital</strong>, we specialize in premium <strong>Men&apos;s Wear (45% focus)</strong> including formal shirts, casual t-shirts, polo shirts, jeans, cargo pants, trousers, jackets, blazers, and festive kurta pajamas. For <strong>Kids Wear (35% focus)</strong> we offer baby wear, boys t-shirts, girls dresses and frocks, school uniforms, party wear, winter hoodies, and ethnic festival collections. Our curated <strong>Women&apos;s Wear (20%)</strong> includes kurtis, kurti sets, palazzos, and ethnic festive wear ideal for Diwali, weddings, and family functions.</p>
            <p className="text-[15px] leading-relaxed text-slate-600">Why are we #1 on Google for “Ajay Readymade Store”, “clothing store Ellenabad”, and “best kapda shop near me”? Because 5000+ families from Ellenabad, Sirsa (25km), Rania (12km), Dabwali (35km), Hanumangarh (60km), Nathusari Chopta, Jiwan Nagar, Kalanwali, Tibbi, Rawatsar, and nearby villages (Mallekan, Talwara Khurd, Pohraka, Jamal, Kuttabadh) trust us for honest pricing, premium quality, same-day alteration, and friendly staff who know your family by name. Visit us on Gurudwara Road, Near Singla Hospital for wedding shopping, festival shopping, school dress season, and year-round family fashion. Try before you buy – no online guesswork!</p>
            <div className="not-prose mt-6 flex flex-wrap gap-2">
              {["Men's Wear Ellenabad","Kids Wear Ellenabad","Formal Shirts Sirsa","School Uniform Ellenabad","Wedding Blazer Ellenabad","Frock for Girls Rania","Jeans Shop Dabwali","Kurta Pajama Hanumangarh","Best Readymade Store Haryana","Chopta Fashion Shop","Jiwan Nagar Garments","Tibbi Rajasthan Readymade","Kapde Ki Dukan Ellenabad","Gurudwara Road Clothing Store","Singla Hospital Garments Store"].map(k=>(
                <span key={k} className="px-3 py-1 rounded-full bg-[#F3F4F6] border border-slate-200 text-xs text-slate-700 font-medium">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
