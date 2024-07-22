import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main id="home" className="relative flex-1">
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-red-500 via-background via-80% to-background"></div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="sticky z-50 top-0 bg-transparent">
            <SiteHeader />
          </div>
          <div className="flex-1 bg-transparent">{children}</div>
          <div className="bg-transparent">
            <SiteFooter />
          </div>
        </div>
      </main>
    </>
  )
}
