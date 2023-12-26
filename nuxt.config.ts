// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/BeomLog/",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-gtag",
    [
      "@nuxtjs/google-adsense",
      {
        id: "",
      },
    ],
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
    },
  },

  gtag: {
    id: "G-44YWDK9DBE",
  },

  sourcemap: false,
});
