"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/ui/button"
import { ScrollArea } from "@/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center text-start gap-4"
          onOpenChange={setOpen}
        >
          <Icons.logo className="h-4 w-4 min-h-4 min-w-4" />
          <span className="font-bold hidden sm:block">
            Dada Mote Shri Shyam Ji Mandir
          </span>
          <span className="font-bold text-lg sm:hidden">Welcome</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            <MobileLink href={'/'} onOpenChange={setOpen}>
              <span>Home</span>
            </MobileLink>
            <MobileLink href={'#about'} onOpenChange={setOpen}>
              <span>About</span>
            </MobileLink>
            <MobileLink href={'#services'} onOpenChange={setOpen}>
              <span>Event</span>
            </MobileLink>
            <MobileLink href={'#donate'} onOpenChange={setOpen}>
              <span>Donate</span>
            </MobileLink>
            <MobileLink href={'#contact'} onOpenChange={setOpen}>
              <span>Contact</span>
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
