<template>
  <v-menu>
    <template #activator="{ props: menu }">
      <v-tooltip location="bottom">
        <template #activator="{ props: tooltip }">
          <v-btn
              class="ms-md-3 ms-sm-5 ms-3 text-muted"
              icon="$language"
              v-bind="mergeProps(menu, tooltip)"
          />
        </template>
        <span v-text="$t('languages')" />
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="setLang(item.title)"
      >
        <template #prepend>
          <v-icon size="24" :icon="item.icon" />
        </template>
        <v-list-item-title
            class="text-uppercase"
            v-text="item.title"
        />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { mergeProps } from 'vue'
import co from  "~/assets/img/flags/co.svg?component"
import us from  "~/assets/img/flags/us.svg?component"
import br from  "~/assets/img/flags/br.svg?component"
import { useAppStore } from "~/stores/app";
import {useI18n} from "vue-i18n";
const { locale } = useI18n({ useScope: 'global' })
const store = useAppStore()
const items = [
  {
    icon: co,
    title: "es"
  },
  {
    icon: us,
    title: "en"
  },
  {
    icon: br,
    title: "pt"
  }
]
const setLang = (lang) => {
  locale.value = lang;
  store.setLang(lang)
}
</script>
