import { type Metadata, type Viewport } from "next"

const DEFAULT_DATA = {
  DOMAIN: [
    "https://shridatamotashyamjimandir.in",
    "https://shridatamotashyamjimandir.com",
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
    {
      name: "Mayank Godara",
      username: "",
      email: "mayankgodara111@gmail.com",
      url: "",
      links: {
        twitter: "",
        github: "",
      },
    },
  ],
  ogImage: `https://shridatamotashyamjimandir.in/og-image.jpg`,
  name: "Shri Dada Mota Shri Shyam Ji Mandir Bharthal New Delhi India",
  Description: `Shri Data Mote Shyam Ji Mandir is a Hindu Temple located in Bharthal Village, Dwarka Sector 26 New Delhi India. The Temple is One of the 
    biggest and Popular Temple in the area dedicated to Lord Krishna. The Temple is also known as Shri Shyam Ji Dada Mote Mandir. It has been built in the
    memory of Shri Data Mote Ji. The Temple is a popular place of worship for the devotees of Lord Krishna. The Temple is visited by thousands of devotees
    per year. The Temple is a beautiful place to visit and offers a peaceful and serene environment to the devotees. The Temple is a must-visit place for
    those who are looking for spiritual peace and solace.`,
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
    "Shri Data Mote Ji",
    "Shri Shyam Ji Dada Mote Mandir Bharthal",
    "Shri Shyam Ji Mandir Bharthal",
    "Shri Data Mote Ji Mandir Bharthal",
    "Shri Shyam Ji Dada Mote Mandir New Delhi",
    "Shri Shyam Ji Mandir New Delhi",
    "Shri Data Mote Ji Mandir New Delhi",
    "Shri Shyam Ji Dada Mote Mandir India",
    "Shri Shyam Ji Mandir India",
    "Shri Data Mote Ji Mandir India",
    "Shri Shyam Ji Dada Mote Mandir Bharthal New Delhi",
    "Shri Shyam Ji Mandir Bharthal New Delhi",
    "Shri Data Mote Ji Mandir Bharthal New Delhi",
    "Shri Shyam Ji Dada Mote Mandir Bharthal New Delhi India",
    "Shri Shyam Ji Mandir Bharthal New Delhi India",
    "Shri Data Mote Ji Mandir Bharthal New Delhi India",
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
