import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ success: true, message: "Logged out successfully" })
  
  // Clear the cookie by setting it with maxAge 0
  response.cookies.set("admin_session", "", {
    path: "/",
    maxAge: 0
  })
  
  return response
}
