import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import th from './locales/th'

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    resources: { en, th },

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
