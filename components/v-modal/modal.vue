<template>
  <v-list :class="listDensity" :items="items">
    <v-list-item @click="handleItemClick(item)">
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

<script>
import { ref } from 'vue';

export const openModal = (type, content) => {
  if (type === 'image') {
    modalImage.value = content;
    modalTitle.value = '';
    modalText.value = '';
  } else if (type === 'text') {
    modalImage.value = '';
    modalTitle.value = content.title;
    modalText.value = content.text;
  }
  modalOpen.value = true;
};

export default {
  setup() {
    const modalOpen = ref(false);
    const modalImage = ref('');
    const modalTitle = ref('');
    const modalText = ref('');

    return {
      modalOpen,
      modalImage,
      modalTitle,
      modalText
    };
  },

  methods: {
    handleItemClick(item) {
      if (item.modalType === 'image') {
        openModal('image', item.modalContent.image);
      } else if (item.modalType === 'text') {
        openModal('text', item.modalContent);
      }
    }
  }
};
</script>
