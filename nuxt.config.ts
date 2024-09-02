// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
  }, //
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
  ],
  content: {
    highlight: {
      theme: "github-light",
    },
    documentDriven: true,
    experimental: {
      clientDB: true,
      stripQueryParameters: false,
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
      ignore: ["/posts/*"],
      failOnError: false,
    },
  },

  gtag: {
    id: "G-44YWDK9DBE",
  },

  sourcemap: false,
});
