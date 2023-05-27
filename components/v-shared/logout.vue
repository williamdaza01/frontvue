<script setup lang="ts">
import {Auth} from "~/models/Auth";
import {useAuthStore} from "~/stores/user";

const user = useAuthStore()
const model = new Auth();
const loading = ref(false)
const snack = useSnackbar()
const onLogout = async () => {
  const { data, error, pending } = await model.logout()
  loading.value = pending.value
  if (data.value) {
    snack.add({
      type: "success",
      text: data.value?.message || 'OK',
      dismissible: true,
    })
  }
  if (error.value?.data?.message) {
    snack.add({
      type: "error",
      title: "Error",
      text: error.value?.data?.message,
      dismissible: true,
    })
  }
  user.resetData();
  navigateTo({ name: 'auth-login' })
}
</script>

<template>
  <v-tooltip location="bottom">
    <template #activator="{ props }">
      <v-btn
        class="ms-md-3 ms-sm-5 ms-3 text-muted"
        @click="onLogout"
        icon="$logout"
        :loading="loading"
        :disabled="loading"
        v-bind="props"
      />
    </template>
    <span v-text="$t('logout')" />
  </v-tooltip>
</template>
