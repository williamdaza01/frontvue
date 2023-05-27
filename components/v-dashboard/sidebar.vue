<template>
  <v-navigation-drawer
    app
    :rail="drawer"
    expand-on-hover
    rail-width="65"
    class="leftSidebar position-fixed"
  >
    <v-list :class="listDensity">
      <v-list-item>
        <template #prepend>
          <v-dashboard-logo-mini class="mb-1" />
        </template>
        <template #title>
          <v-dashboard-logo class="ml-5" height="24" />
        </template>
      </v-list-item>
    </v-list>
    <perfect-scrollbar class="scrollnavbar">
      <v-list :class="listDensity" :items="items" @click="handleItemClick" />
    </perfect-scrollbar>
  </v-navigation-drawer>

  <v-list :class="listDensity" :items="items">
    <v-list-item v-for="item in items" :key="item.title" @click="handleItemClick(item)">
      <!-- Render list item content here -->
    </v-list-item>
  </v-list>

  <v-dialog v-model="modalOpen" max-width="500px">
    <template v-slot:activator="{ on }"></template>
    <v-card>
      <v-card-title>{{ modalTitle }}</v-card-title>
      <v-card-text>
        <template v-if="modalImage">
          <img :src="modalImage" alt="Modal Image" style="max-width: 100%;" />
        </template>
        <template v-else>
          <p>{{ modalText }}</p>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="modalOpen = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAppStore } from '~/stores/app';
import { openModal } from '../v-modal/modal.vue';

const store = useAppStore();
const drawer = ref(false);
const items = [];

const listDensity = computed(() => {
  return drawer.value ? 'pa-2' : 'pa-5';
});

const handleItemClick = (item) => {
  if (item.modalType === 'image') {
    openModal('image', item.modalContent.image);
  } else if (item.modalType === 'text') {
    openModal('text', item.modalContent);
  }
};
</script>

<style lang="scss">
.logo {
  padding-left: 7px;
}
</style>
