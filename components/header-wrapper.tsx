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
      <motion.header className="sticky top-0 z-50 w-full backdrop-blur-3xl border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60">
        <motion.div
          className={cn(
            "container px-4 flex h-16 py-1 justify-between md:justify-center items-center mx-auto"
          )}
        >
          {children}
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}
