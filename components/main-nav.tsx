"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { fontSans } from "@/config/fonts"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex gap-4 lg:gap-6 items-center">
      <Link
        href="#home"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href="#about"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("#about")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        About
      </Link>
      <Link
        href="#events"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("#events")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Events
      </Link>
      <Link
        href="/"
        className={cn(
          "relative mx-4 gap-2 flex flex-col items-center lg:mx-6 w-28",
          fontSans.className
        )}
      >
        <div className="flex justify-center text-[#9a6270] bg-opacity-50">
          <Icons.logo className="h-6 w-6" />
        </div>
        <span className={cn("absolute bottom-1/2 left-1/2 hidden text-base md:text-lg font-bold md:inline-block uppercase",
          "transform -translate-x-1/2 translate-y-1/2",
          "whitespace-nowrap text-foreground/60",
        )}>
          Jai Shri Shyam 
        </span>
      </Link>
      <Link
        href="#donate"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("#donate")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Donate
      </Link>
      <Link
        href="#contact"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("#contact")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Contact
      </Link>
    </div>
  )
}
