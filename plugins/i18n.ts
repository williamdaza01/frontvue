// @ts-ignore
import { createI18n } from 'vue-i18n'
import es from "@/locales/es.json";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
// @ts-ignore
import esV from "vuetify/lib/locale/es.mjs"
// @ts-ignore
import enV from "vuetify/lib/locale/en.mjs"
// @ts-ignore
import ptV from "vuetify/lib/locale/pt.mjs"
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'es',
    fallbackLocale: "es",
    messages: {
        es: {
            ...es,
            '$vuetify': {
                ...esV,
                input: {
                    clear: 'Limpiar {0}',
                    prependAction: '{0} prepended action',
                    appendAction: '{0} appended action'
                }
            },
        },
        en: {
            ...en,
            '$vuetify': enV,
        },
        pt: {
            ...pt,
            '$vuetify': ptV,
        }
    }
})

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.use(i18n)
})