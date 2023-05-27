import {useAuthStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useAuthStore();
  if (user.isAuthenticated) {
    return navigateTo({ name: 'index' });
  }
});