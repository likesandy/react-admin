import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './module/en'
import zh from './module/zh'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      zh,
    },
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })

export default i18n
