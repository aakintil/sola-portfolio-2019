export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Aderinsola Akintilo | Product Manager | Product Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Aderinsola Akintilo helps companies design and architect software solutions in the healthcare and transportation sectors. ',
      },
      {
        hid: 'ogsitename',
        property: 'og:site_name',
        content: 'Aderinsola Akintilo | Product Manager | Product Designer',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/x-icon',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'canonical', href: 'https://www.aderinsola.co/' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'bootstrap/dist/css/bootstrap.css',
    // 'bootstrap-vue/dist/bootstrap-vue.css',
    // '~/assets/css/main.scss',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
