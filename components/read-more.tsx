"use client"

import { Button, CustomButton } from "@/ui/button"
import { Drawer } from "vaul"

import { cn } from "@/lib/utils"

export default function Readmore({
  children,
  className,
  heading,
  props,
}: {
  children: React.ReactNode
  className?: string
  heading: string
  props?: any
}) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button variant="link" size="sm" className="text-white px-0">
          Read more
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={cn(
            "bg-background z-50 flex flex-col rounded-t-[10px] max-h-[90%] mt-24 fixed bottom-0 left-0 right-0",
            className
          )}
          {...props}
        >
          <h2 className="sticky justify-center text-center top-0 bg-background z-50 px-4 py-2 text-2xl sm:text-3xl font-bold my-4 leading-tight">
            {heading}
          </h2>
          <div className="overflow-y-auto">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
