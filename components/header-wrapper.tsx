"use client"

import { useEffect } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion"

import { cn } from "@/lib/utils"

export function SiteHeaderWrapper({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  return (
    <AnimatePresence>
      <motion.header className="sticky top-2 z-50 w-full mx-auto">
        <motion.div
          className={cn(
            "container px-4 flex h-16 py-1 max-w-[1200px] rounded-full justify-between md:justify-center items-center mx-auto backdrop-blur-xl border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60"
          )}
        >
          {children}
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}
