<template>
  <v-tooltip location="bottom">
    <template #activator="{ props }">
      <v-btn
          class="ms-md-3 ms-sm-5 ms-3 text-muted"
          @click="toggleTheme"
          :icon="icon"
          v-bind="props"
      />
    </template>
    <span v-text="$t('theme')" />
  </v-tooltip>
</template>

<script setup>
import {useTheme} from "vuetify";
import { useAppStore } from "~/stores/app";
const store = useAppStore()
const theme = useTheme()
const icon = computed(() => {
  return `$${theme.global.name.value}`
})
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  store.toggleTheme(theme.global.name.value)
}
</script>

<style scoped>

</style>