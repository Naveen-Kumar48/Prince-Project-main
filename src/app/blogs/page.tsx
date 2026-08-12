import { blogs } from "@/lib/data"
import Link from "next/link"
export const metadata = {
  title: "Fashion Blog – Style Tips for Ellenabad Families | Ajay Readymade",
  description: "Read fashion advice, clothing care tips & wedding style guides for men, women & kids in Ellenabad, Sirsa, Rania from Ajay Readymade Store.",
  alternates: {
    canonical: "/blogs",
  },
  keywords: [
    "Fashion blog Ellenabad",
    "Style tips men women kids Ellenabad",
    "Wedding dress guide Ellenabad",
    "Clothing care tips Haryana",
    "Ajay Readymade style journal",
  ],
}
export default function Page(){
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10">
      <h1 className="text-[32px] font-bold text-[#0B1D3A]">Style Journal – Tips for Ellenabad, Sirsa, Rania Families</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {blogs.map(b=>(
          <Link key={b.slug} href={`/blogs/${b.slug}`} className="rounded-[20px] border overflow-hidden block bg-white">
            <img src={b.image} alt={b.title} className="w-full aspect-[16/10] object-cover" />
            <div className="p-5"><span className="text-xs px-2 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] font-bold">{b.category}</span><h3 className="mt-2 font-semibold text-[#0B1D3A]">{b.title}</h3><p className="text-sm text-slate-500 mt-2">{b.excerpt}</p></div>
          </Link>
        ))}
      </div>
    </div>
  )
}
