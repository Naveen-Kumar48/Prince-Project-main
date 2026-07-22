import Link from "next/link"
import { products, testimonials, blogs, brands } from "@/lib/data"
import { ProductCard } from "./product-card"
import { Star, Quote, ArrowRight, Gem, Flame, Backpack, Snowflake, ShieldCheck, Store, MapPin, Award, Users } from "lucide-react"

export function CollectionStrip() {
  const cols = [
    { title: "Wedding Collection", sub: "Blazers, Kurtas, Sherwanis", count: "45+ Styles", bg: "bg-[#0B1D3A] text-white", href: "/collections/wedding", Icon: Gem },
    { title: "Festival Edit", sub: "Diwali, Eid, Navratri Specials", count: "120+ Products", bg: "bg-[#FBF6E9] text-[#0B1D3A] border", href: "/collections/festival", Icon: Flame },
    { title: "School Essentials", sub: "Uniforms & Wear for Kids", count: "Trusted by 500 families", bg: "bg-white border text-[#0B1D3A]", href: "/collections/school", Icon: Backpack },
    { title: "Winter Warmers", sub: "Hoodies, Jackets, Sweaters", count: "New Arrivals", bg: "bg-slate-900 text-white", href: "/collections/winter", Icon: Snowflake },
  ]
  return (
    <section className="py-8 bg-[#F8F9FB] border-y">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map(({ Icon, ...c })=>(
            <Link key={c.title} href={c.href} className={`rounded-[20px] p-5 flex items-start justify-between hover:shadow-soft hover:-translate-y-0.5 transition ${c.bg}`}>
              <div>
                <Icon className="w-6 h-6 mb-2" />
                <h3 className="font-semibold text-[16px]">{c.title}</h3>
                <p className="text-[13px] opacity-70 mt-1">{c.sub}</p>
                <span className="mt-3 inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/10">{c.count}</span>
              </div>
              <ArrowRight className="w-4 h-4 mt-1 opacity-60" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedProducts() {
  const featured = products.filter(p=>p.isFeatured).slice(0,8)
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-[30px] lg:text-[36px] font-bold tracking-[-0.03em] text-[#0B1D3A]">Latest Men&apos;s, Women&apos;s &amp; Kids Collection</h2>
            <p className="text-slate-500 mt-2">Handpicked bestsellers, tried &amp; trusted by Ellenabad families</p>
          </div>
          <Link href="/trending" className="hidden md:inline-flex h-10 px-5 rounded-full border bg-white hover:bg-[#0B1D3A] hover:text-white transition text-sm font-medium items-center gap-1.5">View All Trending <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featured.map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}

export function BestsellerTabs() {
  const best = products.filter(p=>p.isBestseller)
  const trending = products.filter(p=>p.isTrending)
  return (
    <section className="py-12 bg-[#F8F9FB]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <h2 className="text-[30px] lg:text-[36px] font-bold tracking-[-0.03em] text-[#0B1D3A] mb-6">Affordable Fashion in Ellenabad</h2>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 rounded-full bg-[#0B1D3A] text-white text-sm font-semibold inline-flex items-center gap-1.5"><Star className="w-4 h-4 fill-current" /> Bestsellers in Ellenabad</span>
          <span className="px-4 py-2 rounded-full bg-white border text-sm font-medium inline-flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-500" /> Trending This Week (Sirsa Region)</span>
          <span className="px-4 py-2 rounded-full bg-white border text-sm font-medium inline-flex items-center gap-1.5"><Award className="w-4 h-4 text-[#C8A951]" /> New Arrivals</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {best.slice(0,4).map(p=> <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-12">
          <h3 className="text-[22px] font-bold text-[#0B1D3A] mb-6">Trending Now in Sirsa & Rania</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {trending.slice(0,4).map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF6E9] border border-[#E9D09A]/30 text-[11px] font-bold tracking-widest uppercase text-[#C8A951]"><Star className="w-3 h-3 fill-current" /> Loved by Ellenabad</div>
            <h2 className="mt-4 text-[36px] lg:text-[44px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1D3A]">What Families Say<br/><span className="text-slate-400 font-medium">About Us</span></h2>
            <p className="mt-4 text-slate-600 leading-relaxed">4.9/5 average from 842 reviews. We&apos;re not just a store, we&apos;re part of Ellenabad&apos;s family celebrations since 1998.</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#F8F9FB] p-4 border"><p className="text-2xl font-bold text-[#0B1D3A]">4.9/5</p><p className="text-xs text-slate-500 mt-1">Google Rating</p></div>
              <div className="rounded-2xl bg-[#F8F9FB] p-4 border"><p className="text-2xl font-bold text-[#0B1D3A]">5k+</p><p className="text-xs text-slate-500 mt-1">Families Served</p></div>
              <div className="rounded-2xl bg-[#F8F9FB] p-4 border"><p className="text-2xl font-bold text-[#0B1D3A]">27Y</p><p className="text-xs text-slate-500 mt-1">Trust Legacy</p></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-5">
            {testimonials.map(t=>(
              <div key={t.name} className="rounded-[24px] border bg-[#FCFCFD] p-6 shadow-soft hover:shadow-premium transition">
                <Quote className="w-6 h-6 text-[#E9D09A] mb-4" />
                <p className="text-[15px] leading-relaxed text-slate-700">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-[#0B1D3A]">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">{Array.from({ length: t.rating }).map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-[#C8A951] text-[#C8A951]" />)}</div>
                </div>
              </div>
            ))}
            <div className="rounded-[24px] bg-[#0B1D3A] p-6 text-white flex flex-col justify-between">
              <div>
                <p className="text-[#E9D09A] text-sm font-bold tracking-wide uppercase">Store Visit Reviews</p>
                <h4 className="mt-3 text-[20px] font-bold leading-tight">“Best staff helped us for wedding shopping” – 121 photos tagged at store</h4>
              </div>
              <Link href="/gallery" className="mt-6 inline-flex h-10 px-5 rounded-full bg-white text-[#0B1D3A] text-sm font-semibold items-center justify-center gap-1.5">See Gallery <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StoreGallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80",
  ]
  return (
    <section className="py-16 bg-[#F8F9FB]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-[28px] font-bold text-[#0B1D3A]">Inside Our Ellenabad Store</h2>
          <Link href="/gallery" className="text-sm font-semibold text-[#0B1D3A] hover:text-[#C8A951] inline-flex items-center gap-1.5">View Full Gallery <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {imgs.map((src,i)=>(
            <div key={i} className={`rounded-[20px] overflow-hidden border bg-white hover:shadow-premium transition group ${i===0 ? "col-span-2 row-span-2 h-[340px]" : "h-[164px]"}`}>
              <img src={src} alt="Store gallery" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-[28px] font-bold text-[#0B1D3A]">Style Journal – Tips for Ellenabad</h2>
          <Link href="/blogs" className="text-sm font-medium px-4 py-2 rounded-full border hover:bg-[#0B1D3A] hover:text-white">All Blogs</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map(b=>(
            <Link key={b.slug} href={`/blogs/${b.slug}`} className="group rounded-[20px] overflow-hidden border bg-white hover:shadow-premium transition">
              <div className="aspect-[16/10] overflow-hidden bg-[#F8F9FB]">
                <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px]"><span className="px-2.5 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] font-bold">{b.category}</span><span className="text-slate-400">{b.date}</span></div>
                <h3 className="mt-3 text-[16px] font-semibold leading-tight text-[#0B1D3A] group-hover:text-[#122954]">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BrandStrip() {
  return (
    <section className="py-10 border-y bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400">Brands We Carry • Trusted Quality</p>
          <div className="flex flex-wrap gap-3">
            {brands.map(b=>(
              <div key={b.name} className="h-11 px-5 rounded-full border bg-[#F8F9FB] flex items-center gap-2 text-sm font-semibold text-[#0B1D3A]"><span className="w-7 h-7 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[11px] font-bold">{b.logo}</span>{b.name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="py-14">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="rounded-[28px] bg-[#0B1D3A] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8A951]/20 rounded-full blur-[80px]" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-bold leading-[0.9] text-white tracking-[-0.02em]">Get Wedding Season<br/><span className="text-[#E9D09A]">Offers First</span></h2>
              <p className="mt-4 text-white/60 max-w-[420px]">Join 5,000+ locals who get exclusive WhatsApp updates on new arrivals, festival offers, and in-store events. No spam. Ellenabad only.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input placeholder="Your name" className="h-12 flex-1 px-5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none" suppressHydrationWarning />
                <input placeholder="WhatsApp number" className="h-12 flex-1 px-5 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none" suppressHydrationWarning />
              </div>
              <div className="flex gap-2">
                <input placeholder="Email (optional)" className="h-12 flex-1 px-5 rounded-full bg-white text-[#0B1D3A] placeholder:text-slate-400 outline-none" suppressHydrationWarning />
                <button className="h-12 px-8 rounded-full bg-[#C8A951] text-[#070F23] font-semibold hover:bg-[#DDBB6A] transition">Join Now</button>
              </div>
              <p className="text-xs text-white/40">By joining, you agree to receive updates on WhatsApp. Unsubscribe anytime. Privacy respected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustBadges() {
  const items = [
    { Icon: ShieldCheck, title: "Visit & Try – No Online Guesswork", desc: "See fabric, try sizes, get instant alteration on Gurudwara Road, Ellenabad." },
    { Icon: Star, title: "Google #1 in Ellenabad – 4.9 Rating", desc: "Trusted by 5000+ families for quality and honest pricing." },
    { Icon: Users, title: "Family Business – Since 1998", desc: "2 generations serving Ellenabad, Sirsa, Rania, Dabwali, Hanumangarh." },
  ]
  return (
    <section className="py-12 bg-white border-t" aria-labelledby="why-choose">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <h2 id="why-choose" className="text-[30px] lg:text-[36px] font-bold tracking-[-0.03em] text-[#0B1D3A] mb-8 text-center">Why Choose Ajay Readymade Store</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {items.map(({ Icon, title, desc })=>(
            <div key={title} className="flex gap-3 rounded-[20px] border bg-[#FCFCFD] p-5">
              <div className="w-10 h-10 rounded-full bg-[#FBF6E9] border border-[#E9D09A]/40 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-[#C8A951]" /></div>
              <div><p className="font-semibold text-[#0B1D3A]">{title}</p><p className="text-slate-500 text-[13px] mt-1">{desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
