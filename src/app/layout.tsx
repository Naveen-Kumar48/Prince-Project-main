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
    "Ajay Readymade Store",
    "Readymade Store in Ellenabad",
    "Clothing Store in Ellenabad",
    "Best Clothing Store in Ellenabad",
    "Fashion Store in Ellenabad",
    "Garments Shop in Ellenabad",
    "Family Clothing Store",
    "Men's Wear Shop",
    "Women's Wear Shop",
    "Kids Wear Shop",
    "Readymade Garments Ellenabad",
    "Fashion Boutique Ellenabad",
    "Men's Wear Ellenabad",
    "Women's Wear Ellenabad",
    "Kids Wear Ellenabad",
    "Best Readymade Shop in Ellenabad",
    "Affordable Clothing Store",
    "Men's shirt shop near Singla Hospital Ellenabad",
    "Best clothing shop near Gurudwara Road Ellenabad",
    "Jeans shop in Ellenabad",
    "School wear shop in Ellenabad",
    "Kids dress shop in Ellenabad"
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
  verification: { google: "AatxextV6LTcGVvKh0oSyMMfPsbXFEu-TcBBqYZZhn0" },
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
    alternateName: "Ajay Readymade",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description: "Ajay Readymade Store is a trusted clothing and readymade garments shop in Ellenabad offering quality Men's Wear, Women's Wear, and Kids Wear at affordable prices. Visit us on Gurudwara Road, Near Singla Hospital, for the latest fashion collections and family shopping.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gurudwara Road, Near Singla Hospital",
      addressLocality: "Ellenabad",
      addressRegion: "Haryana",
      postalCode: "125102",
      addressCountry: "IN"
    },
    geo: { "@type": "GeoCoordinates", latitude: 29.451, longitude: 74.657 },
    telephone: "+91-95968-85527",
    email: "hello@ajayreadymade.com",
    openingHours: "Mo-Su 10:00-21:00",
    priceRange: "₹₹",
    areaServed: [{ "@type": "City", name: "Ellenabad" }, { "@type": "City", name: "Sirsa" }, { "@type": "City", name: "Rania" }, { "@type": "City", name: "Dabwali" }, { "@type": "City", name: "Hanumangarh" }],
    sameAs: ["https://www.facebook.com/ajayreadymade", "https://www.instagram.com/ajay_readymade_store/"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "842", bestRating: "5", worstRating: "1" },
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
          text: "Ajay Readymade Store is open Monday through Sunday from 10:00 AM to 9:00 PM, with extended hours during festival seasons."
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
        <meta name="google-site-verification" content="AatxextV6LTcGVvKh0oSyMMfPsbXFEu-TcBBqYZZhn0" />
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
