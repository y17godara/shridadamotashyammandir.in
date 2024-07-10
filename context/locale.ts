"use client";

import { atom, useAtom } from 'jotai'
import { Locale } from '@/i18n.config'

// Create an atom for the language state
const langAtom = atom<Locale>('en-IN')

const useLangContext = () => {
    const [lang, setLang] = useAtom(langAtom)
    return { lang, setLang }
}

export default langAtom;
export { useLangContext };