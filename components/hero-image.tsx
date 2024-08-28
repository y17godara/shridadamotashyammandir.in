"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Image from "next/image"
import { EffectFade, Navigation, Pagination } from "swiper/modules"

import BGImage4 from "../public/images/vps/bg2.png"
// @ts-ignore
import BGImage5 from "../public/images/vps/bg6.JPG"
// @ts-ignore
import BGImage6 from "../public/images/vps/bg7.JPG"
// @ts-ignore
import BGImage7 from "../public/images/vps/bg8.JPG"
// @ts-ignore
import BGImage1 from "../public/images/vps/bg9.JPG"
// @ts-ignore
import BGImage2 from "../public/images/vps/bg10.JPG"
// @ts-ignore
import BGImage3 from "../public/images/vps/bg11.JPG"
// @ts-ignore
import BGImage8 from "../public/images/vps/bg12.JPG"
// @ts-ignore
import BGImage9 from "../public/images/vps/bg13.JPG"

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mt-4 h-[60vh] lg:h-[65vh] w-full max-w-[1200px] bg-red-500"
      >
        <SwiperSlide>
          <Image
            src={BGImage1.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage2.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage3.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage4.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage5.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage6.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage7.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage8.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BGImage9.src}
            alt={"Mandir Front View"}
            fill
            placeholder="blur"
            blurDataURL="/assets/img/placeholder.jpg"
            quality={30}
            className="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
