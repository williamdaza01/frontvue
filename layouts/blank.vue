<template>
  <v-app>
    <v-layout>
      <v-app-bar
        color="transparent"
        density="compact"
        floating
        elevation="0"
        class="blur opacity-50"
      >
        <v-app-bar-title>{{ $t("login") }}</v-app-bar-title>
        <template v-slot:append>
          <v-shared-theme />
        </template>
      </v-app-bar>
      <v-main class="pt-0">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
        ? `${titleChunk} - SIM`
        : "Iniciar Sesión - SIM";
  },
});
</script>