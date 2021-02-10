export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Portfolio of Aderinsola Akintilo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      {
        hid: "ogsitename",
        property: "og:site_name",
        content:
          "Aderinsola Akintilo is a Product Designer & Product Manager based in Lagos, Nigeria. He designs and manages software solutions in the healthcare and transportation sectors.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://aderinsola.co/" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/main.css",
    "~/assets/css/media-queries.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },
};
