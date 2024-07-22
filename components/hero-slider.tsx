"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel"

export function HeroSlider() {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] xl:h-[900px]">
      <Carousel className="rounded-lg overflow-hidden h-[400px] md:h-[500px] xl:h-[900px] ">
        <CarouselContent>
          <CarouselItem className="relative w-full h-[400px] md:h-[500px] xl:h-[900px]">
            <img
              src="https://images.unsplash.com/photo-1657020411310-40e10e211c9d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner Image 1"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] xl:h-[900px] object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative w-full h-[400px] md:h-[500px] xl:h-[900px]">
            <img
              src="https://images.unsplash.com/photo-1657020411310-40e10e211c9d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner Image 1"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] xl:h-[900px] object-cover"
            />
          </CarouselItem>
          <CarouselItem className="relative w-full h-[400px] md:h-[500px] xl:h-[900px]">
            <img
              src="https://images.unsplash.com/photo-1657020411310-40e10e211c9d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Banner Image 1"
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[500px] xl:h-[900px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" /> */}
      </Carousel>
    </div>
  )
}
