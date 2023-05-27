<template>
  <div ref="authentication" class="authentication">
    <v-container fluid class="pa-3">
      <v-row class="h-100vh w-100vw justify-center">
        <v-col cols="12" lg="6" xl="4" class="d-flex align-center">
          <v-card rounded="md" elevation="10" class="px-sm-1 px-0 mx-auto" max-width="900">
            <v-card-item class="pa-sm-8">
              <v-row dense>
                <v-col cols="12" class="hidden-sm-and-down justify-center align-content-center" md="6">
                  <client-only>
                    <v-lottie :animation-data="office" />
                  </client-only>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="d-flex justify-center py-4">
                    <v-dashboard-logo-mini width="150px" height="150px" />
                  </div>
                  <div class="text-body-1 text-muted text-center mb-3">{{ t('title') }}</div>
                  <v-form-auth-login />
                  <h6 class="text-caption text-muted font-weight-medium d-flex justify-center align-center mt-3">
                    {{ t('pages.auth.forgot_password') }}
                    <NuxtLink
                        :to="{ name: 'index' }"
                        class="text-primary text-decoration-none text-caption opacity-1 font-weight-medium pl-2"
                    >
                      {{ t('pages.auth.remember_password') }}
                    </NuxtLink>
                  </h6>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import GLOBE from "@/components/v-animation/Globe"
import office from "@/assets/lottie/office.json"
import { useI18n } from 'vue-i18n'
import {useTheme} from "vuetify";
const theme = useTheme()
const {t} = useI18n()
const authentication = ref('authentication');
const title = computed(() => t('login'))
const vanta = ref()

const bg = computed(() => {
  return theme.global.current.value.dark ? 0x171c23 : 0xEEEEEE
})
const color2 = computed(() => {
  return theme.global.current.value.dark ? 0xF2ECF9 : 0x704691
})

watch(bg, (color) => {
  if (vanta.value) {
    vanta.value.options.backgroundColor = color
  }
})
watch(color2, (color) => {
  if (vanta.value) {
    vanta.value.options.color2 = color
  }
})

onMounted(() => {
  vanta.value = GLOBE({
    el: authentication.value,
    backgroundColor: 0xEEEEEE,
    color: 0x594d95,
    color2: 0x704691
  })
})
onUnmounted(() => {
  if (vanta.value) {
    vanta.value.destroy()
  }
})
useHead({
  meta: [{content: title}],
  title,
  bodyAttrs: {
    class: 'overflow-hidden'
  }
});
definePageMeta({
  layout: "blank",
  middleware: ['guest']
});
</script>
