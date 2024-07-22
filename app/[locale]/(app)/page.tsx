import { Suspense } from "react"
import { Locale } from "@/i18n.config"

import { getDictionary } from "@/lib/dictionary"
import ImageSlider from "@/components/hero-image"

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
      </div>
    </>
  )
}
