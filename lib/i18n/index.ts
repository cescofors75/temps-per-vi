import { ca } from './ca'
import { es } from './es'
import { fr } from './fr'
import { en } from './en'

export type Language = 'ca' | 'es' | 'fr' | 'en'

export const translations = {
  ca,
  es,
  fr,
  en
}

export const getTranslations = (lang: Language) => translations[lang]

export const defaultLanguage: Language = 'ca'

// Hook para usar las traducciones
export const useTranslations = (lang: Language) => {
  return getTranslations(lang)
}

