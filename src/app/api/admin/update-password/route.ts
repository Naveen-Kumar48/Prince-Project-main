import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    // 1. Check if authorized session is active
    const cookieStore = await cookies()
    const session = cookieStore.get("admin_session")
    if (!session || session.value !== "true") {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 })
    }

    const body = await req.json()
    const { currentPassword, newPassword } = body

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "Missing password fields" }, { status: 400 })
    }

    const activePassword = process.env.ADMIN_PASSWORD || "admin123"

    // 2. Validate current password
    if (currentPassword !== activePassword) {
      return NextResponse.json({ error: "Incorrect current password" }, { status: 400 })
    }

    // 3. Update the .env file
    const envPath = path.join(process.cwd(), ".env")
    if (fs.existsSync(envPath)) {
      let envContent = fs.readFileSync(envPath, "utf8")
      
      const adminPasswordRegex = /^ADMIN_PASSWORD=.*$/m
      const newLine = `ADMIN_PASSWORD="${newPassword}"`

      if (adminPasswordRegex.test(envContent)) {
        envContent = envContent.replace(adminPasswordRegex, newLine)
      } else {
        envContent += `\nADMIN_PASSWORD="${newPassword}"`
      }

      fs.writeFileSync(envPath, envContent, "utf8")
    }

    // 4. Update in-memory environment variable
    process.env.ADMIN_PASSWORD = newPassword

    return NextResponse.json({ success: true, message: "Password updated successfully in .env" })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update password" }, { status: 500 })
  }
}
