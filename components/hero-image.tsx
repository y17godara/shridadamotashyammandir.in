"use client"

import React, { useCallback } from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// import BGImage10 from "../public/images/vps/bg1.png"
import BGImage5 from "../public/images/vps/bg2.png"
// import BGImage11 from "../public/images/vps/bg3.png"
import BGImage2 from "../public/images/vps/bg4.jpg"
import BGImage6 from "../public/images/vps/bg6.jpg"
import BGImage7 from "../public/images/vps/bg7.jpg"
import BGImage8 from "../public/images/vps/bg8.jpg"
import BGImage1 from "../public/images/vps/bg9.jpg"
import BGImage3 from "../public/images/vps/bg10.jpg"
import BGImage4 from "../public/images/vps/bg11.jpg"
import BGImage12 from "../public/images/vps/bg12.jpg"
import BGImage13 from "../public/images/vps/bg13.jpg"

// import BGImage5 from "../public/images/vps/bg5.jpg"
// import BGImage14 from "../public/images/vps/bg14.jpg"

const HeroImages = [
  {
    id: 1,
    src: BGImage1.src,
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
  // {
  //   id: 9,
  //   src: BGImage9.src,
  //   alt: "Mandir Image",
  // },
  // {
  //   id: 10,
  //   src: BGImage10.src,
  //   alt: "Mandir Image",
  // },
  // {
  //   id: 11,
  //   src: BGImage11.src,
  //   alt: "Mandir Image",
  // },
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

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative !w-screen !max-w-full p-2 md:p-10 !h-[40vh] md:!h-[75vh] lg:!h-[95vh] lg:!pt-2 !mt-0 embla">
      <div
        className="!border-none h-full flex flex-col relative embla__viewport rounded-xl overflow-hidden !w-full !max-w-full"
        ref={emblaRef}
      >
        <div className="relative h-full embla__container rounded-xl">
          {HeroImages.map((image) => (
            <div
              className="relative embla__slide mx-0.5 lg:mx-1 overflow-hidden rounded-xl"
              key={image.id}
            >
              <img
                className="object-cover h-full w-full"
                src={image.src}
                alt={image.alt}
                loading="eager"
              />
              <p
                className="absolute left-2 bottom-2 bg-black bg-opacity-50 text-white p-2 text-xs lg:text-sm rounded-tr-xl"
                style={{ zIndex: 10 }}
              >
                {image.id} - {image.alt}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-2 justify-end absolute bottom-4 right-4">
          <div className="embla__buttons">
            <button
              className="flex justify-center items-center text-center size-12 xl:size-20 bg-gradient-to-br from-black via-transparent to-gray-800 px-2 py-1 text-sm text-white rounded-full"
              onClick={scrollPrev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="flex justify-center items-center text-center size-12 xl:size-20 bg-gradient-to-br from-black via-transparent to-gray-800 px-2 py-1 text-sm text-white rounded-full"
              onClick={scrollNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
