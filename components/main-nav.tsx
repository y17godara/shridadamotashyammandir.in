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
        href="/docs"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/docs" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Docs
      </Link>
      <Link
        href="/docs/components"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/docs/components") &&
            !pathname?.startsWith("/docs/component/chart")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Components
      </Link>
      <Link
        href="/blocks"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/blocks")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Blocks
      </Link>
      <Link
        href="/"
        className={cn(
          "mx-4 gap-2 flex items-center lg:mx-6",
          fontSans.className
        )}
      >
        <div>
          <Icons.logo className="h-6 w-6" />
        </div>
        <span className="hidden font-bold lg:inline-block">
          Shri Dada Mote Shri Shyam Ji Mandir
        </span>
      </Link>
      <Link
        href="/charts"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/docs/component/chart") ||
            pathname?.startsWith("/charts")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Charts
      </Link>
      <Link
        href="/themes"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/themes")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Themes
      </Link>
      <Link
        href="/examples"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname?.startsWith("/examples")
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Examples
      </Link>
    </div>
  )
}
