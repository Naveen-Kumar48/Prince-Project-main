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
    title: `Ajay Readymade Store | Clothing Store in ${c.name}`,
    description: `Ajay Readymade Store serves ${c.name} (${c.distance} from Ellenabad main store). Best Men's, Women's & Kids Wear at affordable prices. Visit us on Gurudwara Road, Near Singla Hospital, Ellenabad.`,
    alternates: { canonical: `/${c.slug}` },
    keywords: [
      `Clothing Store in ${c.name}`,
      `Readymade Store in ${c.name}`,
      `Men's Wear in ${c.name}`,
      `Kids Wear in ${c.name}`,
      `Ajay Readymade Store ${c.name}`,
      `${c.name} garments shop`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10">
        {/* Hero */}
        <div className="rounded-[28px] bg-[#0B1D3A] p-8 lg:p-12 text-white">
          <h1 className="text-[34px] lg:text-[46px] font-bold leading-[0.95] tracking-[-0.03em]">
            Ajay Readymade Store – Serving {c.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            {c.desc} We deliver the same quality, pricing, and family fashion
            experience that makes us Ellenabad&apos;s #1 clothing store.
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
