// Vuetify.js
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
// @ts-ignore
import { useI18n } from 'vue-i18n'
import { aliases, tabler } from '@/theme/tabler'
import { themeLigthColors, themeDarkColors } from "@/theme/colors"
import {i18n} from "@/plugins/i18n"
import { VTextField } from 'vuetify/components/VTextField'
import * as Components from 'vuetify/components'
import VInputNumber from "~/components/v-input/Number.vue";
import VInputPassword from "~/components/v-input/Password.vue";
import "@/assets/scss/settings.scss";

export default defineNuxtPlugin(({vueApp}) => {
  let themes = {}
  themeLigthColors.map((l) => {
    // @ts-ignore
    themes[l.name] = l
  })
  themeDarkColors.map((d) => {
    // @ts-ignore
    themes[d.name] = d
  })
  // @ts-ignore
  const vuetify = createVuetify({
    ssr: false,
    aliases: {
      VEmailField: VTextField,
      VInputNumber,
      VInputPassword,
      ...Components
    },
    defaults: {
      VEmailField: {
        type: "email",
        color: 'primary',
        variant: 'underlined',
        clearable: true,
        counter: true,
        prependInnerIcon: "$email",
        imputmode: "email"
      },
      VTextField: {
        color: 'primary',
        variant: 'underlined',
        clearable: true,
        counter: true,
        inputmode: "text",
        prependInnerIcon: "$dots",
      },
      VTextarea: {
        color: 'primary',
        variant: 'underlined',
        clearable: true,
        counter: true,
      },
      VBtn: {
        color: 'primary',
      }
    },
    icons: {
      defaultSet: 'tabler',
      aliases,
      sets: {
        tabler,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        // @ts-ignore
        light: themes['IDRD_THEME'],
        // @ts-ignore
        dark: themes['DARK_IDRD_THEME'],
        ...themes
      }
    },
    locale: {
      locale: "es",
      fallback: "es",
      adapter: createVueI18nAdapter({ i18n, useI18n })
    }
  })
  vueApp.use(vuetify)
})