<template>
  <v-app>
    <v-layout>
      <v-dashboard-sidebar />
      <v-dashboard-sidebar-mobile />
      <v-dashboard-top-bar />
      <v-main>
        <v-container fluid class="page-wrapper">
          <slot />
        </v-container>
        <v-footer app absolute>
          <p class="text-caption">
            {{ $t("title") }} - <v-input-moment format-value="YYYY" />
          </p>
        </v-footer>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
const title = ref("Dashboard - SIM");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - SIM`
        : "Dashboard - SIM";
  },
});
</script>
