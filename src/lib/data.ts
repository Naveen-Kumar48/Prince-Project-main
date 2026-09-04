export type Product = {
  id: number
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  comparePrice?: number
  category: string
  categorySlug: string
  brand: string
  gender: "men" | "kids" | "women"
  collectionType: string[]
  fabric: string
  sizes: string[]
  colors: { name: string; hex: string }[]
  images: string[]
  rating: number
  reviewCount: number
  isFeatured?: boolean
  isTrending?: boolean
  isNewArrival?: boolean
  isBestseller?: boolean
  stock: number
}

export const categories = [
  { name: "Men's Wear", slug: "men", gender: "men" as const, count: 245, priority: 45, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80" },
  { name: "Kids Wear", slug: "kids", gender: "kids" as const, count: 180, priority: 35, image: "https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { name: "Women's Wear", slug: "women", gender: "women" as const, count: 120, priority: 20, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80" },
]

export const subCategories = {
  men: ["Shirts", "Formal Shirts", "Casual Shirts", "T-Shirts", "Jeans", "Trousers", "Cargo Pants", "Jackets", "Blazers", "Kurta"],
  kids: ["Baby Wear", "Boys T-Shirts", "Girls Dresses", "Frocks", "School Wear", "Party Wear", "Winter Wear", "Ethnic Wear"],
  women: ["Kurti", "Kurti Set", "Leggings", "Palazzo", "Tops", "Ethnic Wear", "Western Wear"]
}

// Rich category grid for the frontend (variety of categories) + SEO slugs
export type CategoryTile = {
  name: string
  slug: string
  gender: "men" | "kids" | "women"
  keyword: string
  image: string
}

export const categoryTiles: CategoryTile[] = [
  // Men (highest priority)
  { name: "Formal Shirts", slug: "mens-formal-shirts", gender: "men", keyword: "Formal Shirts in Ellenabad 125102", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80" },
  { name: "Casual Shirts", slug: "mens-casual-shirts", gender: "men", keyword: "Casual Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80" },
  { name: "Cotton Shirts", slug: "mens-cotton-shirts", gender: "men", keyword: "Cotton Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&q=80" },
  { name: "Printed Shirts", slug: "mens-printed-shirts", gender: "men", keyword: "Printed Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&q=80" },
  { name: "Men's T-Shirts", slug: "mens-tshirts", gender: "men", keyword: "Men's T-Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
  { name: "Polo T-Shirts", slug: "mens-polo-tshirts", gender: "men", keyword: "Polo T-Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80" },
  { name: "Jeans for Men", slug: "mens-jeans", gender: "men", keyword: "Jeans for Men Ellenabad 125102", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80" },
  { name: "Cargo Pants", slug: "mens-cargo-pants", gender: "men", keyword: "Cargo Pants Ellenabad 125102", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80" },
  { name: "Track Pants", slug: "mens-track-pants", gender: "men", keyword: "Track Pants Ellenabad 125102", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80" },
  { name: "Jackets", slug: "mens-jackets", gender: "men", keyword: "Men's Jackets Ellenabad 125102", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" },
  { name: "Blazers", slug: "mens-blazers", gender: "men", keyword: "Wedding Blazers Ellenabad 125102", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=80" },
  { name: "Kurta Pajama", slug: "mens-kurta", gender: "men", keyword: "Kurta Pajama Ellenabad 125102", image: "https://images.pexels.com/photos/18194586/pexels-photo-18194586.jpeg?auto=compress&cs=tinysrgb&w=500" },
  // Kids
  { name: "Boys Clothing", slug: "boys-clothing", gender: "kids", keyword: "Boys Clothing Ellenabad 125102", image: "https://images.pexels.com/photos/8612860/pexels-photo-8612860.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Girls Frocks", slug: "girls-frocks", gender: "kids", keyword: "Girls Frocks Ellenabad 125102", image: "https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=500" },
  { name: "Kids Dresses", slug: "kids-dresses", gender: "kids", keyword: "Kids Dresses Ellenabad 125102", image: "https://images.unsplash.com/photo-1560506840-ec148e82a604?w=500&q=80" },
  { name: "Baby Clothes", slug: "baby-clothes", gender: "kids", keyword: "Baby Clothes Ellenabad 125102", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&q=80" },
  { name: "Boys T-Shirts", slug: "boys-tshirts", gender: "kids", keyword: "Boys T-Shirts Ellenabad 125102", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80" },
  { name: "School Wear", slug: "kids-school-wear", gender: "kids", keyword: "School Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&q=80" },
  { name: "Party Wear", slug: "kids-party-wear", gender: "kids", keyword: "Kids Party Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500&q=80" },
  { name: "Winter Wear", slug: "kids-winter-wear", gender: "kids", keyword: "Kids Winter Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&q=80" },
  { name: "Kids Ethnic", slug: "kids-ethnic", gender: "kids", keyword: "Kids Ethnic Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80" },
  // Women
  { name: "Kurti", slug: "womens-kurti", gender: "women", keyword: "Kurti in Ellenabad 125102", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80" },
  { name: "Kurti Sets", slug: "womens-kurti-set", gender: "women", keyword: "Kurti Sets Ellenabad 125102", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80" },
  { name: "Ladies Tops", slug: "womens-tops", gender: "women", keyword: "Ladies Tops Ellenabad 125102", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80" },
  { name: "Leggings", slug: "womens-leggings", gender: "women", keyword: "Leggings Ellenabad 125102", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80" },
  { name: "Palazzo", slug: "womens-palazzo", gender: "women", keyword: "Palazzo Ellenabad 125102", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80" },
  { name: "Ethnic Wear", slug: "womens-ethnic", gender: "women", keyword: "Women's Ethnic Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80" },
  { name: "Western Wear", slug: "womens-western", gender: "women", keyword: "Women's Western Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&q=80" },
  { name: "Party Wear", slug: "womens-party-wear", gender: "women", keyword: "Women's Party Wear Ellenabad 125102", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&q=80" },
]

// Business NAP - single source of truth
export const store = {
  name: "Ajay Readymade Store",
  street: "Gurudwara Road, Near Singla Hospital",
  city: "Ellenabad",
  region: "Haryana",
  postalCode: "125102",
  country: "IN",
  phone: "+91-95968-85527",
  phoneAlt: "+91-95968-85527",
  whatsapp: "919596885527",
  email: "hello@ajayreadymade.com",
  hours: "Mon-Sun 10:00 AM - 9:00 PM",
  lat: 29.451,
  lng: 74.657,
  fullAddress: "Gurudwara Road, Near Singla Hospital, Ellenabad, Sirsa, Haryana 125102",
}

export const cities = [
  { slug: "ellenabad", name: "Ellenabad", distance: "Main Store", desc: "Our flagship store on Gurudwara Road, Near Singla Hospital." },
  { slug: "sirsa", name: "Sirsa", distance: "25 km", desc: "Serving Sirsa families with premium Men's, Women's & Kids Wear." },
  { slug: "rania", name: "Rania", distance: "12 km", desc: "Trusted family fashion destination near Rania." },
  { slug: "dabwali", name: "Dabwali", distance: "35 km", desc: "Affordable readymade garments for Dabwali shoppers." },
  { slug: "hanumangarh", name: "Hanumangarh", distance: "60 km", desc: "Wedding & festival collection loved by Hanumangarh families." },
  { slug: "nathusari-chopta", name: "Nathusari Chopta", distance: "18 km", desc: "Popular fashion choice for families across Nathusari Chopta." },
  { slug: "jiwan-nagar", name: "Jiwan Nagar", distance: "20 km", desc: "Quality family garments for shoppers in and around Jiwan Nagar." },
  { slug: "kalanwali", name: "Kalanwali", distance: "45 km", desc: "Top clothing shop preferred by Kalanwali residents." },
  { slug: "tibbi", name: "Tibbi", distance: "30 km", desc: "Trending fashion store for customers coming from Tibbi Rajasthan." },
  { slug: "rawatsar", name: "Rawatsar", distance: "50 km", desc: "Fashion and festival wear destination near Rawatsar." },
  { slug: "bhadra", name: "Bhadra", distance: "40 km", desc: "Preferred clothing store for families visiting Ellenabad from Bhadra Rajasthan." },
  { slug: "nohar", name: "Nohar", distance: "45 km", desc: "Top choice for readymade garments for Nohar shoppers." },
  { slug: "sangaria", name: "Sangaria", distance: "55 km", desc: "Family fashion and festival wear destination near Sangaria." },
  { slug: "mallekan", name: "Mallekan", distance: "8 km", desc: "Closest garment store for Mallekan village families." },
  { slug: "jamal", name: "Jamal", distance: "14 km", desc: "Trending men's, women's & kids wear store near Jamal." },
  { slug: "madosinghana", name: "Madosinghana", distance: "15 km", desc: "Popular fashion destination serving Madosinghana residents." },
  { slug: "madhosinghana", name: "Madhosinghana", distance: "15 km", desc: "Popular clothing store serving Madhosinghana village residents." },
  { slug: "talwara-khurd", name: "Talwara Khurd", distance: "6 km", desc: "Nearest readymade clothes shop for Talwara Khurd residents." },
  { slug: "pohraka", name: "Pohraka", distance: "10 km", desc: "Top-rated family clothing store for Pohraka shoppers." },
  { slug: "kuttabadh", name: "Kuttabadh", distance: "12 km", desc: "Quality family fashion destination serving Kuttabadh." },
  { slug: "chautala", name: "Chautala", distance: "28 km", desc: "Premium quality family garments store serving Chautala village." },
  { slug: "odhan", name: "Odhan", distance: "32 km", desc: "Family wear and festival clothing store near Odhan." },
  { slug: "goriwala", name: "Goriwala", distance: "18 km", desc: "Top choice for readymade garments for Goriwala shoppers." },
  { slug: "ding", name: "Ding", distance: "30 km", desc: "Trusted clothing store and family shop serving Ding Mandi area." },
  { slug: "chaharwala", name: "Chaharwala", distance: "15 km", desc: "Popular readymade dress shop near Chaharwala." },
  { slug: "khuiyan-malkana", name: "Khuiyan Malkana", distance: "22 km", desc: "Quality family fashion destination serving Khuiyan Malkana." },
  { slug: "kariwala", name: "Kariwala", distance: "20 km", desc: "Preferred clothing shop for families from Kariwala village." },
  { slug: "loolgarh", name: "Loolgarh", distance: "9 km", desc: "Nearest readymade store for Loolgarh village residents." },
  { slug: "sherpura", name: "Sherpura", distance: "15 km", desc: "Latest collection of family clothing near Sherpura." },
  { slug: "phoolkan", name: "Phoolkan", distance: "22 km", desc: "Trending men's, women's and kids wear near Phoolkan." },
  { slug: "bajekan", name: "Bajekan", distance: "28 km", desc: "Trusted family fashion store serving Bajekan village." },
  { slug: "jodhpuria", name: "Jodhpuria", distance: "24 km", desc: "Top clothing shop preferred by Jodhpuria residents." },
  { slug: "suchan-kotli", name: "Suchan Kotli", distance: "28 km", desc: "Quality readymade garments for Suchan Kotli shoppers." },
  { slug: "vaidwala", name: "Vaidwala", distance: "25 km", desc: "Family fashion and festival wear destination near Vaidwala." },
  { slug: "sikandarpur", name: "Sikandarpur", distance: "27 km", desc: "Preferred clothing store for families visiting from Sikandarpur." },
  { slug: "kangpur", name: "Kangpur", distance: "20 km", desc: "Trending fashion wear destination near Kangpur." },
  { slug: "ottu", name: "Ottu", distance: "16 km", desc: "Closest garment store for Ottu area and village families." },
  { slug: "kharian", name: "Kharian", distance: "24 km", desc: "Quality family fashion destination serving Kharian residents." },
  { slug: "musahibwala", name: "Musahibwala", distance: "18 km", desc: "Top choice for readymade garments for Musahibwala shoppers." },
  { slug: "nathusari-kalan", name: "Nathusari Kalan", distance: "21 km", desc: "Preferred clothing shop for families from Nathusari Kalan." },
  { slug: "kashi-ka-bass", name: "Kashi Ka Bass", distance: "28 km", desc: "Family wear and festival clothing store near Kashi Ka Bass." },
  { slug: "mojdin-khera", name: "Mojdin Khera", distance: "22 km", desc: "Nearest readymade store for Mojdin Khera village residents." },
  { slug: "dhani-majra", name: "Dhani Majra", distance: "16 km", desc: "Popular readymade dress shop near Dhani Majra." },
  { slug: "santoshnagar", name: "Santoshnagar", distance: "7 km", desc: "Quality family fashion destination serving Santoshnagar." },
  { slug: "mithanpura", name: "Mithanpura", distance: "11 km", desc: "Closest garment store for Mithanpura village families." },
  { slug: "khairpur", name: "Khairpur", distance: "26 km", desc: "Trending men's, women's & kids wear store near Khairpur." },
]


export const products: Product[] = [
  {
    id: 1,
    slug: "premium-oxford-formal-shirt-navy",
    name: "Premium Oxford Formal Shirt - Deep Navy",
    shortDescription: "Wrinkle-free premium cotton formal shirt",
    description: "Crafted for the modern professional, this premium Oxford formal shirt features wrinkle-free cotton blend, perfect stitching, and a tailored fit that commands respect in Ellenabad's business circles. Ideal for office, wedding functions, and formal gatherings.",
    price: 1299,
    comparePrice: 1999,
    category: "Formal Shirts",
    categorySlug: "formal-shirts",
    brand: "Louis Monarch",
    gender: "men",
    collectionType: ["formal", "wedding", "bestseller"],
    fabric: "Premium Cotton Blend",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Navy", hex: "#0B1D3A" }, { name: "White", hex: "#FFFFFF" }, { name: "Sky Blue", hex: "#87CEEB" }],
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80"],
    rating: 4.8,
    reviewCount: 124,
    isFeatured: true,
    isBestseller: true,
    stock: 45
  },
  {
    id: 2,
    slug: "cargo-pants-stretch-olive",
    name: "Stretch Cargo Pants - Olive Green",
    shortDescription: "6-pocket stretch cargo for daily adventures",
    description: "Engineered with 4-way stretch and reinforced stitching, these cargo pants are favorite among Ellenabad youth. Perfect for college, travel, and casual outings.",
    price: 1499,
    comparePrice: 2199,
    category: "Cargo Pants",
    categorySlug: "cargo-pants",
    brand: "Urban Edge",
    gender: "men",
    collectionType: ["trending", "casual"],
    fabric: "Cotton Twill Stretch",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Olive", hex: "#606C38" }, { name: "Khaki", hex: "#C3B091" }, { name: "Black", hex: "#000000" }],
    images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80", "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"],
    rating: 4.7,
    reviewCount: 89,
    isFeatured: true,
    isTrending: true,
    stock: 32
  },
  {
    id: 3,
    slug: "kids-party-frock-pink-princess",
    name: "Princess Party Frock - Blush Pink",
    shortDescription: "Designer party wear frock for little princesses",
    description: "Make her birthday magical with this premium layered frock featuring sequin work, soft lining, and comfortable fit. Most loved by Ellenabad families for wedding functions.",
    price: 1899,
    comparePrice: 2599,
    category: "Frocks",
    categorySlug: "frocks",
    brand: "Tiny Trends",
    gender: "kids",
    collectionType: ["party", "wedding", "festival"],
    fabric: "Net & Satin with Cotton Lining",
    sizes: ["2-3Y", "3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: [{ name: "Blush Pink", hex: "#FFB6C1" }, { name: "Sky Blue", hex: "#87CEEB" }],
    images: ["https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.unsplash.com/photo-1560506840-ec148e82a604?w=800&q=80"],
    rating: 4.9,
    reviewCount: 203,
    isFeatured: true,
    isBestseller: true,
    stock: 28
  },
  {
    id: 4,
    slug: "boys-graphic-hoodie-astronaut",
    name: "Astronaut Graphic Hoodie - Midnight Black",
    shortDescription: "Cozy fleece hoodie with space graphic",
    description: "Winter favorite for Ellenabad school kids. Super soft fleece, kangaroo pockets, and vibrant astronaut print that sparks imagination.",
    price: 999,
    comparePrice: 1499,
    category: "Hoodies",
    categorySlug: "hoodies",
    brand: "Kidzo",
    gender: "kids",
    collectionType: ["winter", "school", "trending"],
    fabric: "Fleece Cotton Blend",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y", "14Y"],
    colors: [{ name: "Black", hex: "#0F172A" }, { name: "Navy", hex: "#0B1D3A" }, { name: "Grey", hex: "#94A3B8" }],
    images: ["https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80", "https://images.pexels.com/photos/8612860/pexels-photo-8612860.jpeg?auto=compress&cs=tinysrgb&w=800"],
    rating: 4.6,
    reviewCount: 156,
    isTrending: true,
    isNewArrival: true,
    stock: 67
  },
  {
    id: 5,
    slug: "mens-polo-tshirt-luxury-cotton",
    name: "Luxury Pique Polo T-Shirt - White",
    shortDescription: "Premium pique polo for refined casual look",
    description: "A must-have for every gentleman in Ellenabad. Luxury pique cotton, embroidered logo, and perfect collar that stays crisp.",
    price: 899,
    comparePrice: 1299,
    category: "Polo T-Shirts",
    categorySlug: "polo-t-shirts",
    brand: "Royal Club",
    gender: "men",
    collectionType: ["summer", "casual", "bestseller"],
    fabric: "100% Pique Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Navy", hex: "#0B1D3A" }, { name: "Maroon", hex: "#800000" }],
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80", "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80"],
    rating: 4.8,
    reviewCount: 210,
    isBestseller: true,
    isFeatured: true,
    stock: 54
  },
  {
    id: 6,
    slug: "women-kurti-set-embroidered-mustard",
    name: "Embroidered Kurti Set - Mustard Yellow",
    shortDescription: "Festive embroidered kurti with palazzo",
    description: "Celebrate festivities with this elegant embroidered kurti set. Rayon fabric, intricate thread work, loved by Ellenabad & Sirsa women for Diwali & weddings.",
    price: 1599,
    comparePrice: 2299,
    category: "Kurti Set",
    categorySlug: "kurti-set",
    brand: "Satrangi",
    gender: "women",
    collectionType: ["festival", "wedding", "ethnic"],
    fabric: "Rayon with Embroidery",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Mustard", hex: "#D4A017" }, { name: "Maroon", hex: "#800000" }],
    images: ["https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"],
    rating: 4.7,
    reviewCount: 98,
    isFeatured: true,
    stock: 22
  },
  {
    id: 7,
    slug: "kids-school-uniform-shirt-grey",
    name: "School Uniform Shirt - Light Grey (Pack of 2)",
    shortDescription: "Durable school shirts for all-day comfort",
    description: "Trusted by 500+ families in Ellenabad. Premium cotton, fade-resistant, perfect for Ellenabad's school children.",
    price: 699,
    comparePrice: 899,
    category: "School Wear",
    categorySlug: "school-wear",
    brand: "Scholar",
    gender: "kids",
    collectionType: ["school", "bestseller"],
    fabric: "Cotton Blend",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [{ name: "Light Grey", hex: "#D3D3D3" }, { name: "White", hex: "#FFFFFF" }],
    images: ["https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80"],
    rating: 4.9,
    reviewCount: 312,
    isBestseller: true,
    stock: 120
  },
  {
    id: 8,
    slug: "mens-denim-jeans-slim-dark-wash",
    name: "Slim Fit Denim Jeans - Dark Wash",
    shortDescription: "Power stretch slim fit jeans",
    description: "No.1 selling jeans in Ellenabad store. Dark wash, power stretch, perfect fade resistance. Worn by college students & young professionals.",
    price: 1799,
    comparePrice: 2499,
    category: "Jeans",
    categorySlug: "jeans",
    brand: "Denim Co",
    gender: "men",
    collectionType: ["trending", "bestseller", "casual"],
    fabric: "Power Stretch Denim",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [{ name: "Dark Blue", hex: "#1E3A8A" }, { name: "Black", hex: "#000000" }],
    images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80", "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80"],
    rating: 4.8,
    reviewCount: 267,
    isBestseller: true,
    isTrending: true,
    stock: 78
  },
  {
    id: 9,
    slug: "wedding-blazer-check-navy-gold",
    name: "Wedding Check Blazer - Navy & Gold",
    shortDescription: "Premium wedding blazer for the groom's squad",
    description: "Make a statement this wedding season. Premium suiting fabric, peak lapel, gold button details. Most requested wedding collection in Sirsa & Ellenabad.",
    price: 4999,
    comparePrice: 7999,
    category: "Blazers",
    categorySlug: "blazers",
    brand: "Gentleman's Manor",
    gender: "men",
    collectionType: ["wedding", "festival", "premium"],
    fabric: "Premium Suiting with Check Weave",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Navy Check", hex: "#0B1D3A" }],
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"],
    rating: 5.0,
    reviewCount: 43,
    isFeatured: true,
    stock: 15
  },
  {
    id: 10,
    slug: "winter-jacket-puffer-men-black",
    name: "Puffer Winter Jacket - Jet Black",
    shortDescription: "Ultra-warm puffer for North India winters",
    description: "Built for Ellenabad's chilly winters. Water-resistant, ultra-warm insulation, with premium zippers.",
    price: 2499,
    comparePrice: 3999,
    category: "Jackets",
    categorySlug: "jackets",
    brand: "North Frost",
    gender: "men",
    collectionType: ["winter", "trending"],
    fabric: "Polyester with Thermal Filling",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Jet Black", hex: "#000000" }, { name: "Navy", hex: "#0B1D3A" }],
    images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80", "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"],
    rating: 4.7,
    reviewCount: 112,
    isTrending: true,
    stock: 34
  },
  {
    id: 11,
    slug: "girls-ethnic-lehenga-choli-pink",
    name: "Girls Ethnic Lehenga Choli - Baby Pink",
    shortDescription: "Festive lehenga choli for little divas",
    description: "Diwali & wedding favorite. Mirror work, soft lining, easy-to-wear design loved by Rania & Dabwali families too.",
    price: 1599,
    comparePrice: 2199,
    category: "Ethnic Wear",
    categorySlug: "ethnic-wear-kids",
    brand: "Riwayat Kids",
    gender: "kids",
    collectionType: ["festival", "wedding", "ethnic"],
    fabric: "Georgette with Cotton Lining",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: [{ name: "Baby Pink", hex: "#F8C8DC" }, { name: "Mint", hex: "#98FB98" }],
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80"],
    rating: 4.8,
    reviewCount: 87,
    isNewArrival: true,
    isFeatured: true,
    stock: 19
  },
  {
    id: 12,
    slug: "mens-kurta-pajama-white-festival",
    name: "Festival Kurta Pajama - Pearl White Chikankari",
    shortDescription: "Lucknowi chikankari kurta for festivals",
    description: "Elegance meets tradition. White chikankari work kurta with pajama, perfect for Diwali, Eid, and family functions in Ellenabad.",
    price: 1999,
    comparePrice: 2799,
    category: "Kurta",
    categorySlug: "kurta-men",
    brand: "Nawabi",
    gender: "men",
    collectionType: ["festival", "ethnic", "wedding"],
    fabric: "Cotton with Chikankari Embroidery",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Pearl White", hex: "#F5F5F0" }, { name: "Cream", hex: "#FFFDD0" }],
    images: ["https://images.pexels.com/photos/18194586/pexels-photo-18194586.jpeg?auto=compress&cs=tinysrgb&w=800"],
    rating: 4.9,
    reviewCount: 76,
    isFeatured: true,
    isNewArrival: true,
    stock: 26
  }
]

export const heroSlides = [
  {
    id: 1,
    badge: "Ellenabad's #1 Family Fashion Store",
    title: "Men's Collection",
    sub: "Premium Formal & Casual Wear for the Modern Gentleman",
    highlight: "Starting at ₹699",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=80",
    cta: "Explore Men's",
    link: "/men",
    accent: "45% OFF Collection",
    priority: 45
  },
  {
    id: 2,
    badge: "Trusted by 5000+ Families",
    title: "Kids Fashion Fest",
    sub: "School, Party, Winter & Ethnic Wear for Your Little Stars",
    highlight: "Pack of 2 at ₹999",
    image: "https://images.pexels.com/photos/11100116/pexels-photo-11100116.jpeg?auto=compress&cs=tinysrgb&w=1400",
    cta: "Shop Kids",
    link: "/kids",
    accent: "New Winter Arrivals",
    priority: 35
  },
  {
    id: 3,
    badge: "Wedding Season Special",
    title: "Wedding & Festival Edit",
    sub: "Sherwanis, Blazers, Kurtas, Lehengas - Be Celebration Ready",
    highlight: "Flat 30% OFF",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1400&q=80",
    cta: "Wedding Collection",
    link: "/collections/wedding",
    accent: "Sirsa • Ellenabad • Rania",
    priority: 20
  }
]

export const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Regular Customer, Ellenabad",
    text: "Ajay Readymade is my go-to for all family shopping. Quality is premium, prices are honest. My son's school dress lasts whole year!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    name: "Priya & Amit Sharma",
    role: "Wedding Shopping, Sirsa",
    text: "We did entire wedding shopping for men and kids from here. Staff helped us choose perfect blazers and kurtas. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    name: "Sandeep Singh",
    role: "Young Professional, Dabwali",
    text: "Best men's collection in the region. Formal shirts fitting is perfect, and cargo jeans collection is unbeatable. My colleagues ask where I shop!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }
]

export const brands = [
  { name: "Louis Monarch", logo: "LM" },
  { name: "Urban Edge", logo: "UE" },
  { name: "Tiny Trends", logo: "TT" },
  { name: "Royal Club", logo: "RC" },
  { name: "Denim Co", logo: "DC" },
  { name: "Kidzo", logo: "KZ" },
]

export const blogs = [
  {
    slug: "mens-wedding-fashion-guide-ellenabad-2025",
    title: "Men's Wedding Fashion Guide: What to Wear to a Punjabi Wedding in Ellenabad",
    excerpt: "From blazers to kurta pajamas, here's how Ellenabad grooms and guests are upgrading their wedding wardrobe in 2025.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Men's Fashion",
    date: "2025-11-10"
  },
  {
    slug: "kids-winter-collection-must-haves",
    title: "Kids Winter Essentials: 10 Must-Haves for Ellenabad's Chilly Winters",
    excerpt: "Don't let winter catch you off guard. Check out our curated winter wardrobe for kids that keeps them warm and stylish.",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
    category: "Kids Fashion",
    date: "2025-11-05"
  },
  {
    slug: "formal-shirts-office-style-guide",
    title: "5 Formal Shirt Colors Every Professional in Sirsa Should Own",
    excerpt: "Build a capsule work wardrobe with these timeless formal shirt shades that work year-round.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    category: "Style Tips",
    date: "2025-10-28"
  }
]
