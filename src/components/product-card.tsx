"use client"
import Link from "next/link"
import { Star, Eye, Check } from "lucide-react"
import { formatINR, discountPercent, cn } from "@/lib/utils"
import type { Product } from "@/lib/data"
import { useState } from "react"
import { WhatsappIcon } from "@/components/social-icons"

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const disc = product.comparePrice ? discountPercent(product.price, product.comparePrice) : 0
  
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919812000000"
  const waBaseUrl = `https://wa.me/${waNumber}`
  const generalMsg = `Hi Ajay Readymade Store, I am interested in buying "${product.name}" (Price: ${formatINR(product.price)}). Is this in stock at your Ellenabad store?`
  
  return (
    <div className="group relative bg-white rounded-[16px] sm:rounded-[20px] border border-slate-100 overflow-hidden hover:shadow-premium hover:border-slate-200 transition-all duration-300 flex flex-col justify-between h-full"
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    >
      <div>
        {/* Image */}
        <div className="block relative aspect-[4/5] overflow-hidden bg-[#F8F9FB]">
          <Link href={`/product/${product.slug}`} className="block w-full h-full">
            <img 
              src={hovered && product.images[1] ? product.images[1] : product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-700" 
              loading={priority ? "eager" : "lazy"} 
            />
          </Link>
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
            {product.isBestseller && <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#0A1931] text-white text-[9px] sm:text-[10.5px] font-bold tracking-wide">BESTSELLER</span>}
            {product.isNewArrival && <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#FFC800] text-[#0A1931] text-[9px] sm:text-[10.5px] font-bold">NEW</span>}
            {disc > 0 && <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#D90429] text-white text-[9px] sm:text-[10.5px] font-bold shadow-soft">{disc}% OFF</span>}
          </div>
          
          {/* Quick View & WhatsApp Buttons for Desktop Hover */}
          <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-2.5 translate-y-full group-hover:translate-y-0 transition duration-300 flex-col gap-1.5 z-20">
            <Link href={`/product/${product.slug}`} className="w-full h-9 rounded-full bg-[#0A1931] text-white text-[12.5px] font-semibold flex items-center justify-center gap-2 hover:bg-[#122954]">
              Quick View <Eye className="w-3.5 h-3.5" />
            </Link>
            <a href={`${waBaseUrl}?text=${encodeURIComponent(generalMsg)}`} target="_blank" rel="noopener noreferrer" className="w-full h-9 rounded-full bg-[#25D366] text-white text-[12.5px] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
              WhatsApp Enquiry <WhatsappIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wide text-[#0A1931] uppercase truncate">{product.category} • {product.brand}</span>
            <span className={cn("text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0", product.gender==="men" ? "bg-[#0A1931]/10 text-[#0A1931]" : product.gender==="kids" ? "bg-amber-100 text-amber-800" : "bg-pink-100 text-pink-800")}>{product.gender.toUpperCase()}</span>
          </div>

          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="text-[13.5px] sm:text-[15px] font-semibold leading-snug text-[#0A1931] line-clamp-2 hover:text-[#122954]">{product.name}</h3>
          </Link>
          <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 mt-0.5 line-clamp-1 hidden sm:block">{product.shortDescription}</p>

          <div className="flex items-center gap-1.5 mt-2 text-xs">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FFC800] text-[#FFC800]" />
              <span className="text-[12px] sm:text-[13px] font-bold text-slate-800">{product.rating}</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400">({product.reviewCount})</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-[10px] sm:text-[11px] text-slate-500 truncate">{product.fabric}</span>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-end justify-between gap-1">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[16px] sm:text-[18px] font-extrabold text-[#0A1931] tracking-tight">{formatINR(product.price)}</span>
                {product.comparePrice && <span className="text-[11.5px] sm:text-[13px] text-slate-400 line-through">{formatINR(product.comparePrice)}</span>}
              </div>
              <span className="text-[10px] sm:text-[11px] text-green-600 font-medium flex items-center gap-0.5 mt-0.5"><Check className="w-3 h-3 flex-shrink-0" /> In stock in Ellenabad</span>
            </div>

            {/* Sizes */}
            <div className="hidden sm:flex gap-1">
              {product.sizes.slice(0,3).map(s=>(
                <a 
                  key={s} 
                  href={`${waBaseUrl}?text=${encodeURIComponent(`Hi Ajay Readymade Store, I want to enquire about "${product.name}" in Size: ${s} (Price: ${formatINR(product.price)})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-full bg-[#F8F9FB] border text-[10px] font-semibold flex items-center justify-center hover:border-[#0A1931] hover:bg-[#0A1931] hover:text-white transition"
                  title={`Enquire size ${s}`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Touch Enquiry CTA button */}
      <div className="lg:hidden p-2.5 pt-0">
        <a 
          href={`${waBaseUrl}?text=${encodeURIComponent(generalMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-8 sm:h-9 rounded-full bg-[#25D366] text-white text-[11.5px] sm:text-[12.5px] font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition"
        >
          <WhatsappIcon className="w-3.5 h-3.5" /> Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

