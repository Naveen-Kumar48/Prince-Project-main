import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { password } = body

    const securePassword = process.env.ADMIN_PASSWORD || "admin123"

    if (password === securePassword) {
      const response = NextResponse.json({ success: true, message: "Logged in successfully" })
      
      // Set a secure session cookie
      response.cookies.set("admin_session", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 // 24 hours
      })
      
      return response
    } else {
      return NextResponse.json({ error: "Invalid admin password" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error during authentication" }, { status: 500 })
  }
}
