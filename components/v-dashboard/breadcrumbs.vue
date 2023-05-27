<template>
  <v-card class="transparent elevation-0 rounded-md mb-8">
    <div class="px-8 py-8 py-lg-0">
      <div class="d-flex justify-space-between">
        <div class="d-flex py-0 align-center">
          <div>
            <h3 class="text-h3 mb-2">{{ title }}</h3>
            <v-breadcrumbs
              :items="items"
              class="text-h6 font-weight-medium pa-0 ml-n1"
            >
              <template #divider>
                <v-icon size="10" icon="$dot"/>
              </template>
            </v-breadcrumbs>
          </div>
        </div>
        <div class="d-none py-0 d-lg-block overflow-hidden">
          <v-animation-sport />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {Breadcrumb} from "~/types/dashboard";
const props = withDefaults(defineProps<Breadcrumb>(), {
  items: () => ([])
})
</script>
