<template>
  <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
  >
    <v-list>
      <v-list-item>
        <template #prepend>
          <v-dashboard-logo-mini class="mb-1" />
        </template>
        <template #title>
          <v-dashboard-logo height="24" />
        </template>
      </v-list-item>
    </v-list>
    <perfect-scrollbar class="scrollnavbar">
      <v-list class="pa-1" density="compact" :items="items"/>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script setup>
import items from "@/data/navigation"
import { storeToRefs } from 'pinia'
import { useAppStore } from "~/stores/app";
const store = useAppStore()
const { mobileDrawer } = storeToRefs(store)
</script>

<style lang="scss">
  .logo {
    padding-left: 7px;
  }
</style>