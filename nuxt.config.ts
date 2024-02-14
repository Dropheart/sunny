// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  runtimeConfig: {

  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'blue-bg': '#001a23',
            'blue-green': '#2D4750',
            'blue-input': '#0D2A34',
            'grey-text': '#7b8d93'
          },
          fontFamily: {
            inter: 'Inter'
          }
        }
      }
    }
  },
  googleFonts: {
    families: {
      Inter: true
    }
  }
})
