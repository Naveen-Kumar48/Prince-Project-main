import { MapPin, Phone, Clock, Navigation, Store, Star } from "lucide-react"
import { store } from "@/lib/data"

export function StoreMap() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="rounded-[28px] overflow-hidden border bg-[#F8F9FB] grid lg:grid-cols-5">
          <div className="lg:col-span-2 p-8 lg:p-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1D3A] text-white text-xs font-bold mb-4"><MapPin className="w-3.5 h-3.5" /> VISIT OUR STORE • ELLENABAD #1</div>
            <h2 className="text-[30px] font-bold leading-[0.95] text-[#0B1D3A] tracking-[-0.02em]">Ajay Readymade Store – Gurudwara Road, Ellenabad</h2>
            <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">Your complete family fashion destination. 45% Men&apos;s collection, 35% Kids, 20% Women – curated for Sirsa district families. Easy parking, alteration on spot.</p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="rounded-2xl bg-white border p-4 flex gap-3"><span className="w-8 h-8 rounded-full bg-[#FBF6E9] flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-[#C8A951]" /></span><div><p className="font-semibold text-[#0B1D3A]">Full Address • NAP Consistent</p><p className="text-slate-600">{store.name}, {store.fullAddress}</p></div></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white border p-4"><p className="text-xs text-slate-500 uppercase font-bold tracking-wide flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</p><p className="font-semibold text-[#0A1931] mt-1"><a href="tel:+919596885527" className="hover:text-[#FFC800]">+91 95968-85527</a></p><p className="text-xs text-slate-500">Call • WhatsApp</p></div>
                <div className="rounded-2xl bg-white border p-4"><p className="text-xs text-slate-500 uppercase font-bold tracking-wide flex items-center gap-1"><Clock className="w-3 h-3" /> Hours</p><p className="font-semibold text-[#0B1D3A] mt-1">10AM-9PM Daily</p><p className="text-xs text-slate-500">Festival 9AM-10PM</p></div>
              </div>
              <div className="rounded-2xl bg-[#0B1D3A] text-white p-4 flex items-center justify-between">
                <div><p className="text-[#E9D09A] text-xs font-bold uppercase">Landmark</p><p className="font-semibold mt-1">Near Singla Hospital, Gurudwara Road</p></div>
                <a href={`https://maps.google.com/?q=Ajay+Readymade+Store+Gurudwara+Road+Ellenabad`} target="_blank" className="h-10 px-5 rounded-full bg-white text-[#0B1D3A] text-sm font-semibold flex items-center gap-1.5"><Navigation className="w-4 h-4" /> Directions</a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Ellenabad","Sirsa 25km","Rania 12km","Dabwali 35km","Hanumangarh 60km"].map(t=>(
                <span key={t} className="px-3 py-1.5 rounded-full bg-white border text-xs font-medium">{t}</span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 relative min-h-[420px] bg-slate-100">
            <iframe
              title="Ajay Readymade Store Location Map - Gurudwara Road, Ellenabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469!2d74.5!3d29.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI3JzAwLjAiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Ajay Readymade Store on Gurudwara Road, Ellenabad, Haryana"
            />
            <div className="absolute bottom-4 left-4 right-4 lg:left-4 lg:right-auto">
              <div className="rounded-2xl bg-white shadow-premium border p-4 flex gap-3 items-center">
                <div className="w-12 h-12 rounded-full bg-[#0B1D3A] flex items-center justify-center text-white"><Store className="w-5 h-5" /></div>
                <div><p className="font-semibold text-[#0B1D3A] text-sm">Ajay Readymade Store</p><p className="text-xs text-slate-500 flex items-center gap-1">4.9 <Star className="w-3 h-3 fill-[#C8A951] text-[#C8A951]" /> (842 reviews) • Clothing Store</p></div>
                <span className="ml-auto w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
