"use client"

import React, { useCallback } from "react"
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

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
        className="!border-none h-full flex flex-col relative embla__viewport !w-full !max-w-full"
        ref={emblaRef}
      >
        <div className="h-full embla__container rounded-xl">
          {HeroImages.map((image) => (
            <div
              className="embla__slide mx-4 overflow-hidden rounded-xl"
              key={image.id}
            >
              <img
                className="object-cover h-full w-full"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className="w-20 bg-black px-2 py-1 text-sm text-white"
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button
            className="w-20 bg-black px-2 py-1 text-sm text-white"
            onClick={scrollNext}
          >
            Next
          </button>
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}
