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
    date: "2025-11-10",
    readTime: "6 min read",
    description: "Complete guide to men's wedding fashion in Ellenabad and Sirsa. Blazers, kurta pajamas, sherwanis and coat pants — find everything at Ajay Readymade Store.",
    keywords: ["men's wedding fashion Ellenabad", "wedding blazer Ellenabad", "kurta pajama wedding Sirsa", "groom dress Ellenabad"],
    body: [
      "Weddings in Ellenabad and the surrounding Sirsa district are grand affairs. Whether you're the groom, a close relative, or a wedding guest, your attire needs to strike the perfect balance between tradition and modern style. At Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad, we've dressed over 300 wedding families in the 2024–25 season alone.",
      "For the Groom: The classic navy or charcoal blazer paired with slim-fit trousers remains the top choice in Ellenabad weddings. We carry premium wedding blazer sets from ₹2,499 that include a perfectly matched trouser, waistcoat, and pocket square. Alternatively, an embroidered sherwani or a brocade kurta pajama set in ivory or royal blue makes a stunning choice for the pheras.",
      "For Wedding Guests (Men): Don't underestimate the impact of a well-fitted formal shirt with neat trousers. Our range of premium cotton formal shirts in white, pastel blue, and champagne gold are perfect for a baraat or reception function. Pair them with a slim-fit trouser in charcoal or navy from our men's formal collection.",
      "Groom's Brothers and Cousins: Coordinate as a family without being matchy-matchy. Choose one anchor color — say navy — and let each person choose their own shade. Our staff at Ajay Readymade Store are experts at coordinating family outfits for weddings; walk in together and we'll sort the entire group.",
      "Best Fabrics for Haryana Winters: November to February weddings in Ellenabad call for heavier fabrics. A wool-blend blazer, a velvet kurta, or a layered sherwani with an embroidered stole keeps you warm without compromising style. We stock seasonal winter wedding collections every October.",
      "Visit Ajay Readymade Store in Ellenabad to explore our full wedding collection for men. Browse our men's formal shirts, blazers, kurta pajamas, and wedding accessories — all available for same-day trial and alteration. Customers from Sirsa, Rania, Dabwali, and Hanumangarh regularly travel to us for wedding shopping because of our unmatched selection and honest pricing.",
      "Pro Tip: Book your wedding outfits at least 2–3 weeks before the event for the best selection and alteration time. Contact us on WhatsApp at +91-95968-85527 or walk into our store on Gurudwara Road, Ellenabad, Haryana 125102."
    ]
  },
  {
    slug: "kids-winter-collection-must-haves",
    title: "Kids Winter Essentials: 10 Must-Haves for Ellenabad's Chilly Winters",
    excerpt: "Don't let winter catch you off guard. Check out our curated winter wardrobe for kids that keeps them warm and stylish.",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80",
    category: "Kids Fashion",
    date: "2025-11-05",
    readTime: "5 min read",
    description: "Top 10 winter essentials for kids in Ellenabad and Sirsa. Hoodies, jackets, sweaters and school winter wear available at Ajay Readymade Store.",
    keywords: ["kids winter wear Ellenabad", "children winter clothes Sirsa", "school winter uniform Ellenabad 125102", "kids hoodie jacket Ellenabad"],
    body: [
      "Winter in Ellenabad hits hard — temperatures in December and January regularly dip below 5°C. For parents in Ellenabad, Sirsa, Rania, and the surrounding villages, keeping kids warm during school days and family outings is a top priority. Here are the 10 winter wardrobe must-haves we recommend from our kids wear collection at Ajay Readymade Store.",
      "1. Fleece-Lined Hoodies: A good hoodie is the backbone of any child's winter wardrobe. Our fleece-lined hoodies in solid colors and printed designs keep kids cozy at school and at play. Available in sizes for 2–14 years.",
      "2. Puffer Jackets: Lightweight puffer jackets are windproof and warm — ideal for the foggy mornings and cold evenings Ellenabad sees from November to February. We carry them in bold colors that kids love.",
      "3. Thermal Innerwear: Don't overlook thermals! A good thermal vest and leggings underneath school uniforms make a huge difference. We stock cotton-wool blend thermals suitable for kids aged 3 to 12.",
      "4. School Winter Uniforms: Many schools in Ellenabad — including DAV, SRS Convent, Nachiketan, and Nivedita — require specific winter uniform items like navy blue sweaters or cardigans. We keep the complete set in stock from September onwards.",
      "5. Woolen Sweaters and Cardigans: A classic V-neck or round-neck sweater in navy, grey, or maroon. Layer it over school shirts for warmth without bulk.",
      "6. Track Suits for Weekends: Kids need freedom of movement on weekends. A soft-fleece tracksuit in bright colors lets them play outside even on cold days.",
      "7. Party Frocks with Shawls: Winter weddings and family functions need stylish solutions too. Our kids party frocks paired with embroidered shawls are a hit in Ellenabad families.",
      "8. Boys Ethnic Sets (Kurta + Pajama + Jacket): For winter pujas, shaadi functions, and festivals — a kurta pajama set with a matching nehru jacket keeps boys warm and traditionally stylish.",
      "9. Girls Winter Dresses with Leggings: Knee-length woolen dresses paired with thick leggings are perfect for girls to wear at school or family gatherings in winters.",
      "10. Soft Baby Blanket Sets (for Toddlers): For the little ones aged 0–2 years, soft quilted baby sets with attached mittens and booties keep them comfortable during Ellenabad's harshest winter days.",
      "Visit Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad to shop our complete kids winter collection. Explore our full kids wear range including school wear, party wear, and winter wear. We serve families from Ellenabad, Sirsa (25km), Rania (12km), Jiwan Nagar, and Nathusari Chopta."
    ]
  },
  {
    slug: "formal-shirts-office-style-guide",
    title: "5 Formal Shirt Colors Every Professional in Sirsa Should Own",
    excerpt: "Build a capsule work wardrobe with these timeless formal shirt shades that work year-round.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    category: "Style Tips",
    date: "2025-10-28",
    readTime: "4 min read",
    description: "Build a capsule work wardrobe with these 5 essential formal shirt colors for men in Ellenabad, Sirsa, and Haryana. Available at Ajay Readymade Store.",
    keywords: ["formal shirts Sirsa", "men office shirt Ellenabad", "best formal shirt colors", "professional clothing Haryana"],
    body: [
      "Whether you're commuting to Sirsa, working in a government office in Ellenabad, or attending a professional meeting — your formal shirt is your first impression. At Ajay Readymade Store, we've helped thousands of professionals across Sirsa district build work wardrobes that are sharp, affordable, and versatile.",
      "1. Crisp White — The Non-Negotiable: White is the universal formal color. A premium cotton-blend white formal shirt from our men's collection pairs with any trouser — charcoal, navy, black, or khaki. The key is fabric quality; our Louis Monarch and Monte Carlo range shirts resist wrinkles and maintain freshness even through long work days.",
      "2. Sky Blue — Professional with Personality: Light blue formal shirts project calm confidence. They work beautifully with grey trousers and dark ties, making them ideal for government officials, bank employees, and professionals in Ellenabad and Sirsa.",
      "3. Pale Grey — The Modern Office Staple: Grey formal shirts have become increasingly popular among young professionals in Haryana. A slim-fit pale grey shirt with dark navy trousers and a black belt creates a polished, modern look without appearing overdressed.",
      "4. Powder Pink — The Bold Choice That Pays Off: Contrary to myth, soft pink formal shirts project confidence and style in North Indian professional settings. Pair with charcoal or dark grey trousers. Our printed and plain pink shirt range is surprisingly popular with professionals under 35 in the Sirsa-Ellenabad belt.",
      "5. Lavender — Festival Season Goes Professional: During wedding and festival season (October–February), lavender formal shirts bridge the gap between casual and dressy. They look smart in the office and transition effortlessly to evening functions.",
      "How to Build Your Capsule Wardrobe: Start with 2 whites, 2 sky blues, 1 grey, 1 pink, and 1 lavender. Mix and match with 3 pairs of trousers (charcoal, navy, black) for over 20 unique outfit combinations. All items available at Ajay Readymade Store, Ellenabad.",
      "Browse our complete men's formal shirts collection or visit us in-store at Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102. Alterations are done same-day and free of charge."
    ]
  },
  {
    slug: "school-uniform-guide-ellenabad-2025",
    title: "Complete School Uniform Guide for Ellenabad Parents — All Schools Covered",
    excerpt: "DAV, SRS, Nachiketan, Nivedita, and Government schools — find the right uniform at Ajay Readymade Store.",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80",
    category: "Kids Fashion",
    date: "2025-10-15",
    readTime: "5 min read",
    description: "Complete school uniform guide for all major schools in Ellenabad — DAV, SRS Convent, Nachiketan, Nivedita, and government schools. Available at Ajay Readymade Store.",
    keywords: ["school uniform Ellenabad", "DAV school uniform Ellenabad", "SRS school uniform Ellenabad 125102", "Nachiketan uniform Ellenabad", "school dress Sirsa district"],
    body: [
      "Every April and after summer break, Ellenabad parents face the annual school shopping rush. At Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad, we stock complete uniforms for all major schools in Ellenabad, Sirsa district — so you can get everything in one visit.",
      "DAV School Ellenabad: DAV students need a white half-sleeve shirt, khaki trousers (boys) or khaki skirt (girls), a navy blue tie, white PT shoes, and a house-colored sports house t-shirt. We keep DAV's exact shade of khaki fabric and pre-stitched uniforms in sizes from Class 1 to Class 12.",
      "SRS Convent School Ellenabad: SRS students typically wear a light blue shirt with dark navy blue trousers/skirt and a striped tie. We stock SRS-specific uniforms with proper collar styles and pocket placement. PT uniforms in grey are also available.",
      "Nachiketan Public School Ellenabad: Nachiketan uniform includes a sky blue shirt, grey trousers/skirt, and a matching school sweater in winter. We carry Nachiketan's specific shade in all sizes.",
      "Nivedita School Ellenabad: Nivedita's green and white color scheme is iconic in Ellenabad. We stock their pinafore-style girls uniform and the traditional boys shirt-pant combination.",
      "Government Schools (Sirsa District): Government school uniforms in Haryana require a light grey shirt and dark grey trousers for boys, and grey salwar-kameez for girls. These are our most popular school uniform items, particularly at the start of the academic year.",
      "What to Buy When: School uniform season peaks in April–May (before summer break ends) and again in October (when winter uniforms are needed). Our dedicated school uniform section ensures you won't face stock shortages even during peak weeks.",
      "Tips for School Shopping: Always buy uniforms one size larger to allow for growth. Bring a copy of your school's exact uniform specification if it's unusual. Our trained staff can help size children accurately and make same-day alterations.",
      "Visit our kids wear section for more school wear options at Ajay Readymade Store, Ellenabad — the school uniform destination for Ellenabad, Rania, Mallekan, Talwara Khurd, Pohraka, and all surrounding villages."
    ]
  },
  {
    slug: "womens-kurti-style-guide-festival-season",
    title: "How to Style Kurtis for Every Occasion: A Woman's Guide for Ellenabad's Festival Season",
    excerpt: "From Diwali to family weddings, here's how to wear kurtis to look stunning without spending a fortune.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80",
    category: "Women's Fashion",
    date: "2025-10-20",
    readTime: "5 min read",
    description: "Complete kurti styling guide for women in Ellenabad and Sirsa for Diwali, weddings, and festivals. Available at Ajay Readymade Store.",
    keywords: ["kurti style guide Ellenabad", "women's fashion Sirsa", "festival kurti Haryana", "ladies designer kurti Ellenabad 125102"],
    body: [
      "Festival season in Ellenabad — spanning Navratri, Diwali, and the winter wedding season — is when women's fashion truly comes alive. At Ajay Readymade Store, our women's wear collection is curated specifically for the tastes and lifestyles of women in Ellenabad, Sirsa, Rania, Dabwali, and across Haryana.",
      "Casual Daily Kurtis: For regular wear at home and local outings, opt for cotton kurtis in solid colors or simple block prints. These are breathable, wash well, and look effortlessly put-together. Pair with churidar leggings or straight palazzo pants for maximum comfort.",
      "Office and Formal Kurtis: If you work in a school, hospital, bank, or government office in Ellenabad or Sirsa, a subtle printed or self-textured kurti in navy, maroon, or forest green projects professionalism. Pair with matching trousers or a formal kurti set with a long jacket.",
      "Festive Kurtis for Diwali: Go for rich fabrics — silk blend, brocade, or chanderi — in jewel tones like deep emerald, royal blue, or burgundy. Embellished necklines and mirror work detailing are especially popular in Haryana. Pair with a contrast palazzo or sharara for a complete festive look.",
      "Wedding Season Kurtis: For functions where you want to look elegant without going into full lehenga territory, a long Anarkali-style kurta in georgette or net fabric with embroidery is the perfect middle ground. Layer a dupatta in a contrast shade for a graceful wedding guest look.",
      "Kurti Styling Tips from Our Team: Belt your long kurtis at the waist to define your silhouette. Pair printed tops with solid bottoms and vice versa. Dupatta placement matters — drape it asymmetrically for a modern look. Chunky jhumkas or statement earrings elevate even a simple kurti instantly.",
      "Explore our women's wear collection at Ajay Readymade Store, Ellenabad, including our full range of kurtis, kurti sets, palazzos, and ethnic festive wear. Visit us on Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102. Open 7 days a week from 10 AM to 9 PM."
    ]
  },
  {
    slug: "how-to-care-for-readymade-garments",
    title: "How to Care for Your Readymade Clothes: Make Them Last Longer",
    excerpt: "Simple garment care tips for cotton shirts, jeans, and kids wear that extend the life of your favorite clothes.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    category: "Style Tips",
    date: "2025-09-18",
    readTime: "4 min read",
    description: "Expert garment care tips for cotton shirts, jeans, kurtis, and kids wear. Make your Ajay Readymade Store clothes last longer.",
    keywords: ["garment care tips India", "how to wash cotton shirts", "care for readymade clothes Ellenabad", "clothing maintenance Haryana"],
    body: [
      "Good clothes deserve good care. At Ajay Readymade Store in Ellenabad, we want your purchase to serve you for years, not just seasons. Here are expert garment care tips specifically for the types of clothing most popular in Ellenabad, Sirsa, and Haryana families.",
      "Cotton Formal Shirts: Always wash cotton shirts inside-out in cold water to preserve the color and print. Avoid soaking for more than 20 minutes. Iron at medium heat while slightly damp — this eliminates wrinkles perfectly. Store folded (not hung) to prevent collar distortion.",
      "Denim Jeans: Jeans don't need washing after every wear. Spot-clean stains and air them out. When washing, turn inside-out and use cold water. Avoid the dryer — air-dry flat to prevent shrinkage. This preserves the stretch and shape of your cargo pants and slim-fit jeans.",
      "Kids Clothes: Children's clothing goes through rough wear. Pre-treat grass and food stains with dish soap before washing. Use gentle or baby-specific detergent. Always check labels — many kids party wear items are dry-clean only.",
      "Kurtis and Ethnic Wear: Embroidered and block-printed kurtis should be hand-washed or machine-washed on a delicate cycle. Never wring — gently press out water and hang in shade. Iron on reverse side through a cotton cloth to protect embroidery and prints.",
      "Woolen Sweaters and Jackets: Store woolens in zip-lock bags with neem balls to prevent moth damage during summer. Hand-wash in lukewarm water with mild soap; lay flat to dry. Never hang woolens — they stretch out of shape.",
      "General Rules for All Garments: Sort by color before washing. Follow care label instructions always. Don't overfill the washing machine. Use quality detergent and avoid bleach except on whites. Repair small tears and missing buttons immediately to prevent further damage.",
      "Shop quality garments that are built to last — visit our men's wear, women's wear, and kids wear collections at Ajay Readymade Store, Ellenabad. We also offer free same-day alterations and a 7-day exchange policy on all purchases."
    ]
  },
  {
    slug: "best-jeans-for-men-buying-guide-ellenabad",
    title: "Best Jeans for Men in Ellenabad: Slim Fit, Cargo, or Relaxed — Which One is Right for You?",
    excerpt: "Confused by all the denim options? Our expert guide helps you find the perfect jeans fit for your body and lifestyle.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    category: "Men's Fashion",
    date: "2025-09-05",
    readTime: "5 min read",
    description: "Complete men's jeans buying guide for Ellenabad and Sirsa. Slim fit, cargo, relaxed — find the perfect denim at Ajay Readymade Store Ellenabad.",
    keywords: ["best jeans for men Ellenabad", "men's denim guide Sirsa", "slim fit jeans Ellenabad 125102", "cargo jeans Haryana", "jeans buying guide"],
    body: [
      "Walk into Ajay Readymade Store on any weekend and you'll find groups of young men from Ellenabad, Rania, Dabwali, and Sirsa carefully trying on jeans. It's our most visited section — and no wonder. Finding the right pair of jeans is about more than size; it's about fit, fabric, and purpose. Here's your complete guide.",
      "Slim Fit Jeans: Slim fit jeans are the most popular cut among men aged 18–35 in Ellenabad and Sirsa. Tapered from the thigh down, they create a sharp silhouette that works for both casual outings and semi-formal occasions. Best paired with formal shirts or polo t-shirts. Our Sparky and Killer Jeans range offers excellent slim fit denim in dark blue, black, and grey wash.",
      "Stretch Slim Fit: For those who want the slim silhouette but need extra mobility for travel, work, or active lifestyles — stretch slim fit jeans with Lycra blend are the answer. Our most comfortable option for long days.",
      "Relaxed / Regular Fit: Men who prefer comfort over silhouette love relaxed fit. These sit comfortably at the waist and give you room through the thigh and seat. Excellent for older shoppers and those on their feet all day.",
      "Cargo Jeans: Our stretch cargo pants are extremely popular — they bring the practicality of cargo pockets to the sleekness of denim. 6-pocket design with reinforced stitching. Perfect for college students and young professionals in Ellenabad.",
      "How to Choose Your Size: Denim sizing can be inconsistent between brands. At Ajay Readymade Store, we always encourage trying on 2–3 sizes before purchasing. Our fitting room staff are trained to suggest the right size based on your body type.",
      "Fabric Weight Matters: Lighter denim (8–10 oz) is comfortable in summers; heavier denim (12–14 oz) lasts longer and looks better after multiple washes. We stock both categories.",
      "Visit our men's jeans section in-store or explore our complete men's collection. Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102. Open Mon–Sat 10 AM–9 PM, Sun 11 AM–8 PM."
    ]
  },
  {
    slug: "girls-party-frock-guide-kids-fashion",
    title: "Dress to Impress: The Ultimate Girls Party Frock Guide for Ellenabad Families",
    excerpt: "Birthday parties, family functions, and wedding seasons — here's how to pick the perfect party frock for your daughter.",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80",
    category: "Kids Fashion",
    date: "2025-08-20",
    readTime: "4 min read",
    description: "Expert guide to choosing girls party frocks for weddings, birthdays, and functions in Ellenabad. Available at Ajay Readymade Store.",
    keywords: ["girls party frock Ellenabad", "kids party wear Sirsa", "fancy frock for girls Haryana", "birthday dress girls Ellenabad 125102"],
    body: [
      "Every little girl deserves to feel like a princess at a party, and at Ajay Readymade Store in Ellenabad, we take that seriously. Our kids party wear section is one of our most celebrated collections — stocked fresh every season with the latest styles from toddler sizes (1 year) all the way to pre-teens (14 years).",
      "For Birthday Parties: Bold, bright colors work best — think fuchsia, coral, turquoise, and sunny yellow. Tulle skirts, sequin accents, and ribbon bows are extremely popular with girls aged 3–8. For older girls (9–14), more sophisticated designs in satin or georgette with subtle embellishments look age-appropriate and elegant.",
      "For Wedding Functions: Lehenga-style frocks in rich silks and brocades are perfect for wedding ceremonies. Paired with a coordinating dupatta, these are the most photogenic option. Our wedding kids collection features matching brother-sister ethnic sets — a coordinated kurta pajama for boys and lehenga choli for girls.",
      "For School Events and Annual Day: Simpler, more comfortable designs that allow free movement — knee-length flared frocks with solid color or subtle print — are ideal for school performances. Easy to wear, easy to move in.",
      "Fabric Advice by Age: For toddlers (1–4 years), choose soft cotton or cotton-blend that doesn't irritate skin. For older girls, satin, net, and georgette are perfectly safe and look stunning. Always check that embellishments like beads and sequins are securely stitched — safety first.",
      "How to Size Party Frocks: Children grow fast — especially toddlers. We recommend buying one size up if the event is 2–3 months away. Our team can help adjust the hemline with a quick same-day alteration so it fits perfectly on the day.",
      "Browse our kids party wear collection and see our full range of girls frocks, lehengas, and ethnic sets for kids at Ajay Readymade Store. Walk into our store on Gurudwara Road, Near Singla Hospital, Ellenabad. Serving families from Ellenabad, Sirsa, Rania, Jiwan Nagar, Nathusari Chopta, and all surrounding villages."
    ]
  },
  {
    slug: "affordable-fashion-tips-ellenabad-families",
    title: "10 Smart Shopping Tips to Dress Your Family Well on a Budget in Ellenabad",
    excerpt: "Fashion doesn't have to break the bank. Here's how smart Ellenabad families shop for quality clothes at the best prices.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    category: "Style Tips",
    date: "2025-08-05",
    readTime: "5 min read",
    description: "Smart budget fashion tips for families in Ellenabad and Sirsa. Get the best value for money at Ajay Readymade Store, Haryana 125102.",
    keywords: ["affordable fashion Ellenabad", "budget clothing tips Haryana", "cheap readymade clothes Sirsa", "value for money clothes Ellenabad 125102"],
    body: [
      "At Ajay Readymade Store in Ellenabad, we believe that looking good shouldn't require spending a fortune. Our store is built on this philosophy — premium quality, honest pricing, and real value for families across Ellenabad, Sirsa, Rania, Dabwali, and Hanumangarh. Here are 10 tips our long-time customers swear by.",
      "1. Shop Off-Season: Buy winter clothes in February–March when prices drop. Stock up on summer clothes in October before the season begins. This strategy alone can save 20–30% per item.",
      "2. Buy Basics in Bulk: Cotton shirts, plain leggings, white school shirts — buy these in multiple quantities when you spot the right quality at a good price. Basics never go out of style.",
      "3. Choose Versatile Colors: Navy, white, black, and grey mix and match with almost anything in your wardrobe. Avoid impulse-buying loud statement pieces that only work with one outfit.",
      "4. Invest in Kids School Uniforms Early: School uniform prices and availability peak in April. Shop in March to get the best selection and prices before the rush. Always buy one size larger for growth room.",
      "5. Check Our Offers Section: Ajay Readymade Store regularly runs clearance and festival sale offers. Our Diwali, Eid, and Republic Day sales feature discounts of up to 30%.",
      "6. Mix Premium with Budget: Spend more on high-visibility items — a well-made formal shirt, a good pair of jeans — and save on basics like innerwear, socks, and casual t-shirts. This hybrid approach maximizes your wardrobe quality per rupee.",
      "7. Take Advantage of Free Alteration: At Ajay Readymade Store, all purchases include same-day free alteration. This means you can buy standard sizes confidently — we'll tailor it to your exact fit at no extra cost.",
      "8. WhatsApp Us Before Visiting: Message us on WhatsApp at +91-95968-85527 to check if we have a specific item in your size before making the trip. This saves time and ensures you don't go home disappointed.",
      "9. Shop as a Family: When families shop together, we can coordinate outfits and often suggest mix-and-match options that maximize the number of complete outfits from fewer individual pieces.",
      "10. Build, Don't Buy Everything at Once: Great wardrobes are built over time. Add 2–3 quality pieces each season rather than buying 20 cheap items at once. Quality cotton shirts from our men's collection and solid kurtis from our women's collection are perfect starting points.",
      "Visit Ajay Readymade Store on Gurudwara Road, Near Singla Hospital, Ellenabad, Haryana 125102 — the best value-for-money clothing store in Ellenabad and Sirsa district."
    ]
  },
]

