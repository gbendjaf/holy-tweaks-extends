// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			MAIN_WEBSITE: 'https://www.holytweaks.com',
      CURRENT_SUBDOMAIN: process.env.NUXT_CURRENT_SUBDOMAIN ?? 'subdomain',
      ERROR_REDIRECT: process.env.NUXT_ERROR_REDIRECT ?? '/',
      SOCIAL_LINKS: {
        DISCORD: process.env.NUXT_DISCORD_LINK ?? 'https://discord.com/invite/Gmvwj6fEkz',
        TWITTER: process.env.NUXT_TWITTER_LINK ?? 'https://twitter.com/HolyTweaks',
        YOUTUBE: process.env.NUXT_YOUTUBE_LINK ?? 'https://www.youtube.com/@HolyTweaksSoftware',
        TIKTOK: process.env.NUXT_TIKTOK_LINK ?? 'https://www.tiktok.com/@holytweaks',
      }
		}
	},
  devtools: { enabled: true },
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
    name: process.env.NUXT_SITE_NAME ?? 'domain',
    description: process.env.NUXT_SITE_DESCRIPTION ?? 'A default site description',
    defaultLocale: process.env.NUXT_SITE_DEFAULT_LOCALE ?? 'fr',
    identity: {
      type: process.env.NUXT_SITE_IDENTITY ?? 'Organization'
    },
    twitter: process.env.NUXT_SITE_TWITTER_TAG ?? '@HolyTweaks',
    indexable: process.env.NUXT_SITE_INDEXABLE ?? true,
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
