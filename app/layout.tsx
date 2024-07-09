import React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { fontSans } from "@/config/fonts"
import { SiteMetadata } from "@/config/site"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/dev/tailwind-indicator"
import { ThemeProvider } from "@/components/provider"
import { ThemeSwitcher } from "@/components/theme-switcher"

export const metadata: Metadata = {
  ...SiteMetadata,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </div>
          <TailwindIndicator />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
