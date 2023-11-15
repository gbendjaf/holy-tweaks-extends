# Holy Tweaks Theme

A nuxt layer used by H.T web app.

## Setup

If you want to check our theme, make sure to install the dependencies:

```bash
pnpm install
```

__**On each project, your nuxt.config.ts must be configured to replace or supply missing information so that the modules used work.**__

```js
runtimeConfig: {
  public: {
    CURRENT_SUBDOMAIN: 'subdomain', // can be left empty if used on main domain
  },
  indexable: false, // be careful, set to false by default
},
```

```js
site: {
  url: 'https://subdomain.holytweaks.com',
  name: 'Holy Tweaks',
  description: `Welcome to hoply tweaks subdomain ! Here you can fullfill all your dreams.`,
  defaultLocale: 'en', // we are on fr in prod
  identity: {
    type: 'Organization'
  },
  twitter: '@HolyTweaks',
},
```

```js
i18n: {
  baseUrl: 'https://subdomain.holytweaks.com',
  langDir: './lang',
  locales: [{ code: 'en', file: 'en.json' }],
  // everything else is set out of the box
}
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

Checkout the [holy tweaks website](https://www.holytweaks.com/) to see final result.
