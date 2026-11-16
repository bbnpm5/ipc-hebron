import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en/translations.json'
import knTranslations from './locales/kn/translations.json'
import mlTranslations from './locales/ml/translations.json'

// First launch is English-only. To bring back Kannada and Malayalam,
// set this to true: it shows the language switcher again and
// re-enables detecting the visitor's language.
export const SHOW_LANGUAGE_SWITCHER = false

if (SHOW_LANGUAGE_SWITCHER) {
  i18n.use(LanguageDetector)
}

i18n
  .use(initReactI18next)
  .init({
    // Force English while the switcher is hidden, so visitors with a
    // Kannada/Malayalam browser (or an old saved choice) still get English.
    ...(SHOW_LANGUAGE_SWITCHER ? {} : { lng: 'en' }),
    resources: {
      en: {
        translation: enTranslations
      },
      kn: {
        translation: knTranslations
      },
      ml: {
        translation: mlTranslations
      }
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n
