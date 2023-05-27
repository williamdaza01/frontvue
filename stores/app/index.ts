import {defineStore} from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'light',
        drawer: false,
        mobileDrawer: false,
        lang: 'es',
    }),
    getters: {
        getLang: (state) => state.lang,
        getTheme: (state) => state.theme,
        getDrawer: (state) => state.drawer,
        getMobileDrawer: (state) => state.mobileDrawer,
    },
    actions: {
        toggleTheme(value: string) {
            this.theme = value
        },
        toggleDrawer() {
            this.drawer = !this.drawer
        },
        toggleMobileDrawer() {
            this.mobileDrawer = !this.mobileDrawer
        },
        setLang(value: string) {
            this.lang = ["en", "es", "pt"].includes(value) ? value : "es"
        }
    },
})