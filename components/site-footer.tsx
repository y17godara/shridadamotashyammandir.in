export function SiteFooter() {
  return (
    <footer className="md:px-4 md:py-2 w-full !py-10 flex flex-col justify-center items-center text-center">
      {/* <div className="container flex flex-col w-full py-4 px-2 items-center border-primary border rounded-lg justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          Jai Shri Dada Mote Jai Shri Shyam
        </div>
        </div> */}
      <div className="flex flex-col items-center w-full justify-center text-center max-w-[1200px]">
        <p className="text-sm text-secondary-foreground">
          © {new Date().getFullYear()} Rights Reserved
        </p>
        <p className="text-xs text-secondary-foreground/50 mt-2">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </div>
    </footer>
  )
}
