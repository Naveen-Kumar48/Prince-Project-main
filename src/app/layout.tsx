import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappIcon } from "@/components/social-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ajayreadymade.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ajay Readymade Store | Best Men's, Women's & Kids Wear in Ellenabad",
    template: "%s | Ajay Readymade Store Ellenabad",
  },
  description: "Shop the latest Men's, Women's & Kids Wear at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Affordable prices, quality products & new arrivals every week.",
  keywords: [
    // ── Brand & Store Identity ──────────────────────────────
    "Ajay Readymade Store",
    "Ajay Readymade Ellenabad",
    "Ajay Readymade Store Gurudwara Road",
    "Ajay Readymade Store Ellenabad Haryana",
    "Ajay fashion store Ellenabad",

    // ── Near-Me High-Intent Keywords ────────────────────────
    "best fashion shop near me",
    "fashion shop near me",
    "clothing store near me",
    "readymade shop near me",
    "garments shop near me",
    "men's wear shop near me",
    "kids wear shop near me",
    "women's wear shop near me",
    "best readymade store near me",
    "cheap clothing store near me",
    "family clothing store near me",
    "shirt shop near me Ellenabad",
    "jeans shop near me Ellenabad",
    "school uniform shop near me Ellenabad",
    "ethnic wear shop near me Ellenabad",
    "best garment shop near me open now",
    "readymade garments shop near me Haryana",
    "branded clothes shop near me",
    "affordable clothes shop near me",
    "top-rated clothing store near me",

    // ── Ellenabad Local & Landmark Keywords ─────────────────
    "best fashion shop in Ellenabad",
    "best clothing store in Ellenabad",
    "best readymade shop in Ellenabad",
    "top garments shop Ellenabad",
    "Readymade Store in Ellenabad",
    "Clothing Store in Ellenabad",
    "Fashion Store in Ellenabad",
    "Garments Shop in Ellenabad",
    "Readymade Garments Ellenabad",
    "Fashion Boutique Ellenabad",
    "Men's Wear Ellenabad",
    "Women's Wear Ellenabad",
    "Kids Wear Ellenabad",
    "Jeans shop in Ellenabad",
    "School wear shop in Ellenabad",
    "Kids dress shop in Ellenabad",
    "Men's shirt shop near Singla Hospital Ellenabad",
    "best clothing shop near Gurudwara Road Ellenabad",
    "garments store near Singla Hospital Ellenabad",
    "readymade store Main Market Ellenabad",
    "clothing store Anaj Mandi Ellenabad",
    "kapda shop Railway Road Ellenabad",
    "fashion shop near Bus Stand Ellenabad",
    "readymade garments Nohria Bazar Ellenabad",
    "clothes shop College Road Ellenabad",
    "garments store Main Chowk Ellenabad",
    "affordable clothing shop Ellenabad",
    "branded clothes shop Ellenabad",
    "winter wear shop Ellenabad",
    "wedding collection shop Ellenabad",
    "kurta pajama shop Ellenabad",
    "No.1 readymade store Ellenabad",
    "number one clothing store Ellenabad",
    "men's jeans shop Ellenabad",
    "polo t-shirt shop Ellenabad",
    "blazer shop Ellenabad",
    "kids school uniform Ellenabad",
    "baby clothes shop Ellenabad",
    "ladies kurti shop Ellenabad",
    "palazzo shop Ellenabad",
    "leggings shop Ellenabad",
    "wholesale readymade garments Ellenabad",
    "bulk clothing purchase Ellenabad",
    "cheap readymade clothes Ellenabad",
    "latest fashion clothes Ellenabad",
    "new arrivals fashion Ellenabad",
    "festival wear shop Ellenabad",
    "Diwali clothes shopping Ellenabad",
    "Eid clothes shopping Ellenabad",
    "wedding shopping Ellenabad",
    "groom blazer Ellenabad",
    "sherwani shop Ellenabad",
    "kurta shop Ellenabad",
    "cotton shirt shop Ellenabad",
    "printed shirt shop Ellenabad",
    "track pants shop Ellenabad",
    "cargo pants shop Ellenabad",
    "lehenga choli shop Ellenabad",

    // ── Ellenabad Tehsil & Village Keywords ─────────────────
    "best fashion shop Nathusari Chopta",
    "clothing store Chopta Sirsa",
    "readymade garments shop Jiwan Nagar",
    "garments shop Mallekan Ellenabad",
    "clothing store Talwara Khurd",
    "best readymade store Kalanwali",
    "fashion shop Santoshnagar Ellenabad",
    "clothing shop Jamal Sirsa",
    "readymade store Pohraka",
    "garments shop Kuttabadh",
    "clothing store Mithanpura",
    "readymade garments Ding Sirsa",
    "clothing shop Khairpur Sirsa",

    // ── Haryana & Regional Keywords ─────────────────────────
    "best clothing store in Sirsa district Haryana",
    "readymade store Haryana",
    "fashion shop Sirsa district",
    "garments shop Haryana",
    "best readymade store Sirsa district",
    "clothing store Sirsa district Haryana",
    "family fashion store Haryana",
    "top fashion store Haryana",
    "affordable family clothes Haryana",

    // ── Nearby City & Border Keywords (serve area) ───────────
    "fashion shop near Sirsa",
    "clothing store near Sirsa",
    "best garments shop Sirsa",
    "readymade shop Rania",
    "clothing shop near Rania Haryana",
    "fashion shop near Dabwali",
    "garments shop Dabwali",
    "clothing store near Hanumangarh",
    "family fashion store Hanumangarh",
    "best fashion shop Tibbi Rajasthan",
    "readymade store Rawatsar Hanumangarh",
    "garments shop Nohar Rajasthan",
    "clothing store Sangaria Rajasthan",
    "fashion boutique Sadulshahar",
    "best clothing shop near Rajasthan border Haryana",
    "men's wear shop Hanumangarh Town",
    "kids wear shop Hanumangarh Junction",
    "readymade store near Sirsa",
    "men's clothing shop Sirsa",
    "kids wear Sirsa",
    "women's wear near Sirsa",
    "cheap clothes near Sirsa",
    "branded clothing near Dabwali",
    "family clothing near Hanumangarh",

    // ── Vernacular & Hindi Search Intent Keywords ────────────
    "kapde ki dukan Ellenabad",
    "best kapda shop in Ellenabad",
    "saste kapde ki dukan Ellenabad",
    "readymade kapda dukan Near Singla Hospital",
    "garments kapde dukan Sirsa district",
    "readymade suit ki dukan Ellenabad",
    "pant shirt ki dukan Ellenabad",
    "wedding dress ki dukan Ellenabad",
    "school dress uniform dukan Ellenabad",
    "ladies suit kurti dukan Ellenabad",
    "kids kapde ki dukan Ellenabad",

    // ── Category + Location Keywords ─────────────────────────
    "Men's Wear Shop Ellenabad",
    "Women's Wear Shop Ellenabad",
    "Kids Wear Shop Ellenabad",
    "Family Clothing Store Ellenabad",
    "School uniform shop Ellenabad Sirsa district",
    "party wear shop Ellenabad",
    "casual wear shop Ellenabad",
    "formal shirt shop Ellenabad",
    "traditional wear shop Ellenabad Haryana",
    "summer collection Ellenabad",
    "winter collection Ellenabad",
    "new collection Ellenabad 2026",
    "wedding collection Ellenabad 2026",
    "men's formal wear Ellenabad",
    "men's casual wear Ellenabad",
    "kids winter wear Ellenabad",
    "kids party wear Ellenabad",
    "girls frock shop Ellenabad",
    "boys T-shirt shop Ellenabad",
    "coat pant store Ellenabad",
    "men's waistcoats and kurta Ellenabad",
    "fancy girls frock and lehenga Ellenabad",
    "newborn baby clothing store Ellenabad",

    // ── Price-Intent & Deal Keywords ─────────────────────────
    "cheap clothes Ellenabad",
    "affordable fashion Ellenabad",
    "discount clothes shop Ellenabad",
    "sale on clothes Ellenabad",
    "best price clothes Ellenabad",
    "low price readymade garments Ellenabad",
    "clothes under 500 Ellenabad",
    "clothes under 1000 Ellenabad",

    // ── WhatsApp & Online Order Intent ───────────────────────
    "order clothes on WhatsApp Ellenabad",
    "clothing shop WhatsApp order Ellenabad",
    "home delivery clothes Ellenabad",
    "clothes delivery near Sirsa",
    "WhatsApp fashion shop Ellenabad",
    "online readymade shop Ellenabad",
  ],
  authors: [{ name: "Ajay Readymade Store" }],
  creator: "Ajay Readymade Store",
  publisher: "Ajay Readymade Store",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ajay Readymade Store",
    title: "Ajay Readymade Store | Best Men's, Women's & Kids Wear in Ellenabad",
    description: "Shop the latest Men's, Women's & Kids Wear at Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad. Affordable prices & new arrivals every week.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ajay Readymade Store Ellenabad - Family Fashion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Readymade Store | Men's, Women's & Kids Wear in Ellenabad",
    description: "Latest Men's, Women's & Kids Wear at affordable prices. Gurudwara Road, Near Singla Hospital, Ellenabad.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "EvOfUDkXuXYL9HMlVBcCAFUxTiPrsLCYBJXEU9E91Zs" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${siteUrl}/#organization`,
    name: "Ajay Readymade Store",
    alternateName: ["Ajay Readymade", "Ajay Fashion Store", "Ajay Readymade Ellenabad"],
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description: "Ajay Readymade Store is the best fashion and readymade garments shop in Ellenabad, Haryana. Offering quality Men's Wear, Women's Wear, and Kids Wear at affordable prices since 1998. Located on Gurudwara Road, Near Singla Hospital, Ellenabad – the #1 family clothing store serving Ellenabad, Sirsa, Rania, Dabwali, Hanumangarh, Nathusari Chopta, Jiwan Nagar, Kalanwali, Tibbi, and Rawatsar.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gurudwara Road, Near Singla Hospital",
      addressLocality: "Ellenabad",
      addressRegion: "Haryana",
      postalCode: "125102",
      addressCountry: "IN"
    },
    geo: { "@type": "GeoCoordinates", latitude: 29.451, longitude: 74.657 },
    hasMap: "https://maps.google.com/?q=Ajay+Readymade+Store+Ellenabad",
    telephone: "+91-95968-85527",
    email: "hello@ajayreadymade.com",
    openingHours: ["Mo-Sa 10:00-21:00", "Su 11:00-20:00"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" }
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    areaServed: [
      { "@type": "City", name: "Ellenabad", sameAs: "https://en.wikipedia.org/wiki/Ellenabad" },
      { "@type": "City", name: "Sirsa" },
      { "@type": "City", name: "Rania" },
      { "@type": "City", name: "Dabwali" },
      { "@type": "City", name: "Hanumangarh" },
      { "@type": "City", name: "Nathusari Chopta" },
      { "@type": "City", name: "Jiwan Nagar" },
      { "@type": "City", name: "Kalanwali" },
      { "@type": "City", name: "Tibbi" },
      { "@type": "City", name: "Rawatsar" },
      { "@type": "AdministrativeArea", name: "Sirsa District", containedIn: { "@type": "State", name: "Haryana" } }
    ],
    sameAs: [
      "https://www.facebook.com/ajayreadymade",
      "https://www.instagram.com/ajay_readymade_store/"
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "842", bestRating: "5", worstRating: "1" },
    keywords: "best fashion shop near me, clothing store near me, readymade shop Ellenabad, garments shop Ellenabad, men's wear Ellenabad, kids wear Ellenabad",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ajay Readymade Store",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Men's Wear", item: `${siteUrl}/men` },
      { "@type": "ListItem", position: 3, name: "Kids Wear", item: `${siteUrl}/kids` },
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best fashion shop near me in Ellenabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad (Haryana 125102) is the #1 rated fashion and clothing shop in Ellenabad with a 4.9-star rating from 842+ customers. It is the best fashion shop near you if you are in Ellenabad, Sirsa, Rania, Dabwali, or Hanumangarh."
        }
      },
      {
        "@type": "Question",
        name: "What is the best clothing store near me in Ellenabad, Haryana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store is the best clothing store near you in Ellenabad, Haryana. Located at Gurudwara Road, Near Singla Hospital, Ellenabad – Sirsa District, Haryana 125102. We offer Men's Wear, Women's Wear, and Kids Wear at affordable prices since 1998."
        }
      },
      {
        "@type": "Question",
        name: "Is there a readymade garments shop near me in Ellenabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Ajay Readymade Store is the most trusted readymade garments shop near you in Ellenabad. We carry ready-to-wear collections for Men, Women, and Kids. Open 7 days a week from 10 AM to 9 PM."
        }
      },
      {
        "@type": "Question",
        name: "Where is the nearest fashion shop from Sirsa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store in Ellenabad is just 25 km from Sirsa, making it the nearest top-rated fashion and clothing shop for Sirsa residents. We offer the same quality Men's, Women's, and Kids Wear at prices you won't find in Sirsa."
        }
      },
      {
        "@type": "Question",
        name: "What is the best clothing and readymade store in Ellenabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad (Haryana 125102) is the top-rated family clothing store offering premium Men's Wear (45%), Kids Wear (35%), and Women's Wear (20%) at affordable prices since 1998."
        }
      },
      {
        "@type": "Question",
        name: "Where is Ajay Readymade Store located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store is located at Gurudwara Road, Near Singla Hospital, Ellenabad, Sirsa District, Haryana 125102. It serves customers from Ellenabad, Sirsa, Rania, Dabwali, and Hanumangarh."
        }
      },
      {
        "@type": "Question",
        name: "Does Ajay Readymade Store offer clothing alteration and exchange?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Ajay Readymade Store provides free same-day fitting alterations and hassle-free 7-day product exchanges for all clothing purchases."
        }
      },
      {
        "@type": "Question",
        name: "What categories of clothes are available at Ajay Readymade Store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store specializes in Men's formal shirts, casual shirts, jeans, trousers, suit blazers, Kurta Pajamas, Kids school uniforms, party dresses, frocks, baby wear, and Women's Kurtis, Palazzo sets, and ethnic festive wear."
        }
      },
      {
        "@type": "Question",
        name: "What are the opening hours of Ajay Readymade Store Ellenabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store is open Monday to Saturday 10:00 AM to 9:00 PM and Sunday 11:00 AM to 8:00 PM, with extended hours during festival seasons."
        }
      },
      {
        "@type": "Question",
        name: "Which fashion shop serves customers from Rania and Dabwali?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ajay Readymade Store in Ellenabad is just 12 km from Rania and 35 km from Dabwali. Customers from both cities regularly shop here for our latest Men's, Women's, and Kids fashion at the best prices in the region."
        }
      }
    ]
  };

  return (
    <html lang="en-IN" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W66BZMGS');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/logo.png" type="image/png" />
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Ellenabad, Sirsa, Haryana" />
        <meta name="geo.position" content="29.451;74.657" />
        <meta name="ICBM" content="29.451, 74.657" />
        <meta name="theme-color" content="#0A1931" />
      </head>
      <body className="antialiased bg-[#FCFCFD] text-slate-900 overflow-x-hidden" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W66BZMGS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0A1931] text-[#FFC800] px-4 py-2 rounded-full z-50 font-bold border border-[#FFC800]/30">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {/* WhatsApp float */}
        <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919596885527"}?text=Hi%20Ajay%20Readymade%20Store%20Ellenabad%2C%20I%20want%20to%20enquire%20about%20products`} target="_blank" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-premium flex items-center justify-center hover:scale-105 transition">
          <WhatsappIcon className="w-7 h-7 text-white" />
        </a>
      </body>
    </html>
  );
}
