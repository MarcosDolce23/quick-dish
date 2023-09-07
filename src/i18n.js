import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    footer: {
                        home: 'Home',
                        fridge: 'Fridge',
                        search: 'Search',
                        favourites: 'Favourites'
                    },
                    dish: {
                        cookTime: 'Estimated processing time',
                        ingredients: 'Ingridients',
                        steps: 'Preparation per portion'
                    },
                    dishes: {
                        title: 'My Fridge'
                    },
                    fridge: {
                        title: 'Fridge'
                    }
                }
            },
            es: {
                translation: {
                    footer: {
                        home: 'Inicio',
                        fridge: 'Refrigerador',
                        search: "Explorar",
                        favourites: "Favoritos"
                    },
                    dish: {
                        cookTime: 'Tiempo estimado de elaboración',
                        ingredients: 'Ingredientes',
                        steps: 'Preparación 1 porción'
                    },
                    dishes: {
                        title: 'Mi Refrigerador'
                    },
                    fridge: {
                        title: 'Refrigerador'
                    }
                }
            }
        }
    });

export default i18n;