import Link from "next/link"
import { buttonVariants } from "@/ui/button"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl justify-between md:justify-center items-center w-full">
        <MainNav />
        <MobileNav />
        <div className="flex md:hidden items-center justify-between space-x-2 md:justify-end">
          <Link href="/" className="mx-4 flex items-center lg:mx-6">
            <div>
              <Icons.logo className="h-6 w-6" />
            </div>
          </Link>
        </div>
        <ModeToggle className="ml-4 lg:ml-6" />
      </div>
    </header>
  )
}
