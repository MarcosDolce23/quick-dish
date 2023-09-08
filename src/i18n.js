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
                    },
                    home: {
                        headerHome: 'What I cook',
                        subHeaderhome: 'Prepare your recipes with what you have on hand',
                        headerFilter: 'Time of preparation',
                        subHeaderFilter: 'Recipes ordered by the time of preparation',
                        vegansTitle: 'Vegans',
                        vegansSubTitle: 'Recetas elaboradas sin productos de origen animal',
                        lessThan: 'Less than',
                        moreThan: 'More than',
                        between: 'between',
                        and: 'and'
                    },
                    searchBar: {
                        placeholder: 'Search your recipes'
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
                    },
                    home: {
                        headerHome: 'Qué cocino',
                        subHeaderhome: 'Elabora tus recetas con lo que tengas a mano',
                        headerFilter: 'Tiempo de elaboración',
                        subHeaderFilter: 'Recetas ordenadas por el tiempo de su elaboración',
                        vegansTitle: 'Veganas',
                        vegansSubTitle: 'Recetas elaboradas sin productos de origen animal',
                        lessThan: 'Menos de',
                        moreThan: 'Más de',
                        between: 'Entre',
                        and: 'y'
                    },
                    searchBar: {
                        placeholder: 'Busca tus recetas'
                    }
                }
            }
        }
    });

export default i18n;