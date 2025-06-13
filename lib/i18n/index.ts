import { ca } from './ca'
import { es } from './es'

export type Language = 'ca' | 'es'

export const translations = {
  ca,
  es
}

export const getTranslations = (lang: Language) => translations[lang]

export const defaultLanguage: Language = 'ca'

// Hook para usar las traducciones
export const useTranslations = (lang: Language) => {
  return getTranslations(lang)
}

