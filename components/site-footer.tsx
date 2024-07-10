import { LinkPreview } from "@/ui/link-preview"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 w-full">
      <div className="container flex flex-col w-full items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="text-balance w-full text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ and blessings of 100's of devotees by{" "}
          <LinkPreview
            url="https://y-g.tech"
            className="font-medium underline underline-offset-4"
          >
            Yash Godara
          </LinkPreview>{" "}
          and assisted by{" "}
          <LinkPreview
            url="#"
            className="font-medium underline underline-offset-4"
          >
            Mayank Godara
          </LinkPreview>
          .
        </div>
      </div>
    </footer>
  )
}
