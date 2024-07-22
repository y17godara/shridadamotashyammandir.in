import { Suspense } from "react"
import { Locale } from "@/i18n.config"

import { getDictionary } from "@/lib/dictionary"
import ImageSlider from "@/components/hero-image"
import { HeroSlider } from "@/components/hero-slider"
import Readmore from "@/components/read-more"

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <>
      <div className="flex justify-center">
        <section className="">
          <Suspense>
            <ImageSlider />
          </Suspense>
        </section>
        <section>
        <section
        id="about"
        className="w-full bg-gradient-to-br bg-background via-fuchsia-100 to-foreground"
      >
        <div
          className="flex flex-col items-center justify mt-10
          -center container w-full"
        >
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-start justify-start text-start gap-0.5 text-pretty">
              <h6
                className="text-sm lg:text-lg font-semibold
              text-foreground uppercase "
              >
                Welcome To
              </h6>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  Shri Shyam Shri Dada Mote Ji Mandir
                </h1>
                <h2>
                  Expereience the divine presence of Lord Krishna and seek his
                  blessings.
                </h2>
              </div>
            </div>
            <div className="flex mt-6 flex-col items-start justify-start text-start gap-0.5 text-pretty">
              <p className="text-sm lg:text-base font-semibold">
                Shri Shyam Shri Dada Mote Ji Mandir is a Hindu temple dedicated
                to Lord Krishna and is located in Bharthal Village, Dwarka
                Sector 26, New Delhi. The temple is a divine place where you can
                seek blessings of Lord Krishna and others.{" "}
                <Readmore className="">read more</Readmore>
              </p>
            </div>
          </section>
        </div>
      </section>
        </section>
      </div>
    </>
  )
}
