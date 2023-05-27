import {i18n} from "@/plugins/i18n"
import { defineRule } from "vee-validate";
import AllRules from '@vee-validate/rules';
import {alphaDotsValidator} from "@/utils/rules"
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import es from '@vee-validate/i18n/dist/locale/es.json';
import pt from '@vee-validate/i18n/dist/locale/pt_BR.json';
import enFields from '@/locales/en.json';
import esFields from '@/locales/es.json';
import ptFields from '@/locales/pt.json';

export default defineNuxtPlugin((nuxt) => {
  const locale = i18n.global.locale.value || "es";
  configure({
    generateMessage: localize({
      en: {
        names: {
          ...enFields.inputs
        },
        messages: {
          ...en.messages,
          alpha_dots: "The {field} field may contain alpha-numeric characters as well as dashes and dots",
        }
      },
      es: {
        names: {
          ...esFields.inputs
        },
        messages: {
          ...es.messages,
          alpha_dots: "El campo {field} solo debe contener letras, números y puntos",
        }
      },
      pt: {
        names: {
          ...ptFields.inputs
        },
        messages: {
          ...pt.messages,
          alpha_dots: "O campo {field} deve conter letras, números e pontos",
        }
      },
    }),
  });
  Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
  });
  defineRule('alpha_dots', (value: string|string[]) => alphaDotsValidator(value,  locale))
})