export const metadata = {
  title: "Store Gallery – Inside Ajay Readymade Ellenabad",
  description: "Take a visual tour inside Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad. Explore our Men's, Women's & Kids wear sections.",
  alternates: {
    canonical: "/gallery",
  },
  keywords: [
    "Ajay Readymade store photos",
    "Clothing store interior Ellenabad",
    "Garments shop Gurudwara Road photo gallery",
    "Ajay Kapda store pictures Ellenabad",
  ],
}
export default function Page(){
  const imgs = Array.from({ length: 12 }).map((_,i)=>`https://images.unsplash.com/photo-${["1441986300917-64674bd600d8","1490481651871-ab68de25d43d","1489987707025-afc232f7ea0f","1567401893414-76b7b1e5a7a5"][i%4]}?w=600&q=80`)
  return <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10"><h1 className="text-[32px] font-bold text-[#0B1D3A]">Inside Our Store – Gurudwara Road, Ellenabad</h1><div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">{imgs.map((src,i)=><div key={i} className="rounded-[16px] overflow-hidden h-[220px]"><img src={src} alt="Gallery" className="w-full h-full object-cover" /></div>)}</div></div>
}
