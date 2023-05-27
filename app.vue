<template>
  <nuxt-layout>
    <nuxt-page />
    <nuxt-snackbar />
  </nuxt-layout>
</template>

<script setup>
import { useAppStore } from "~/stores/app";
import { useTheme } from 'vuetify'
import {storeToRefs} from "pinia";
import {useI18n} from "vue-i18n";
import {setLocale} from "@vee-validate/i18n";

const { locale } = useI18n({ useScope: 'global' })
const vuetifyTheme = useTheme()
const store = useAppStore()
const { getTheme, getLang } = storeToRefs(store)
onMounted(() => {
  setLocale(getLang.value)
  vuetifyTheme.global.name.value = getTheme.value
  locale.value = getLang.value
})
</script>
