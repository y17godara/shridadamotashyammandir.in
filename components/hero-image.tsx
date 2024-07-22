"use client"

import React, { useCallback } from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HeroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A beautiful waterfall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A beautiful waterfall",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1716117626586-538233aaf9ae?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A beautiful waterfall",
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
    <div className="relative !w-screen !max-w-full p-2 md:p-10 !h-[40vh] md:!h-[75vh] !mt-0 embla">
      <div
        className="!border-none h-full flex flex-col relative embla__viewport rounded-xl overflow-hidden !w-full !max-w-full"
        ref={emblaRef}
      >
        <div className="relative h-full embla__container rounded-xl">
          {HeroImages.map((image) => (
            <div
              className="embla__slide mx-0.5 lg:mx-1 overflow-hidden rounded-xl"
              key={image.id}
            >
              <img
                className="object-cover h-full w-full"
                src={image.src}
                alt={image.alt}
                loading="eager"
              />
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
