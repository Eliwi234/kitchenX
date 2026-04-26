import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';

const resources = {
  en,
  ar
};

const hasStorage = typeof window !== "undefined" && typeof window.localStorage !== "undefined";
const storedData = hasStorage ? window.localStorage.getItem('kitchenx-ui-storage') : null;
let defaultLng = 'en';
if (storedData) {
  try {
    const parsed = JSON.parse(storedData);
    if (parsed?.state?.language) {
      defaultLng = parsed.state.language;
    }
  } catch {
    defaultLng = "en";
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
