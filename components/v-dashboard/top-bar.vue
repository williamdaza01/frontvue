<template>
  <v-app-bar class="position-fixed" density="compact" elevation="10">
    <v-app-bar-nav-icon
        @click="toggleDrawer"
        class="hidden-sm-and-down ms-md-3 ms-sm-5 ms-3 text-muted"
    >
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon
        class="hidden-md-and-up ms-md-3 ms-sm-5 ms-3 text-muted"
        @click="toggleMobileDrawer"
    />
    <v-btn icon="$search" />
    <v-app-bar-title
      v-text="$t('hello', { name: 'Daniel' })"
    />
    <template #append>
      <v-shared-lang />
      <v-shared-theme />
      <v-shared-logout />
    </template>
  </v-app-bar>
</template>

<script setup>
import { useAppStore } from "~/stores/app";
const props = defineProps({
  width: {
    type: [String, Number],
    default: "174"
  },
  height: {
    type: [String, Number],
    default: "26"
  },
})
const store = useAppStore()
const toggleDrawer = () => store.toggleDrawer()
const toggleMobileDrawer = () => store.toggleMobileDrawer()
</script>
