// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from './locales/en.json';
import arb from './locales/arb.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      arb: { translation: arb },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
