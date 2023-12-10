import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': path.resolve(__dirname, '/'),
  },
  modules: [
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    './modules/auto-import-eslint.ts',
  ],
  devtools: { enabled: true },
});
