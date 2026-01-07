import vuetify from "vite-plugin-vuetify"

export default defineNuxtConfig({
  compatibilityDate: "2026-01-06",
  modules: ["@pinia/nuxt"],
  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    define: {
      "process.env.DEBUG": false,
    },
  },
})
