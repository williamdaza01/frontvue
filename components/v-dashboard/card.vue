<template>
  <v-card v-bind="props" elevation="10">
    <span class="lstick"></span>
    <slot />
  </v-card>
</template>

<script setup lang="ts">
import {DashboardCard} from "~/types/dashboard";
const props = defineProps<DashboardCard>()
</script>
