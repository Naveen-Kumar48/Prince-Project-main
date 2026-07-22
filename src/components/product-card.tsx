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
  const generalMsg = `Hi Ajay Readymade Store, I am interested in buying "${product.name}" (Price: ${formatINR(product.price)}). Is this in stock at Ellenabad store?`
  
  return (
    <div className="group relative bg-white rounded-[20px] border border-slate-100 overflow-hidden hover:shadow-premium hover:border-slate-200 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    >
      {/* Image */}
      <div className="block relative aspect-[4/5] overflow-hidden bg-[#F8F9FB]">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <img src={hovered && product.images[1] ? product.images[1] : product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" loading={priority ? "eager" : "lazy"} />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && <span className="px-2.5 py-1 rounded-full bg-[#0B1D3A] text-white text-[11px] font-bold tracking-wide">BESTSELLER</span>}
          {product.isNewArrival && <span className="px-2.5 py-1 rounded-full bg-[#C8A951] text-white text-[11px] font-bold">NEW</span>}
          {disc > 0 && <span className="px-2.5 py-1 rounded-full bg-white text-[#0B1D3A] text-[11px] font-bold shadow-soft border">{disc}% OFF</span>}
        </div>
        
        {/* Hover Actions: Quick View & WhatsApp Enquiry */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 translate-y-full group-hover:translate-y-0 transition duration-300 flex flex-col gap-1.5">
          <Link href={`/product/${product.slug}`} className="w-full h-10 rounded-full bg-[#0B1D3A] text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#122954]">
            Quick View <Eye className="w-4 h-4" />
          </Link>
          <a href={`${waBaseUrl}?text=${encodeURIComponent(generalMsg)}`} target="_blank" rel="noopener noreferrer" className="w-full h-10 rounded-full bg-[#25D366] text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba59] transition">
            WhatsApp Enquiry <WhatsappIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold tracking-wide text-[#C8A951] uppercase">{product.category} • {product.brand}</span>
          <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold", product.gender==="men" ? "bg-[#0B1D3A]/10 text-[#0B1D3A]" : product.gender==="kids" ? "bg-amber-100 text-amber-800" : "bg-pink-100 text-pink-800")}>{product.gender.toUpperCase()}</span>
        </div>
        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="text-[15px] font-semibold leading-tight text-[#0B1D3A] line-clamp-2 group-hover:text-[#122954]">{product.name}</h3>
        </Link>
        <p className="text-[12.5px] text-slate-500 mt-1 line-clamp-1">{product.shortDescription}</p>

        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#C8A951] text-[#C8A951]" />
            <span className="text-[13px] font-semibold">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>
          <span className="text-slate-200">•</span>
          <span className="text-[11px] text-slate-500">{product.fabric}</span>
        </div>

        <div className="flex items-end justify-between mt-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-[18px] font-bold text-[#0B1D3A] tracking-tight">{formatINR(product.price)}</span>
              {product.comparePrice && <span className="text-[13px] text-slate-400 line-through">{formatINR(product.comparePrice)}</span>}
            </div>
            <span className="text-[11px] text-green-600 font-medium inline-flex items-center gap-1"><Check className="w-3 h-3" /> In stock at Ellenabad store</span>
          </div>
          <div className="flex gap-1">
            {product.sizes.slice(0,4).map(s=>(
              <a 
                key={s} 
                href={`${waBaseUrl}?text=${encodeURIComponent(`Hi Ajay Readymade Store, I am interested in buying "${product.name}" in Size: ${s} (Price: ${formatINR(product.price)}). Is this size available at your Ellenabad store?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#F8F9FB] border text-[11px] font-medium flex items-center justify-center hover:border-[#0B1D3A] hover:bg-[#0B1D3A] hover:text-white cursor-pointer transition"
                title={`Enquire size ${s} on WhatsApp`}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
