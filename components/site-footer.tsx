export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 w-full !pt-20">
      <div className="container flex flex-col w-full items-center border-primary border-t justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          Jai Shri Dada Mote Jai Shri Shyam
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm">
            © {new Date().getFullYear()} Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
