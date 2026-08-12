import { getMediaItems } from "@/lib/db-helper"

export const metadata = {
  title: "About Ajay Readymade Store – Since 1998, Ellenabad's Family Fashion",
  description: "Learn about Ajay Readymade Store, Ellenabad's premier family fashion destination since 1998. Men's wear, Kids wear & Women's wear on Gurudwara Road, Near Singla Hospital.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About Ajay Readymade Store",
    "Best readymade store history Ellenabad",
    "Clothing store Gurudwara Road Ellenabad",
    "Family fashion shop since 1998 Ellenabad",
    "Ajay Kapda store Sirsa Haryana",
    "Top rated garments store Ellenabad",
  ],
}

export default async function AboutPage() {
  const media = await getMediaItems()
  const aboutImages = media.filter(item => item.section === 'about' && item.isActive)
  
  const about1 = aboutImages.find(item => item.key === 'about-1')?.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
  const about2 = aboutImages.find(item => item.key === 'about-2')?.image || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
  const about3 = aboutImages.find(item => item.key === 'about-3')?.image || "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="px-3 py-1 rounded-full bg-[#FBF6E9] border text-xs font-bold text-[#C8A951]">SINCE 1998 • 27 YEARS OF TRUST</span>
          <h1 className="mt-4 text-[42px] font-bold leading-[0.9] tracking-[-0.03em] text-[#0B1D3A]">Family Fashion Is Our Legacy – Ellenabad&apos;s First Premium Readymade Store</h1>
          <p className="mt-6 text-slate-600 leading-relaxed">Founded in 1998 on Gurudwara Road, Near Singla Hospital, Ellenabad, Ajay Readymade Store started with a simple promise: premium clothing at honest prices, with fitting that respects your personality. Today, we are Google&apos;s #1 clothing store in Ellenabad, trusted by 5000+ families across Sirsa, Rania, Dabwali, Hanumangarh.</p>
          <p className="mt-4 text-slate-600 leading-relaxed">Our priority is clear: <b>Men (45%)</b> – because every family has a working professional, a college student, a wedding groom. <b>Kids (35%)</b> – because school uniforms and party frocks should last, not just look good. <b>Women (20%)</b> – curated festive kurtis for mothers who hold family together.</p>
        </div>
        
        {/* Responsive Grid of Images Managed by Admin */}
        <div className="grid gap-4">
          <div className="rounded-[24px] overflow-hidden border aspect-[16/10]">
            <img src={about1} alt="Ajay Readymade Store Main" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[20px] overflow-hidden border aspect-square">
              <img src={about2} alt="Ajay Readymade Store Interior" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
            </div>
            <div className="rounded-[20px] overflow-hidden border aspect-square">
              <img src={about3} alt="Ajay Readymade Store Selection" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
