// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://www.transinacademia.org/' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'TiA!' },
        { name: 'author', content: 'Trans in Academia!' },
      ],
    },
  },
  fonts: {
    fontsource: {
      families: {
        Inter: [100, 300, 400, 500, 700],
      },
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nitro-cloudflare-dev',
    '@nuxthub/core',
  ],
  hub: {
    kv: true,
  },
  $development: {
    hub: {
      remote: true,
    },
  },
  i18n: {
    baseUrl: 'https://www.transinacademia.org',
    defaultLocale: 'zh',
    locales: [
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  eslint: {
    checker: true,
  },
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
});
