import Link from "next/link"
import { Logo } from "./logo"
import { MapPin, Phone, Mail, Clock, Tag } from "lucide-react"
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsappIcon } from "./social-icons"
import { store } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1931] text-white/80">
      {/* Newsletter teaser */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFC800] flex items-center justify-center text-[#0A1931]"><Tag className="w-5 h-5" /></div>
            <div>
              <p className="text-white font-semibold">Get 10% OFF on Wedding Season Shopping</p>
              <p className="text-sm text-white/60">Join 5,000+ families in Ellenabad who get exclusive offers</p>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input placeholder="Your WhatsApp number" className="h-11 px-4 rounded-full bg-white/10 border border-white/10 placeholder:text-white/40 text-sm flex-1 md:w-[260px] outline-none focus:bg-white/15" suppressHydrationWarning />
            <button className="h-11 px-6 rounded-full bg-[#FFC800] text-[#0A1931] font-bold text-sm hover:bg-[#FFD438] transition">Get Offer</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="white" className="mb-5" />
            <p className="text-[14px] leading-relaxed text-white/60 max-w-[360px]">Ellenabad&apos;s most trusted family fashion destination since 1998. Premium menswear (45%), kids wear (35%), and women&apos;s ethnic wear. Visit us for wedding, festival, school & daily fashion.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex gap-3"><MapPin className="w-4 h-4 text-[#FFC800] mt-0.5 flex-shrink-0" /><span>{store.street}, Ellenabad, Sirsa, Haryana 125102<br /><span className="text-white/40 text-xs">Serving: Sirsa • Rania • Dabwali • Hanumangarh • Nearby Villages</span></span></div>
              <div className="flex gap-3"><Phone className="w-4 h-4 text-[#FFC800]" /><a href="tel:+919596885527" className="hover:text-white">+91 95968-85527</a></div>
              <div className="flex gap-3"><Mail className="w-4 h-4 text-[#FFC800]" /><a href="mailto:hello@ajayreadymade.com" className="hover:text-white">hello@ajayreadymade.com</a></div>
              <div className="flex gap-3"><Clock className="w-4 h-4 text-[#FFC800]" /><span>Mon-Sun: 10AM - 9PM • Festival Hours: 9AM-10PM</span></div>
            </div>

            <div className="flex gap-2 mt-6">
              <a href="https://www.instagram.com/ajay_readymade_store/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC800] hover:text-[#0A1931] transition"><InstagramIcon className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/ajayreadymade" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC800] hover:text-[#0A1931] transition"><FacebookIcon className="w-4 h-4" /></a>
              <a href="https://www.youtube.com/@ajayreadymade" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFC800] hover:text-[#0A1931] transition"><YoutubeIcon className="w-4 h-4" /></a>
              <a href={`https://wa.me/${store.whatsapp}`} aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition"><WhatsappIcon className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop Men • 45%</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/category/mens-formal-shirts" className="hover:text-white transition">Formal Shirts</Link></li>
              <li><Link href="/category/mens-tshirts" className="hover:text-white transition">T-Shirts & Polos</Link></li>
              <li><Link href="/category/mens-jeans" className="hover:text-white transition">Jeans – Slim & Regular</Link></li>
              <li><Link href="/category/mens-cargo-pants" className="hover:text-white transition">Cargo Pants</Link></li>
              <li><Link href="/category/mens-jackets" className="hover:text-white transition">Jackets & Blazers</Link></li>
              <li><Link href="/category/mens-kurta-pajama" className="hover:text-white transition">Kurta Pajama</Link></li>
              <li><Link href="/collections/wedding" className="text-[#FFC800] hover:text-white">Wedding Collection</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kids Wear • 35%</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/category/baby-wear" className="hover:text-white transition">Baby Wear (0-3Y)</Link></li>
              <li><Link href="/category/kids-school-wear" className="hover:text-white transition">School Uniforms</Link></li>
              <li><Link href="/category/kids-party-dresses" className="hover:text-white transition">Party Frocks & Dresses</Link></li>
              <li><Link href="/category/kids-winter-wear" className="hover:text-white transition">Winter Wear • Hoodies</Link></li>
              <li><Link href="/category/kids-ethnic-wear" className="hover:text-white transition">Ethnic & Festival</Link></li>
              <li><Link href="/category/kids-jeans-pants" className="hover:text-white transition">Jeans & Track Pants</Link></li>
              <li><Link href="/new-arrivals" className="text-[#FFC800] hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Women • 20% & More</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/category/womens-kurti-sets" className="hover:text-white transition">Kurti & Kurti Sets</Link></li>
              <li><Link href="/category/womens-palazzo-leggings" className="hover:text-white transition">Palazzo & Leggings</Link></li>
              <li><Link href="/category/womens-ethnic-wear" className="hover:text-white transition">Ethnic Festive Wear</Link></li>
              <li><Link href="/collections/festival" className="hover:text-white transition">Festival Edit</Link></li>
              <li><Link href="/trending" className="hover:text-white transition">Trending Now</Link></li>
              <li className="pt-2"><span className="text-white font-medium">Company</span></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Fashion Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Help & Visit</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="hover:text-white transition">Contact & Locate Store</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition">Store Gallery</Link></li>
              <li><Link href="#" className="hover:text-white transition">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition">Exchange Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
              <li className="pt-3 flex flex-col gap-2">
                <a href={`https://wa.me/${store.whatsapp}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium hover:opacity-90"><WhatsappIcon className="w-4 h-4" /> WhatsApp Us</a>
                <span className="text-xs text-white/40">Fastest response • Ellenabad #1 on Google</span>
              </li>
            </ul>
          </div>
        </div>



        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Ajay Readymade Store, Ellenabad. All rights reserved. Built for families of Haryana, Punjab & Rajasthan.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
