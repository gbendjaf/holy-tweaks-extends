// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			MAIN_WEBSITE: 'https://www.holytweaks.com',
      CURRENT_SUBDOMAIN: 'subdomain',
		}
	},
  devtools: { enabled: true },
  modules: ['@nuxtseo/module'],
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
