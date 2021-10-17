import i18n from 'i18next';
import oradaNaPadsEn from './en/oradaNaPads.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    'orada-na-pads': oradaNaPadsEn,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['orada-na-pads'],
  resources,
  returnObjects: true,
  react: {
    useSuspense: false,
  },
});
