"use client"

import { Button, CustomButton } from "@/ui/button"
import { Drawer } from "vaul"

import { cn } from "@/lib/utils"

export default function Readmore({
  children,
  className,
  props,
}: {
  children: React.ReactNode
  className?: string
  props?: any
}) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <CustomButton>Read more</CustomButton>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={cn(
            "bg-background z-50 flex flex-col rounded-t-[10px] max-h-[50%] mt-24 fixed bottom-0 left-0 right-0",
            className
          )}
          {...props}
        >
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
