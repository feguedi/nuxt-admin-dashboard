import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  css: ['~/assets/styles/main.css'],
  alias: {
    '@': path.resolve(__dirname, '/'),
  },
  modules: [
    '@unocss/nuxt',
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    './modules/auto-import-eslint.ts',
  ],
  devtools: { enabled: true },
});
