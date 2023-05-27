import {useAuthStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("siiiii")
  const user = useAuthStore();
  if (user.isNotAuthenticated) {
    return navigateTo({ name: 'auth-login' });
  }
});