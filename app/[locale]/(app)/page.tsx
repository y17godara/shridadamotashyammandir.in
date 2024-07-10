import { Locale } from "@/i18n.config"

import { getDictionary } from "@/lib/dictionary"

export default async function Page({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale) // en
  return <button>{dict.products.cart}</button> // Add to Cart
}
