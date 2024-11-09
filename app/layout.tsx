import React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { i18n, Locale } from "@/i18n.config"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

import { fontSans } from "@/config/fonts"
import { SiteMetadata } from "@/config/site"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/dev/tailwind-indicator"
import { Provider } from "@/components/provider"
import { ThemeSwitcher } from "@/components/theme-switcher"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
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
    <html lang={params.locale} dir="ltr" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative flex flex-col overflow-x-hidden min-h-screen bg-background font-sans antialiased",
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
          <VercelAnalytics />
        </Provider>
      </body>
      <GoogleTagManager gtmId={`${process.env.GOOGLE_TAG_MANAGER_ID!}`} />
      <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS_ID!}`} />
    </html>
  )
}
