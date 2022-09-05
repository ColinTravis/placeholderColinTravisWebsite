const { theme } = require('./tailwind.config')

const meta = {
  title: 'Colin Travis',
  description: 'Colin Travis: Maker, Developer',
  url: 'https://colintravis.com',
  image: 'https://colintravis.com/ct_meta.jpg'
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: theme.extend.colors['ct-blue'] }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: theme.extend.colors['ct-blue'] },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */

  seo: {
    // Module options
    baseUrl: meta.url,
    title: meta.title,
    description: meta.description,
    image: meta.image,
    openGraph: {
      baseUrl: meta.url,
      title: meta.title,
      description: meta.description,
      image: meta.image
    }
  },
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-seo'],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
