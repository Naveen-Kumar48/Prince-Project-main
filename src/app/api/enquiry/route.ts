import { NextResponse } from "next/server"
import { saveInquiry, getInquiries, deleteInquiry } from "@/lib/db-helper"

export async function GET() {
  try {
    const inquiries = await getInquiries()
    return NextResponse.json({ inquiries })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load enquiries" }, { status: 500 })
  }
}

export async function POST(req: Request){
  const body = await req.json()
  // Save to DB / JSON store
  console.log("Saving lead to DB:", body)
  const saved = await saveInquiry({
    name: body.name,
    phone: body.phone,
    email: body.email || "",
    message: body.message || "",
    productInterest: body.productInterest || "General Inquiry",
    source: body.source || "website"
  })
  
  return NextResponse.json({ ok: true, data: saved, message: "Enquiry received – we will call in 10 mins" })
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const idStr = searchParams.get("id")
    if (!idStr) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 })
    }
    const id = parseInt(idStr)
    const success = await deleteInquiry(id)
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete enquiry" }, { status: 500 })
  }
}
