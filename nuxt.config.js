const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Portfolio'
  }
} : {}

module.exports = {
  ...routerBase,
  router: {
    middleware: 'routing',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/jochengerz.vue'),
        alias: '/jochengerz'
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'porfolio-2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'portfolio inspired by the work of M.Mondrian, made with nuxt and babylon js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  plugins: [
    {
      src: '~/plugins/pixi',
      ssr: false
    }
  ],
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
