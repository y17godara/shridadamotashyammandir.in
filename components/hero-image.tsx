"use client"

import React, { useCallback } from "react"
import { HeroImages } from "@/data/images"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
