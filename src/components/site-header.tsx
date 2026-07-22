"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X, MapPin, Phone, ChevronDown } from "lucide-react"
import { Logo } from "./logo"
import { WhatsappIcon } from "./social-icons"
import { store } from "@/lib/data"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men", highlight: true, sub: "45%" },
  { label: "Kids", href: "/kids", highlight: true, sub: "35%" },
  { label: "Women", href: "/women", sub: "20%" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Trending", href: "/trending" },
  { label: "Offers", href: "/offers", badge: "Sale" },
  { label: "Brands", href: "/brands" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#070F23] text-white/80 text-[12.5px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C8A951]" /> Gurudwara Road, Near Singla Hospital, Ellenabad • Serving Sirsa, Rania, Dabwali, Hanumangarh</span>
            <span className="hidden lg:flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#C8A951]" /> +91 98120-xxxxx • Mon-Sun 10AM-9PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Free alteration • Easy exchange in 7 days</span>
            <div className="w-px h-4 bg-white/15" />
            <Link href="/contact" className="hover:text-white transition">Store Location</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn("sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-xl border-slate-200 shadow-soft" : "bg-white border-slate-100"
      )}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[68px] lg:h-[76px] flex items-center justify-between gap-4">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map(l => (
                <Link key={l.label} href={l.href} className={cn("relative px-3.5 py-2 rounded-full text-[14px] font-medium transition-all flex items-center gap-1.5",
                  l.highlight ? "text-[#0B1D3A] bg-[#F8F9FB] hover:bg-[#EEF1F5]" : "text-slate-600 hover:text-[#0B1D3A] hover:bg-slate-50"
                )}>
                  {l.label}
                  {l.sub && <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-bold", l.label==="Men" ? "bg-[#0B1D3A] text-white" : l.label==="Kids" ? "bg-[#C8A951] text-white" : "bg-slate-200 text-slate-600")}>{l.sub}</span>}
                  {l.badge && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{l.badge}</span>}
                </Link>
              ))}
              <div className="ml-2 relative group">
                <button className="px-3.5 py-2 rounded-full text-[14px] font-medium text-slate-600 hover:text-[#0B1D3A] hover:bg-slate-50 flex items-center gap-1">More <ChevronDown className="w-4 h-4" /></button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-premium border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/gallery" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Gallery</Link>
                  <Link href="/about" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">About Us</Link>
                  <Link href="/blogs" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Fashion Blog</Link>
                  <Link href="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm">Contact</Link>
                </div>
              </div>
            </nav>

            {/* Search + actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className={cn("flex items-center gap-2 pl-4 pr-2 h-10 rounded-full border bg-[#F8F9FB] transition-all w-[280px] focus-within:w-[340px] focus-within:bg-white focus-within:border-[#0B1D3A]/20 focus-within:shadow-soft", searchOpen ? "w-[340px] bg-white" : "")}>
                  <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input placeholder="Search shirts, frocks, jeans..." className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-slate-400" onFocus={()=>setSearchOpen(true)} onBlur={()=>setSearchOpen(false)} suppressHydrationWarning />
                  <span className="text-[11px] px-2 py-1 rounded-full bg-white border shadow-sm">⌘K</span>
                </div>
              </div>

              <a href={`https://wa.me/${store.whatsapp}?text=Hi%20Ajay%20Readymade%20Store%2C%20I%20want%20to%20enquire%20about%20products`} target="_blank" className="hidden sm:flex items-center gap-2 h-10 px-4 rounded-full bg-[#25D366] text-white text-[13px] font-semibold hover:opacity-90 transition">
                <WhatsappIcon className="w-4 h-4" /> Enquire
              </a>

              <button onClick={()=>setMobileOpen(v=>!v)} className="xl:hidden w-10 h-10 rounded-full bg-[#F8F9FB] flex items-center justify-center">
                {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="xl:hidden border-t bg-white absolute w-full left-0 top-[68px] shadow-premium max-h-[calc(100vh-68px)] overflow-auto">
            <div className="p-4">
              <div className="flex items-center gap-2 px-4 h-12 rounded-2xl bg-[#F8F9FB] mb-4">
                <Search className="w-4 h-4 text-slate-400" />
                <input placeholder="Search products..." className="flex-1 bg-transparent outline-none text-sm" suppressHydrationWarning />
              </div>
              <div className="grid gap-1">
                {navLinks.map(l=>(
                  <Link key={l.label} href={l.href} onClick={()=>setMobileOpen(false)} className={cn("flex items-center justify-between px-4 py-3 rounded-2xl font-medium", l.highlight ? "bg-[#0B1D3A] text-white" : "bg-[#F8F9FB] text-slate-700")}>
                    <span className="flex items-center gap-2">{l.label} {l.sub && <span className="text-xs opacity-70">{l.sub}</span>}</span>
                    {l.badge && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{l.badge}</span>}
                  </Link>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Link href="/gallery" onClick={()=>setMobileOpen(false)} className="px-4 py-3 rounded-2xl bg-[#F8F9FB] text-sm font-medium">Gallery</Link>
                  <Link href="/about" onClick={()=>setMobileOpen(false)} className="px-4 py-3 rounded-2xl bg-[#F8F9FB] text-sm font-medium">About</Link>
                  <Link href="/blogs" onClick={()=>setMobileOpen(false)} className="px-4 py-3 rounded-2xl bg-[#F8F9FB] text-sm font-medium">Blogs</Link>
                  <Link href="/contact" onClick={()=>setMobileOpen(false)} className="px-4 py-3 rounded-2xl bg-[#F8F9FB] text-sm font-medium">Contact</Link>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-[#FBF6E9] border border-[#E9D09A]/30">
                <p className="text-sm font-semibold text-[#0B1D3A]">Visit Our Store in Ellenabad</p>
                <p className="text-xs text-slate-600 mt-1">Gurudwara Road, Near Singla Hospital, Ellenabad - 125102</p>
                <a href="tel:+9198120" className="mt-3 inline-flex px-3 py-2 rounded-full bg-[#0B1D3A] text-white text-xs font-medium">Get Directions</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
