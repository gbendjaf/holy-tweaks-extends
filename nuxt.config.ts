// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			MAIN_WEBSITE: 'https://www.holytweaks.com',
      CURRENT_SUBDOMAIN: 'subdomain',
		}
	},
  devtools: { enabled: true },
  modules: [
    '@nuxtseo/module',
    '@nuxtjs/i18n'
  ],
  i18n: {
    baseUrl: 'https://www.holytweaks.com',
    langDir: './lang',
    locales: [
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-FR',
        file: 'fr.json'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-GB',
        file: 'en.json'
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'fr',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
      alwaysRedirect: true,
    },
    compilation: {
      strictMessage: false, // can lead to XSS attack, we only use our own data so it's alright
      escapeHtml: false // have to stay false, otherwise defeat the purpose of v-html
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styling/settings/_variables.scss" as *;
            @use "@/assets/styling/settings/_mixins.scss" as *;
          `
        }
      }
    }
  },
  css: [
    '@/assets/styling/typography/fonts.css',
    '@/assets/styling/typography/base.scss',
    '@/assets/styling/settings/normalize.scss',
    '@/assets/styling/settings/global.scss',
  ]
})
