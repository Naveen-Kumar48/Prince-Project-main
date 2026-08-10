import { brands } from "@/lib/data"
export const metadata = {
  title: "Premium Clothing Brands | Ajay Readymade Store Ellenabad",
  description: "Explore the top clothing brands available at Ajay Readymade Store on Gurudwara Road, near Singla Hospital, Ellenabad. Trusted quality for Men, Women & Kids.",
  alternates: {
    canonical: "/brands",
  },
}

export default function Page(){
  return <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10"><h1 className="text-[32px] font-bold text-[#0B1D3A]">Brands at Ajay Readymade • Trusted Quality</h1><div className="mt-8 grid md:grid-cols-3 gap-4">{brands.map(b=><div key={b.name} className="rounded-[20px] border bg-white p-6 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center font-bold">{b.logo}</div><div><p className="font-semibold">{b.name}</p><p className="text-xs text-slate-500">Available in Ellenabad store</p></div></div>)}</div></div>
}
