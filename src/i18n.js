import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import se from './locales/se'

const resources = {
  Svenska: se,
  English: en,
}

let fallbackLng = undefined
if (navigator.language.includes('sv')) {
  fallbackLng = 'Svenska'
} else {
  fallbackLng = 'English'
}

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
}

i18n
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    fallbackLng: fallbackLng,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
