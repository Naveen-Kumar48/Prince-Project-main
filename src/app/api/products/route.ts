import { NextResponse } from "next/server"
import { getProducts, createProduct, updateProduct, deleteProduct } from "@/lib/db-helper"

export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const gender = searchParams.get("gender")
  const q = searchParams.get("q")?.toLowerCase()
  let filtered = await getProducts()
  if(gender) filtered = filtered.filter(p=>p.gender===gender)
  if(q) filtered = filtered.filter(p=>p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  return NextResponse.json({ products: filtered, total: filtered.length })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json({ error: "Missing required fields: name, price, category" }, { status: 400 })
    }
    
    // Generate a clean slug
    const slug = body.name.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") + "-" + Math.floor(Math.random() * 1000)

    const newProduct = await createProduct({
      ...body,
      slug,
      price: parseInt(body.price),
      comparePrice: body.comparePrice ? parseInt(body.comparePrice) : null,
      stock: parseInt(body.stock) || 0,
      sizes: body.sizes || ["S", "M", "L", "XL"],
      colors: body.colors || [{ name: "Default", hex: "#000000" }],
      images: body.images || ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"]
    })
    
    return NextResponse.json({ success: true, product: newProduct })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create product" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "Missing product ID" }, { status: 400 })
    }
    
    const id = parseInt(body.id)
    const success = await updateProduct(id, body)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const idStr = searchParams.get("id")
    
    if (!idStr) {
      return NextResponse.json({ error: "Missing product ID" }, { status: 400 })
    }
    
    const id = parseInt(idStr)
    const success = await deleteProduct(id)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete product" }, { status: 500 })
  }
}
