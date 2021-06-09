export default {
  target: 'static',
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hot News || Get all your latest headlines from across the globe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {httpEquiv: 'x-ua-compatible', content: 'ie=edge'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a simple Nuxt.js/Vue.js web application created by Prince Owusu. This application, integrated with the News API helps you to locate articles, blogs, and latest news headlines from news sources accross the web.' },
      {property: 'og:title', content: 'Hot News'},
      {property: 'og:author', content: 'Prince Owusu'},
      {property: 'og:description', content: 'Prince Owusu is a frontend web developer and an aspiring software engineer based in Ghana.'},
      {name: 'twitter:creator', content: '@iam_kwekhu'},
      {name: 'twitter:title', content: 'Prince'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/hotNews.png' },
      {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Material+Icons" }
    ]
  },
  loading: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css',
    '~/assets/styles/nav.css',
    '~/assets/styles/category.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/newsApi.js',
    '~/plugins/mediaStack.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
