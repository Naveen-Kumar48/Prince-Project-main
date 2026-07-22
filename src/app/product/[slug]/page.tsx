import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Star, Truck, ShieldCheck, RefreshCcw, MapPin, Share2, Check } from "lucide-react"
import { WhatsappIcon } from "@/components/social-icons"
import { ProductCard } from "@/components/product-card"
import { formatINR, discountPercent } from "@/lib/utils"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = products.find(pr=>pr.slug===slug)
  if(!p) return { title: "Product not found" }
  return {
    title: `${p.name} – ${p.category} | Ajay Readymade Store Ellenabad`,
    description: `${p.description} Price ${formatINR(p.price)}. Available at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Try in-store, same-day alteration. Serving Sirsa, Rania, Dabwali.`,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p=>p.slug===slug)
  if(!product) return notFound()
  const disc = product.comparePrice ? discountPercent(product.price, product.comparePrice) : 0
  const related = products.filter(p=>p.gender===product.gender && p.id!==product.id).slice(0,4)

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.slug,
    brand: { "@type": "Brand", name: product.brand },
    image: product.images,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Ajay Readymade Store" },
      priceValidUntil: "2026-12-31"
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount },
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: "5" },
    author: { "@type": "Person", name: "Verified Buyer, Ellenabad" }
  }

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-6">
        <div className="flex gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#0B1D3A]">Home</Link>/<Link href={`/${product.gender}`} className="hover:text-[#0B1D3A] capitalize">{product.gender}</Link>/<Link href="#" className="hover:text-[#0B1D3A]">{product.category}</Link>/<span className="text-[#0B1D3A] font-medium truncate">{product.name}</span>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* Gallery */}
          <div className="grid grid-cols-[80px_1fr] gap-4">
            <div className="flex flex-col gap-3">
              {product.images.map((img,i)=>(
                <button key={i} className="w-20 h-24 rounded-[14px] overflow-hidden border-2 border-[#0B1D3A] bg-[#F8F9FB]"><img src={img} alt="" className="w-full h-full object-cover" /></button>
              ))}
            </div>
            <div className="relative rounded-[24px] overflow-hidden bg-[#F8F9FB] aspect-[4/5] group">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute top-4 left-4 flex gap-2">
                {disc>0 && <span className="px-3 py-1 rounded-full bg-[#0B1D3A] text-white text-xs font-bold">{disc}% OFF</span>}
                <span className="px-3 py-1 rounded-full bg-white text-[#0B1D3A] text-xs font-bold shadow">In Store • Ellenabad</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2"><span className="px-2.5 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] text-[11px] font-bold">{product.brand}</span><span className="text-xs text-slate-500">{product.category} • {product.fabric}</span></div>
                <h1 className="text-[30px] lg:text-[36px] font-bold leading-[0.95] tracking-[-0.03em] text-[#0B1D3A]">{product.name}</h1>
                <p className="mt-2 text-slate-600">{product.shortDescription}</p>
              </div>
              <button className="w-10 h-10 rounded-full border flex items-center justify-center"><Share2 className="w-4 h-4" /></button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-[#C8A951] text-[#C8A951]" /><span className="font-semibold">{product.rating}</span><span className="text-sm text-slate-500">({product.reviewCount} reviews • Verified from Ellenabad & Sirsa)</span></div>
              <span className="w-px h-4 bg-slate-200" />
              <span className="text-sm text-green-700 font-medium inline-flex items-center gap-1"><Check className="w-4 h-4" /> {product.stock} in stock at Gurudwara Road store</span>
            </div>

            <div className="mt-6 rounded-[20px] border p-5 bg-[#F8F9FB]">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] font-bold text-[#0B1D3A]">{formatINR(product.price)}</span>
                {product.comparePrice && <span className="text-[18px] text-slate-400 line-through">{formatINR(product.comparePrice)}</span>}
                {disc>0 && <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">You save {formatINR(product.comparePrice! - product.price)}</span>}
              </div>
              <p className="text-xs text-slate-500 mt-2">MRP incl. of all taxes • In-store price may vary slightly • Exchange in 7 days</p>

              {/* Sizes */}
              <div className="mt-5">
                <div className="flex items-center justify-between"><p className="text-sm font-semibold text-[#0B1D3A]">Select Size</p><Link href="#" className="text-xs text-[#0B1D3A] underline">Size Chart</Link></div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map(s=>(
                    <button key={s} className="min-w-12 h-11 px-4 rounded-full border bg-white text-sm font-medium hover:bg-[#0B1D3A] hover:text-white hover:border-[#0B1D3A] transition">{s}</button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6">
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919812000000"}?text=Hi%20Ajay%20Readymade%20Store%2C%20I%20want%20${encodeURIComponent(product.name)}%20Size%3A`} target="_blank" className="h-12 rounded-full bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 w-full hover:opacity-90"><WhatsappIcon className="w-4 h-4" /> WhatsApp Enquiry</a>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
                <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Store Pickup Today</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Premium Quality</span>
                <span className="flex items-center gap-1"><RefreshCcw className="w-3.5 h-3.5" /> 7 Day Exchange</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-[16px] border p-4"><p className="font-semibold text-[#0B1D3A]">Product Details</p><p className="mt-2 text-slate-600 leading-relaxed">{product.description}</p><ul className="mt-3 grid grid-cols-2 gap-2 text-xs"><li><b>Fabric:</b> {product.fabric}</li><li><b>Fit:</b> Regular Premium</li><li><b>Occasion:</b> {product.collectionType.join(", ")}</li><li><b>Care:</b> Machine Wash</li></ul></div>

              <div className="rounded-[16px] bg-[#0B1D3A] text-white p-4 flex gap-3"><MapPin className="w-5 h-5 text-[#C8A951] flex-shrink-0" /><div><p className="font-semibold">Available at Ellenabad Store • Try before you buy</p><p className="text-xs text-white/60 mt-1">Gurudwara Road, Near Singla Hospital. Open 10AM-9PM. Call +91 98120-XXXXX for stock confirmation. Serving Sirsa, Rania, Dabwali, Hanumangarh.</p></div></div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-[24px] font-bold text-[#0B1D3A] mb-6">Customers who saw this also loved • {product.gender} collection</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map(p=> <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
