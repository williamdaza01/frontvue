// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  // @ts-ignore
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://sim.idrd.gov.co/base-ldap/public",
    },
  },
  build: { transpile: ["vuetify", "vanta"] },
  modules: [
    "@nuxtjs/google-fonts",
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
    },
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vee-validate/nuxt',
    'nuxt-snackbar'
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
    dense: true,
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 800, 900],
      },
    },
    download: false,
    useStylesheet: true,
  },
  typescript: { strict: true },
  nitro: {
    serveStatic: true,
  },
  vite: {
    ssr: { noExternal: ["vuetify", "vanta", "vue3-particles", "tsparticles", "vue-kinesis"] },
    plugins: [
      svgLoader(),
    ]
  }
})
