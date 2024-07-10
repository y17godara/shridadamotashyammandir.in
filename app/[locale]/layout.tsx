import React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { fontSans } from "@/config/fonts"
import { SiteMetadata } from "@/config/site"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/dev/tailwind-indicator"
import { Provider } from "@/components/provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Locale, i18n } from '@/i18n.config'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export const metadata: Metadata = {
  ...SiteMetadata,
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  return (
    <html 
      lang={params.locale}
      dir="ltr"
      suppressHydrationWarning
    >
      <head />
      <body
        className={cn(
          "relative flex flex-col min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          params={params}
        >
          {children}
          <TailwindIndicator />
          <ThemeSwitcher />
        </Provider>
      </body>
    </html>
  )
}
