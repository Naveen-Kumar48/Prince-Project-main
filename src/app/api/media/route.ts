import { NextResponse } from "next/server"
import { getMediaItems, createMediaItem, updateMediaItem, deleteMediaItem } from "@/lib/db-helper"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const section = searchParams.get("section")
    
    let items = await getMediaItems()
    if (section) {
      items = items.filter(item => item.section === section)
    }
    
    return NextResponse.json({ items })
  } catch (error: any) {
    console.error("Error fetching media items:", error)
    return NextResponse.json({ items: [], error: error.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    if (!body.section || !body.key || !body.image) {
      return NextResponse.json({ error: "Missing required fields: section, key, image" }, { status: 400 })
    }
    
    const newItem = await createMediaItem({
      section: body.section,
      key: body.key,
      image: body.image,
      altText: body.altText || "",
      sortOrder: parseInt(body.sortOrder) || 0,
      isActive: body.isActive !== false
    })
    
    return NextResponse.json({ success: true, item: newItem })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create media item" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    if (!body.id) {
      return NextResponse.json({ error: "Missing media item ID" }, { status: 400 })
    }
    
    const id = parseInt(body.id)
    const success = await updateMediaItem(id, {
      section: body.section,
      key: body.key,
      image: body.image,
      altText: body.altText,
      sortOrder: body.sortOrder !== undefined ? parseInt(body.sortOrder) : undefined,
      isActive: body.isActive
    })
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Media item not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update media item" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const idStr = searchParams.get("id")
  
  if (!idStr) {
    return NextResponse.json({ error: "Missing ID parameter" }, { status: 400 })
  }
  
  const id = parseInt(idStr)
  const success = await deleteMediaItem(id)
  
  if (success) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Media item not found" }, { status: 404 })
  }
}
