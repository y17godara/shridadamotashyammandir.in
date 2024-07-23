import { LinkPreview } from "@/ui/link-preview"

import { DEFAULT_DATA } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 w-full">
      <div className="container flex flex-col w-full items-center justify-between gap-4 md:h-24 md:flex-row">
        {/* <div className="text-balance w-full text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ and blessings of 100's of devotees by{" "}
          <LinkPreview
            target="_blank"
            url={DEFAULT_DATA.DEVELOPERS[0].url}
            className="font-medium underline underline-offset-4 text-primary"
          >
            Yash Godara
          </LinkPreview>{" "}
          and assisted by{" "}
          <LinkPreview
            target="_blank"
            url={DEFAULT_DATA.DEVELOPERS[1].url}
            className="font-medium underline underline-offset-4 text-primary"
          >
            Mayank Godara
          </LinkPreview>
          .
        </div> */}
      </div>
    </footer>
  )
}
