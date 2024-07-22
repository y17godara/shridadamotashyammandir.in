import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main className="relative flex-1">
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-yellow-50 via-background to-pink-100"></div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="sticky z-50 top-0 bg-transparent">
            <SiteHeader />
          </div>
          <div className="flex-1 bg-transparent min-h-[300vh]">{children}</div>
          <div className="sticky bottom-0 bg-transparent">
            <SiteFooter />
          </div>
        </div>
      </main>
    </>
  )
}
