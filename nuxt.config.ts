import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  target: 'static',
  ssr: false,
  typescript: {
    strict: true,
    shim: false,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
