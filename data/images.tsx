/* eslint-disable */
// @ts-ignore
// @ts-nocheck

import BGImage5 from "../public/images/vps/bg2.png"
import BGImage2 from "../public/images/vps/bg4.JPG"
// @ts-ignore
import BGImage6 from "../public/images/vps/bg6.JPG"
// @ts-ignore
import BGImage7 from "../public/images/vps/bg7.JPG"
// @ts-ignore
import BGImage8 from "../public/images/vps/bg8.JPG"
// @ts-ignore
import BGImage1 from "../public/images/vps/bg9.JPG"
// @ts-ignore
import BGImage3 from "../public/images/vps/bg10.JPG"
// @ts-ignore
import BGImage4 from "../public/images/vps/bg11.JPG"
// @ts-ignore
import BGImage12 from "../public/images/vps/bg12.JPG"
// @ts-ignore
import BGImage13 from "../public/images/vps/bg13.JPG"

export interface ImageAttributes {
  id: number
  src: string
  alt: string
}

const HeroImages: ImageAttributes[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1701748131168-05f3a37422ae?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mandir Front View",
  },
  {
    id: 2,
    src: BGImage2.src,
    alt: "Mandir 2021 Mela",
  },
  {
    id: 3,
    src: BGImage3.src,
    alt: "Mandir Image",
  },
  {
    id: 4,
    src: BGImage4.src,
    alt: "Mandir Image",
  },
  {
    id: 5,
    src: BGImage5.src,
    alt: "Mandir Image",
  },
  {
    id: 6,
    src: BGImage6.src,
    alt: "Mandir Image",
  },
  {
    id: 7,
    src: BGImage7.src,
    alt: "Mandir Image",
  },
  {
    id: 8,
    src: BGImage8.src,
    alt: "Mandir Image",
  },
  {
    id: 12,
    src: BGImage12.src,
    alt: "Mandir Image",
  },
  {
    id: 13,
    src: BGImage13.src,
    alt: "Mandir Image",
  },
]

export default HeroImages
