"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ variant = "horizontal", className }: { variant?: "horizontal" | "vertical" | "icon" | "white"; className?: string }) {
  const isWhite = variant === "white"
  return (
    <Link href="/" className={cn("flex items-center gap-3.5 group select-none py-1", className)} aria-label="Ajay Readymade Store Home">
      {/* Official Circular Logo Badge */}
      <div className={cn(
        "relative rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-md flex-shrink-0 border-[2.5px] bg-[#FFC800]",
        isWhite ? "border-[#FFC800] shadow-[#FFC800]/25" : "border-[#0A1931] shadow-soft",
        variant === "icon" ? "w-12 h-12" : "w-14 h-14 lg:w-[64px] lg:h-[64px]"
      )}>
        <img
          src="/logo.jpg"
          alt="Ajay Readymade Store Logo"
          width="120"
          height="120"
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:rotate-3"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/icon.svg";
          }}
        />
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-1.5">
            <span 
              className={cn("font-black tracking-tight text-[22px] lg:text-[26px]", isWhite ? "text-white" : "text-[#D90429]")} 
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              अजय
            </span>
            <span 
              className={cn("font-extrabold tracking-wide text-[18px] lg:text-[22px]", isWhite ? "text-[#FFC800]" : "text-[#0A1931]")} 
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              READYMADE
            </span>
          </div>
          <span className={cn("text-[11px] lg:text-[12.5px] tracking-[0.16em] font-bold uppercase -mt-0.5", isWhite ? "text-white/80" : "text-slate-600")}>
            STORE • Ellenabad • Since 1998
          </span>
        </div>
      )}
    </Link>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("w-14 h-14 rounded-full overflow-hidden border-2 border-[#0A1931] shadow-soft flex-shrink-0 bg-[#FFC800]", className)}>
      <img
        src="/logo.jpg"
        alt="Ajay Readymade Store Logo Mark"
        width="100"
        height="100"
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/icon.svg";
        }}
      />
    </div>
  )
}



