export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vuetube",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Youtube For Vue" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: "static",
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "VueTube",
      short_name: "VueTube",
      description: "YouTube For Vue.",
      theme_color: "#d9aeba",
      lang: "en",
      background_color: "#d9aeba"
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      name: "VueTube",
      description: "YouTube For Vue.",
      author: "Karma Fullstack IT",
      theme_color: "#d9aeba",
      nativeUi: true,
      appleStatusBarStyle: "black",
      mobileAppIOS: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
