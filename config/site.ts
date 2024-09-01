import { type Metadata, type Viewport } from "next"

const DEFAULT_DATA = {
  DOMAIN: [
    "https://www.shridadamotashyammandir.in",
    "https://shridadamotashyammandir.in",
  ] as const,
  DEVELOPERS: [
    {
      name: "Yash Godara",
      username: "y17godara",
      email: "yash17godara@gmail.com",
      url: "https://y-g.tech",
      links: {
        twitter: "https://twitter.com/y17godara",
        github: "https://github.com/y17godara",
      },
    },
  ],
  ogImage: `https://shridadamotashyammandir.in/og-image.jpg`,
  name: "Shri Dada Mota Shyam Mandir Bharthal - New Delhi India",
  Description: `Shri Dada Mota Shyam Ji Mandir is a Hindu temple located in Bharthal Village, Dwarka Sector 26, New Delhi, India. Also known as Shri Shyam Ji Dada Mota Mandir, this temple is believed by devotees to be over 350 years old. It is dedicated to Lord Shri Shyam Ji and Shri Dada Mota Ji and is renowned for its spiritual and religious activities.`,
}

const SiteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

const SiteMetadata: Metadata = {
  title: {
    default: DEFAULT_DATA.name,
    template: `%s | ${DEFAULT_DATA.name}`,
  },
  description: DEFAULT_DATA.Description,
  metadataBase: new URL(DEFAULT_DATA.DOMAIN[0]),
  alternates: {
    canonical: DEFAULT_DATA.DOMAIN[0],
  },
  keywords: [
    "Shri Shyam Ji Dada Mote Mandir",
    "Shri Shyam Ji Mandir",
    "Shri Dada Mote Ji",
    "Shri Shyam Ji Dada Mote Mandir Bharthal",
    "Shri Shyam Ji Mandir Bharthal",
    "Shri Dada Mote Ji Mandir Bharthal",
    "Shri Shyam Ji Dada Mote Mandir New Delhi",
    "Shri Shyam Ji Mandir New Delhi",
    "Shri Dada Mote Ji Mandir New Delhi",
    "Shri Shyam Ji Dada Mote Mandir India",
    "Shri Shyam Ji Mandir India",
    "Shri Dada Mote Ji Mandir India",
    "Shri Shyam Ji Dada Mote Mandir Bharthal New Delhi",
    "Shri Shyam Ji Mandir Bharthal New Delhi",
    "Shri Dada Mote Ji Mandir Bharthal New Delhi",
    "Shri Shyam Ji Dada Mote Mandir Bharthal New Delhi India",
    "Shri Shyam Ji Mandir Bharthal New Delhi India",
    "Shri Dada Mote Ji Mandir Bharthal New Delhi India",
    "Dada Mota Mandir Bharthal",
    "Dada Mota Mandir Delhi",
  ],
  authors: [
    {
      name: DEFAULT_DATA.DEVELOPERS[0].name,
      url: DEFAULT_DATA.DEVELOPERS[0].url,
    },
  ],
  generator: "Next.js",
  applicationName: DEFAULT_DATA.name,
  robots: "index, follow",
  appleWebApp: true,
  referrer: "origin-when-cross-origin",
  publisher: "y17godara",
  category: "Religion",
  creator: "y17godara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DEFAULT_DATA.DOMAIN[0],
    title: DEFAULT_DATA.name,
    description: DEFAULT_DATA.Description,
    siteName: DEFAULT_DATA.name,
    images: [
      {
        url: DEFAULT_DATA.ogImage,
        width: 1200,
        height: 630,
        alt: DEFAULT_DATA.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_DATA.name,
    description: DEFAULT_DATA.Description,
    images: [DEFAULT_DATA.ogImage],
    creator: "@y17godara",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${DEFAULT_DATA.DOMAIN[0]}/site.webmanifest`,
}

export { DEFAULT_DATA, SiteViewport, SiteMetadata }
