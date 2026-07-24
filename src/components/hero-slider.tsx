"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { heroSlides } from "@/lib/data"
import { ChevronLeft, ChevronRight, MapPin, Star, ArrowRight, Check, TrendingUp, Award, Scissors, Flag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [slides, setSlides] = useState<any[]>(heroSlides)

  useEffect(() => {
    // Fetch slides from media API
    fetch("/api/media?section=banner")
      .then(res => res.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const activeItems = data.items.filter((item: any) => item.isActive);
          if (activeItems.length > 0) {
            const mapped = activeItems.map((item: any) => {
              const originalIndex = parseInt(item.key.replace("banner-", "")) - 1;
              const fallbackSlide = heroSlides[originalIndex] || heroSlides[0];
              return {
                id: item.id,
                badge: fallbackSlide.badge,
                title: fallbackSlide.title,
                sub: fallbackSlide.sub,
                highlight: fallbackSlide.highlight,
                image: item.image,
                cta: fallbackSlide.cta,
                link: fallbackSlide.link,
                accent: fallbackSlide.accent,
                priority: item.sortOrder
              };
            });
            setSlides(mapped);
          }
        }
      })
      .catch(err => console.error("Error loading db banners:", err))
  }, [])

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i+1)%slides.length), 6000)
    return () => clearInterval(id)
  }, [slides])

  const slide = slides[index] || heroSlides[0]

  return (
    <section className="relative overflow-hidden bg-[#F8F9FB]">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative h-[82vh] min-h-[560px] max-h-[800px] lg:h-[78vh] overflow-hidden mx-0 lg:mx-6 lg:mt-6 lg:rounded-[32px]">
          <AnimatePresence mode="wait">
            <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070F23]/90 via-[#0B1D3A]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F23]/50 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-6 sm:px-10 lg:px-16 w-full max-w-[760px]">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[12px] font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-pulse" /> {slide.badge}
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFC800] text-[#0A1931] text-[10px] font-extrabold ml-1">{slide.accent}</span>
              </motion.div>

              <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-[44px] sm:text-[56px] lg:text-[68px] font-bold leading-[0.9] tracking-[-0.04em] text-white">
                {slide.title.split(" ").slice(0,-1).join(" ")} <br/>
                <span className="text-[#FFC800]">{slide.title.split(" ").slice(-1)}</span>
              </motion.h1>

              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mt-5 text-[18px] sm:text-[20px] leading-relaxed text-white/80 max-w-[520px]">
                {slide.sub} <span className="text-white font-semibold">{slide.highlight}</span>
              </motion.p>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-3">
                <Link href={slide.link} className="h-[48px] px-8 rounded-full bg-[#FFC800] text-[#0A1931] font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#FFD438] transition shadow-gold">
                  {slide.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="h-[48px] px-6 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-medium text-[15px] inline-flex items-center gap-2 hover:bg-white/15 transition">
                  <MapPin className="w-4 h-4 text-[#FFC800]" /> Visit Store in Ellenabad
                </Link>
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i=>(
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" className="w-9 h-9 rounded-full border-2 border-white/20" />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#FFC800] border-2 border-white/20 flex items-center justify-center text-[11px] font-bold text-[#0A1931]">5k+</div>
                </div>
                <div className="text-white/70 text-sm">
                  <div className="flex items-center gap-1 text-[#FFC800]"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><span className="text-white font-semibold ml-1">4.9/5</span></div>
                  <p className="text-xs text-white/50 mt-0.5">Trusted by families in Ellenabad & Sirsa</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 z-20 flex items-center gap-3">
            <div className="flex items-center gap-2 px-2 h-11 rounded-full bg-[#0A1931]/60 backdrop-blur border border-white/10">
              <button onClick={()=>setIndex(i=> (i-1+slides.length)%slides.length)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-white hover:text-[#0A1931] transition"><ChevronLeft className="w-4 h-4" /></button>
              <div className="flex gap-1.5 px-1">
                {slides.map((_, i)=>(
                  <button key={i} onClick={()=>setIndex(i)} className={`h-1.5 rounded-full transition-all ${i===index ? "w-8 bg-[#FFC800]" : "w-4 bg-white/30 hover:bg-white/60"}`} />
                ))}
              </div>
              <button onClick={()=>setIndex(i=> (i+1)%slides.length)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#FFF9E6] text-[#0A1931] transition"><ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="hidden lg:flex h-11 px-4 rounded-full bg-[#FFC800] text-[#0A1931] text-xs font-bold items-center gap-2">45% Men • 35% Kids • 20% Women • Prioritized for You</div>
          </div>

          {/* Side stats */}
          <div className="hidden lg:flex absolute top-8 right-8 z-20 flex-col gap-3">
            <div className="glass rounded-2xl p-4 w-[220px]">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Today at Store</p>
              <p className="text-2xl font-bold text-[#0B1D3A] mt-1">127 Visitors</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 23% vs yesterday • Ellenabad</p>
            </div>
            <div className="glass-dark rounded-2xl p-4 w-[220px] text-white">
              <p className="text-xs text-white/50 uppercase tracking-wide">Festival Offer Live</p>
              <p className="text-lg font-bold mt-1 leading-tight">Wedding Collection<br/>Flat 30% OFF</p>
              <p className="text-xs text-[#E9D09A] mt-2">Till Diwali • In-store only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust strip */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-[13px]">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 border shadow-soft"><span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center"><Check className="w-4 h-4 text-green-600" /></span><span><b>5000+</b> Happy Families</span></div>
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 border shadow-soft"><span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Award className="w-4 h-4 text-blue-600" /></span><span><b>No.1</b> Rated in Ellenabad</span></div>
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 border shadow-soft"><span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center"><Scissors className="w-4 h-4 text-amber-600" /></span><span><b>Same Day</b> Alteration</span></div>
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 border shadow-soft"><span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center"><Flag className="w-4 h-4 text-slate-600" /></span><span><b>Since 1998</b> • Trusted Legacy</span></div>
      </div>
    </section>
  )
}
