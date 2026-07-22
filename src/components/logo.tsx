"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ variant = "horizontal", className }: { variant?: "horizontal" | "vertical" | "icon" | "white"; className?: string }) {
  const isWhite = variant === "white"
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)} aria-label="Ajay Readymade Store Home">
      <div className={cn("relative flex items-center justify-center rounded-[14px] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-premium",
        variant === "icon" ? "w-11 h-11" : "w-11 h-11",
        isWhite ? "bg-white" : "bg-[#0B1D3A] shadow-soft"
      )}>
        {/* Hanger A icon */}
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(isWhite ? "text-[#0B1D3A]" : "text-white")}> 
          {/* Hanger hook */}
          <path d="M16 4C16 4 16 2 18.5 2C21 2 21 4 21 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          {/* A shape as hanger */}
          <path d="M6 22L16 8L26 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 18H22.5" stroke={isWhite ? "#C8A951" : "#C8A951"} strokeWidth="2.2" strokeLinecap="round"/>
          {/* Shopping bag hint */}
          <path d="M11 22V24.5C11 25.3 11.7 26 12.5 26H19.5C20.3 26 21 25.3 21 24.5V22" stroke={isWhite ? "#C8A951" : "#C8A951"} strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
        </svg>
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C8A951] border-2 border-white shadow-sm" />
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1">
            <span className={cn("font-bold tracking-[-0.02em] text-[17px]", isWhite ? "text-white" : "text-[#0B1D3A]")} style={{ fontFamily: "var(--font-poppins)"}}>
              AJAY
            </span>
            <span className={cn("font-medium tracking-wide text-[17px]", isWhite ? "text-[#E9D09A]" : "text-[#C8A951]")} style={{ fontFamily: "var(--font-poppins)"}}>
              READYMADE
            </span>
          </div>
          <span className={cn("text-[10px] tracking-[0.18em] font-semibold uppercase mt-0.5", isWhite ? "text-white/70" : "text-slate-500")}>
            Store • Ellenabad • Since 1998
          </span>
        </div>
      )}
    </Link>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("w-11 h-11 rounded-[14px] bg-[#0B1D3A] flex items-center justify-center", className)}>
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M16 4V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 22L16 8L26 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 18H22.5" stroke="#C8A951" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    </div>
  )
}
