'use client'

import { createContext, useContext, useState } from 'react'
import { Locale } from '@/i18n.config'

const LangContext = createContext({})

export const LangProvider = ({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) => {
  const [lang, setLang] = useState<Locale>(params.locale)

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => useContext(LangContext)