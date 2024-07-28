import Link from "next/link"

import { cn } from "@/lib/utils"

import { SiteHeaderWrapper } from "./header-wrapper"
import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { LangToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <SiteHeaderWrapper>
      <MainNav />
      <MobileNav />
      <div className="flex md:hidden items-center justify-between space-x-2 md:justify-end">
        <Link href="/" className="mx-4 flex items-center lg:mx-6">
          <div>
            <Icons.logo className="h-6 w-6" />
          </div>
        </Link>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 md:ml-4 lg:ml-6 sm:gap-4 lg:gap-6",
          "md:justify-end"
        )}
      >
        {/* <LangToggle /> */}
      </div>
    </SiteHeaderWrapper>
  )
}
