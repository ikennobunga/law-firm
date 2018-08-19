
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'practice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Candal|Varela+Round|Montserrat:300,400,500,700|Rock+Salt|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }
    ]
  },
  plugins: [
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/ksvuescrollmagic', ssr: false } 
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css',
    'aos/dist/aos.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#B09762' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [ '~/plugins/vuetify.js', '~/plugins/aos.js', '~/plugins/ksvuescrollmagic'  ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          // test: /\.(js|vue)$/,
         // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
