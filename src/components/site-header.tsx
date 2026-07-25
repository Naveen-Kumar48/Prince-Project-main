"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Menu, X, MapPin, Phone, ChevronDown } from "lucide-react"
import { Logo } from "./logo"
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
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/trending?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch("/api/admin/check")
        if (!res.ok) return setIsAdmin(false)
        const data = await res.json()
        if (data.authenticated) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
        }
      } catch {
        setIsAdmin(false)
      }
    }
    checkAdmin()
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0A1931] text-white/90 text-[12.5px]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#FFC800]" /> Gurudwara Road, Near Singla Hospital, Ellenabad • Serving Sirsa, Rania, Dabwali, Hanumangarh</span>
            <span className="hidden lg:flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#FFC800]" /> <a href="tel:+919596885527" className="hover:text-[#FFC800] transition">+91 95968-85527</a> • Mon-Sun 10AM-9PM</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Free alteration • Easy exchange in 7 days</span>
            <div className="w-px h-4 bg-white/20" />
            <Link href="/contact" className="hover:text-[#FFC800] transition">Store Location</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={cn("sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-xl border-slate-200 shadow-soft" : "bg-white border-slate-100"
      )}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[74px] lg:h-[86px] flex items-center justify-between gap-4">
            <Logo />

            {/* Desktop / Laptop nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map(l => (
                <Link key={l.label} href={l.href} className={cn("relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-[13px] xl:text-[14px] font-medium transition-all flex items-center gap-1",
                  l.highlight ? "text-[#0A1931] bg-[#FFFDF0] hover:bg-[#FFF9E6] border border-[#FFC800]/30" : "text-slate-700 hover:text-[#0A1931] hover:bg-slate-50"
                )}>
                  {l.label}
                  {l.sub && <span className={cn("text-[9.5px] xl:text-[10px] px-1.5 py-0.5 rounded-full font-bold", l.label==="Men" ? "bg-[#0A1931] text-white" : l.label==="Kids" ? "bg-[#FFC800] text-[#0A1931]" : "bg-slate-200 text-slate-700")}>{l.sub}</span>}
                  {l.badge && <span className="absolute -top-1 -right-1 bg-[#D90429] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow-sm">{l.badge}</span>}
                </Link>
              ))}
              <div className="ml-1 relative group">
                <button className="px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-[13px] xl:text-[14px] font-medium text-slate-700 hover:text-[#0A1931] hover:bg-slate-50 flex items-center gap-0.5">More <ChevronDown className="w-3.5 h-3.5" /></button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-premium border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/gallery" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-700 hover:text-[#0A1931]">Gallery</Link>
                  <Link href="/about" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-700 hover:text-[#0A1931]">About Us</Link>
                  <Link href="/blogs" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-700 hover:text-[#0A1931]">Fashion Blog</Link>
                  <Link href="/contact" className="block px-3 py-2 rounded-xl hover:bg-slate-50 text-sm font-medium text-slate-700 hover:text-[#0A1931]">Contact</Link>
                </div>
              </div>
            </nav>

            {/* Search + actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <form 
                  onSubmit={handleSearchSubmit} 
                  className={cn(
                    "flex items-center gap-1.5 pl-3 pr-1.5 h-9 lg:h-10 rounded-full border border-slate-200 bg-[#F8F9FB] transition-all duration-300 w-[150px] lg:w-[170px] xl:w-[230px] focus-within:w-[190px] lg:focus-within:w-[210px] xl:focus-within:w-[260px] focus-within:bg-white focus-within:border-[#0A1931]/40 focus-within:shadow-md overflow-hidden flex-shrink",
                    searchOpen ? "bg-white border-[#0A1931]/40" : ""
                  )}
                >
                  <button type="submit" aria-label="Submit search" className="flex-shrink-0">
                    <Search className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-slate-400 hover:text-[#0A1931] transition" />
                  </button>
                  <input 
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    placeholder="Search..." 
                    className="w-full min-w-0 bg-transparent outline-none text-[13px] text-[#0A1931] placeholder:text-slate-400" 
                    onFocus={()=>setSearchOpen(true)} 
                    onBlur={()=>setSearchOpen(false)} 
                    suppressHydrationWarning 
                  />
                  <button 
                    type="submit" 
                    className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full bg-slate-200/80 hover:bg-[#0A1931] hover:text-white text-slate-600 transition"
                  >
                    Enter
                  </button>
                </form>
              </div>

              {isAdmin && (
                <Link href="/admin" className="hidden xl:flex items-center gap-1.5 h-9 lg:h-10 px-3 rounded-full bg-[#0A1931] text-[#FFC800] border border-[#FFC800]/30 text-[12.5px] font-bold hover:bg-[#122954] transition shadow-soft flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span>Admin</span>
                </Link>
              )}



              <button onClick={()=>setMobileOpen(v=>!v)} className="lg:hidden w-10 h-10 rounded-full bg-[#F8F9FB] border border-slate-200/60 flex items-center justify-center text-[#0A1931] flex-shrink-0">
                {mobileOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        {mobileOpen && (
          <div className="lg:hidden border-t bg-white absolute w-full left-0 top-[68px] shadow-premium max-h-[calc(100vh-68px)] overflow-auto">
            <div className="p-4">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 px-4 h-12 rounded-2xl bg-[#F8F9FB] border border-slate-200/80 mb-4">
                <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  placeholder="Search shirts, frocks, jeans..." 
                  className="flex-1 bg-transparent outline-none text-sm text-[#0A1931] placeholder:text-slate-400" 
                  suppressHydrationWarning 
                />
                <button type="submit" className="text-xs font-bold px-3 py-1.5 rounded-xl bg-[#0A1931] text-white">Search</button>
              </form>
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
                  {isAdmin && (
                    <Link href="/admin" onClick={()=>setMobileOpen(false)} className="col-span-2 px-4 py-3 rounded-2xl bg-[#0B1D3A] text-[#C8A951] border border-[#C8A951]/20 text-sm font-bold text-center flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>Admin Workspace</span>
                    </Link>
                  )}
                </div>
              </div>
              <div className="mt-4 p-4 rounded-2xl bg-[#FBF6E9] border border-[#E9D09A]/30">
                <p className="text-sm font-semibold text-[#0B1D3A]">Visit Our Store in Ellenabad</p>
                <p className="text-xs text-slate-600 mt-1">Gurudwara Road, Near Singla Hospital, Ellenabad - 125102</p>
                <a href="tel:+919596885527" className="mt-3 inline-flex px-3 py-2 rounded-full bg-[#0A1931] text-[#FFC800] text-xs font-bold">Call Store (+91 95968-85527)</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
