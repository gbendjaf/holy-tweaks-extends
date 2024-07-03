import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },

	runtimeConfig: {
		public: {
			MAIN_WEBSITE: process.env.NUXT_MAIN_WEBSITE ?? 'https://www.holytweaks.com',
      CURRENT_SUBDOMAIN: process.env.NUXT_CURRENT_SUBDOMAIN ?? 'subdomain',
      ERROR_REDIRECT: process.env.NUXT_ERROR_REDIRECT ?? '/',
      SOCIAL_LINKS: {
        DISCORD: 'https://discord.com/invite/Gmvwj6fEkz',
        TWITTER: 'https://twitter.com/HolyTweaks',
        YOUTUBE: 'https://www.youtube.com/@HolyTweaksSoftware',
        TIKTOK: 'https://www.tiktok.com/@holytweaks',
      }
		}
	},

  alias: {
    // Changing assets default folder through 'dir' doesn't work right now
    'assets': resolve('assets')
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],

  app: {
    head: {
      templateParams: {
        separator: '-'
      }
    }
  },

  site: {
    url: process.env.NUXT_SITE_URL ?? 'https://www.holytweaks.com',
    identity: {
      type: 'Organization'
    },
    twitter: '@HolyTweaks',
    indexable: process.env.NUXT_SITE_INDEXABLE ?? false,
  },

  i18n: {
    baseUrl: process.env.NUXT_SITE_URL ?? 'https://www.holytweaks.com',
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
            @use "assets/styling/settings/_variables.scss" as *;
            @use "assets/styling/settings/_mixins.scss" as *;
          `
        }
      }
    }
  },
  css: [
    'assets/styling/typography/fonts.css',
    'assets/styling/typography/base.scss',
    'assets/styling/settings/normalize.scss',
    'assets/styling/settings/global.scss',
  ]
})
