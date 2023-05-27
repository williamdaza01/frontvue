<template>
  <v-form-dynamic
    :schema="model.schema"
    hide-reset-button
    button-submit-text="login"
    :button-submit-props="{ block: true }"
    @on-submit="onSubmit"
  />
</template>

<script setup lang="ts">
import { LoginForm } from "~/types/forms/forms";
import { Auth } from "~/models/Auth";
import { useAuthStore } from "~/stores/user";
import { get } from "lodash";
const model = new Auth();
const user = useAuthStore();
const snack = useSnackbar();
const onSubmit = async (values: LoginForm, isSubmitting: any, form: any) => {

  const { data, error, pending } = await model.setData(values).login();

  isSubmitting.value = pending.value;
  const rawValue = get(data, "_rawValue", null); 
  const parsedValue = JSON.parse(rawValue); 
  const loginValue = get(parsedValue, "sys.login", null); 

  if (loginValue !== null) {
    const token = loginValue; 
    if (token) {
      user.setToken(token);
      navigateTo({
        name: "index",
      });
    }
  }
  const errorMessage = get(error, "value.data.message", null);
  const fieldErrors = get(error, "value.data.errors", null);
  if (fieldErrors) {
    form.setErrors(fieldErrors);
  }
  if (errorMessage) {
    snack.add({
      type: "error",
      title: "Error",
      text: errorMessage,
      dismissible: true,
    });
  }
};
</script>
