"use client"

import * as React from "react"
import { TooltipProvider } from "@/ui/tooltip"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { Locale } from '@/i18n.config'
import { LangProvider } from "@/context/langContext"

export interface ProviderProps extends ThemeProviderProps {
  children: React.ReactNode
  params: { lang: any }
}

export function Provider({ children, params, ...props }: ProviderProps) {
  return (
    <JotaiProvider>
      <NextThemesProvider {...props}>
        <TooltipProvider delayDuration={0}>
          <LangProvider params={params}>
          {children}
          </LangProvider>
        </TooltipProvider>
      </NextThemesProvider>
    </JotaiProvider>
  )
}
