// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [
    { src: './plugins/vercel-analytics.client.ts' },
  ],
  devtools: { enabled: false }
})
