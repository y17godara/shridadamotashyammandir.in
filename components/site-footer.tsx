import { LinkPreview } from "@/ui/link-preview"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
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
            Manyank Godara
          </LinkPreview>
          .
        </p>
      </div>
    </footer>
  )
}
