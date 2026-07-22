import { blogs } from "@/lib/data"
import { notFound } from "next/navigation"
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }){ const { slug } = await params; const b = blogs.find(x=>x.slug===slug); return { title: b ? `${b.title} | Ajay Readymade Ellenabad Blog` : "Blog not found" } }
export default async function Page({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params
  const b = blogs.find(x=>x.slug===slug)
  if(!b) return notFound()
  return (
    <div className="max-w-[800px] mx-auto px-6 py-12">
      <span className="px-3 py-1 rounded-full bg-[#FBF6E9] text-[#C8A951] text-xs font-bold">{b.category}</span>
      <h1 className="mt-4 text-[36px] font-bold leading-[0.95] text-[#0B1D3A] tracking-[-0.02em]">{b.title}</h1>
      <p className="mt-4 text-slate-500">{b.date} • 5 min read • For Ellenabad families</p>
      <img src={b.image} alt={b.title} className="mt-8 rounded-[20px] w-full aspect-[16/9] object-cover" />
      <div className="mt-8 prose prose-slate"><p>{b.excerpt} Full guide coming soon – curated for local style, wedding seasons, and North India winters. Visit Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad for live assistance.</p><p>Key tips: Choose wrinkle-free formal shirts for office, dark wash jeans for versatility, layered frocks for kids party, and embroidered kurtis for festive confidence.</p></div>
    </div>
  )
}
