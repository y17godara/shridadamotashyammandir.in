export const getFlagIcon = (locale: Locale): string => {
  switch (locale) {
    case 'en-IN':
      return '🌐'
    case 'hi-IN':
      return '🌐'
    default:
      return '🌐'
  }
}

export const i18n = {
  defaultLocale: 'en-IN',
  locales: ['en-IN', 'hi-IN']
} as const

export type Locale = (typeof i18n)['locales'][number]