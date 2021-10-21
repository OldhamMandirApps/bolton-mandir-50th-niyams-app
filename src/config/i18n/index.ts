import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { supportedNiyams } from '../niyams';

import { janmangalNamavaliStotramEn, oradaNaPadsEn } from './en';
import { janmangalNamavaliStotramGu } from './gu';

export const resources = {
  en: {
    'orada-na-pads': oradaNaPadsEn,
    'janmangal-namavali-stotram': janmangalNamavaliStotramEn,
  },
  gu: {
    'janmangal-namavali-stotram': janmangalNamavaliStotramGu,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'gu'],
  ns: supportedNiyams,
  resources,
  returnObjects: true,
  react: {
    useSuspense: false,
  },
});
