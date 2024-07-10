import "server-only"
import { i18n, type Locale } from "@/i18n.config"

const dictionaries = {
  "en-IN": () =>
    import("@/public/locale/en-IN.json").then((module) => module.default),
  "hi-IN": () =>
    import("@/public/locale/hi-IN.json").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
