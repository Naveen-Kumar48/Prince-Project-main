import { NextResponse } from "next/server"
import { getCategories, createCategory, updateCategory, deleteCategory } from "@/lib/db-helper"

export async function GET() {
  try {
    const categories = await getCategories()
    return NextResponse.json({ categories })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load categories" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    if (!body.name) {
      return NextResponse.json({ error: "Missing category name" }, { status: 400 })
    }
    
    const slug = body.slug || body.name.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

    const newCategory = await createCategory({
      name: body.name,
      slug,
      description: body.description || "",
      priority: parseInt(body.priority) || 0,
      gender: body.gender || "men",
      image: body.image || "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
    })
    
    return NextResponse.json({ success: true, category: newCategory })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create category" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "Missing category ID" }, { status: 400 })
    }
    
    const id = parseInt(body.id)
    const success = await updateCategory(id, {
      name: body.name,
      slug: body.slug,
      description: body.description,
      priority: body.priority !== undefined ? parseInt(body.priority) : undefined,
      gender: body.gender,
      image: body.image
    })
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update category" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const idStr = searchParams.get("id")
    if (!idStr) {
      return NextResponse.json({ error: "Missing category ID" }, { status: 400 })
    }
    
    const id = parseInt(idStr)
    const success = await deleteCategory(id)
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete category" }, { status: 500 })
  }
}
