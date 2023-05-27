export default defineNuxtPlugin(({vueApp}) => {
  vueApp.directive("number-only", {
    mounted(el) {
      el.addEventListener("keypress", (event: KeyboardEvent) => {
        // @ts-ignore
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        if (event.charCode >= 48 && event.charCode <= 57) {
          return true;
        }
        event.preventDefault();
      });
    },
  })
})
