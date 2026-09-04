import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, store, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { MapPin, Phone, Clock } from "lucide-react";
import { WhatsappIcon } from "@/components/social-icons";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return { title: "City not found" };
  return {
    title: `Best Fashion Shop near ${c.name} | Ajay Readymade Store Ellenabad`,
    description: `Looking for the best fashion shop near ${c.name}? Ajay Readymade Store is just ${c.distance} away in Ellenabad \u2013 your nearest clothing store for Men's, Women's & Kids Wear. Affordable prices, 4.9★ rated, open 7 days.`,
    alternates: { canonical: `/${c.slug}` },
    keywords: [
      // Near-me intent for this city
      `best cloth shop near ${c.name}`,
      `best cloth shop in Ellenabad 125102 near ${c.name}`,
      `best cloth store near ${c.name}`,
      `fashion shop near me ${c.name}`,
      `clothing store near ${c.name}`,
      `readymade cloth shop near ${c.name}`,
      `garments shop near ${c.name}`,
      `best clothing store near ${c.name}`,
      `nearest readymade store from ${c.name}`,
      `men's wear shop near ${c.name}`,
      `kids wear shop near ${c.name}`,
      `women's wear shop near ${c.name}`,
      `family clothing store near ${c.name}`,
      // Vernacular & Local Query intent
      `kapde ki dukan near ${c.name}`,
      `best kapda shop near ${c.name}`,
      `saste kapde ki dukan near ${c.name}`,
      `readymade suit shop near ${c.name}`,
      `wedding coat pant blazer shop ${c.name}`,
      `school dress uniform shop near ${c.name}`,
      // City-specific
      `Cloth Shop in ${c.name}`,
      `Cloth Store in ${c.name}`,
      `Clothing Store in ${c.name}`,
      `Readymade Store in ${c.name}`,
      `Men's Wear in ${c.name}`,
      `Kids Wear in ${c.name}`,
      `Women's Wear in ${c.name}`,
      `Ajay Readymade Store ${c.name}`,
      `${c.name} garments shop`,
      `${c.name} fashion boutique`,
      `affordable clothes ${c.name}`,
      `branded readymade store near ${c.name}`,
      `wedding collection near ${c.name}`,
      `festival shopping near ${c.name}`,
      // Ellenabad destination & location linkage
      `best cloth shop in Ellenabad 125102 serving ${c.name}`,
      `Readymade Store Ellenabad near ${c.name}`,
      `best clothing shop Ellenabad serving ${c.name}`,
      `garments shop Gurudwara Road Ellenabad 125102 serving ${c.name}`,
    ],
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = cities.find((x) => x.slug === city);
  if (!c) return notFound();

  const featured = products
    .filter((p) => p.isFeatured)
    .slice(0, 6);

  const cityLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: `Ajay Readymade Store – Best Fashion Shop near ${c.name}`,
    image: "https://ajayreadymade.com/og-image.jpg",
    description: `Ajay Readymade Store is the best fashion shop and clothing store near ${c.name}, just ${c.distance} from the Ellenabad main store. Serving ${c.name} residents with Men's Wear, Women's Wear, and Kids Wear at the most affordable prices.`,
    url: `https://ajayreadymade.com/${c.slug}`,
    telephone: "+91-95968-85527",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gurudwara Road, Near Singla Hospital",
      addressLocality: "Ellenabad",
      addressRegion: "Haryana",
      postalCode: "125102",
      addressCountry: "IN"
    },
    geo: { "@type": "GeoCoordinates", latitude: 29.451, longitude: 74.657 },
    areaServed: { "@type": "City", name: c.name },
    priceRange: "₹₹",
    openingHours: ["Mo-Sa 10:00-21:00", "Su 11:00-20:00"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "842" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajayreadymade.com" },
      { "@type": "ListItem", position: 2, name: c.name, item: `https://ajayreadymade.com/${c.slug}` },
    ],
  };

  return (
    <div className="bg-[#FCFCFD]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10">
        {/* Hero */}
        <div className="rounded-[28px] bg-[#0B1D3A] p-8 lg:p-12 text-white">
          <h1 className="text-[34px] lg:text-[46px] font-bold leading-[0.95] tracking-[-0.03em]">
            Best Fashion Shop near {c.name} – Ajay Readymade Store
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Searching for a clothing store near you in {c.name}? Ajay Readymade Store is your nearest top-rated fashion shop, just {c.distance} away in Ellenabad. {c.desc} We deliver the same quality, pricing, and family fashion
            experience that makes us the #1 clothing store for {c.name} shoppers.
          </p>
        </div>

        {/* Quick Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-[20px] border bg-white p-5 flex gap-3">
            <MapPin className="w-5 h-5 text-[#C8A951] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#0B1D3A]">Distance</p>
              <p className="text-sm text-slate-600">{c.distance} from Ellenabad main store</p>
            </div>
          </div>
          <div className="rounded-[20px] border bg-white p-5 flex gap-3">
            <Phone className="w-5 h-5 text-[#C8A951]" />
            <div>
              <p className="font-semibold text-[#0B1D3A]">Call / WhatsApp</p>
              <p className="text-sm text-slate-600">+91 98120-XXXXX</p>
            </div>
          </div>
          <div className="rounded-[20px] border bg-white p-5 flex gap-3">
            <Clock className="w-5 h-5 text-[#C8A951]" />
            <div>
              <p className="font-semibold text-[#0B1D3A]">Delivery</p>
              <p className="text-sm text-slate-600">Same-day in {c.name}</p>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-12">
          <h2 className="text-[26px] font-bold text-[#0B1D3A] mb-6">
            Popular in {c.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 rounded-[28px] bg-[#25D366] p-8 lg:p-12 text-center text-white">
          <h3 className="text-[28px] font-bold">Need Help Choosing?</h3>
          <p className="mt-3 max-w-2xl mx-auto">
            Chat with us on WhatsApp for size guidance, stock confirmation, and
            home delivery to {c.name}. We respond within minutes.
          </p>
          <a
            href={`https://wa.me/${store.whatsapp}?text=Hi%20Ajay%20Readymade%20Store%2C%20I%20am%20from%20${encodeURIComponent(c.name)}%20and%20need%20help%20with%20my%20order`}
            target="_blank"
            className="mt-6 inline-flex h-12 px-8 rounded-full bg-white text-[#0B1D3A] font-semibold items-center justify-center gap-2 hover:bg-[#F8F9FB] transition"
          >
            <WhatsappIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        {/* Other cities */}
        <div className="mt-12">
          <h2 className="text-[22px] font-bold text-[#0B1D3A] mb-4">
            We Also Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((x) => x.slug !== c.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/${other.slug}`}
                  className="px-4 py-2 rounded-full bg-white border text-sm font-medium hover:bg-[#0B1D3A] hover:text-white transition"
                >
                  {other.name} ({other.distance})
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
