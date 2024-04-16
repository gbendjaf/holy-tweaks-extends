<script setup lang="ts">

interface Props {
  pagesDirectory?: Array<{
    title: string,
    pages: Array<{ link: string, name: string }>
  }>
}

const props = withDefaults(defineProps<Props>(), {
  pagesDirectory: () => [
  {
      title: 'Application',
      pages: [
        {
          name: 'Features',
          link: '/features'
        },
        {
          name: 'Privacy',
          link: '/privacy'
        },
        {
          name: 'Games',
          link: '/games'
        },
        {
          name: 'Advanced',
          link: '/advanced'
        }
      ]
    },
    {
      title: 'Resources',
      pages: [
        {
          name: 'Download',
          link: '/download/latest'
        },
        {
          name: 'Contact',
          link: '/contact'
        },
        {
          name: 'Privacy Policy',
          link: '/privacy-policy'
        },
        {
          name: 'Terms of service',
          link: '/terms-of-service'
        }
      ]
    },
    {
      title: 'Tools',
      pages: [
        {
          name: 'About us',
          link: '/about-us'
        },
        {
          name: 'Blog',
          link: '/blog'
        },
      ]
    }
  ]
})

const runtimeConfig = useRuntimeConfig()

const socialLinks: Array<{ component: any, link: string, alt: string }> = [
  {
    component: resolveComponent('IconDiscord'),
    link: (runtimeConfig.public.SOCIAL_LINKS as Record<string, string>).DISCORD,
    alt: 'Our Discord server'
  },
  {
    component: resolveComponent('IconTwitter'),
    link: (runtimeConfig.public.SOCIAL_LINKS as Record<string, string>).TWITTER,
    alt: 'Our Twitter'
  },
  {
    component: resolveComponent('IconYouTube'),
    link: (runtimeConfig.public.SOCIAL_LINKS as Record<string, string>).YOUTUBE,
    alt: 'Our YouTube channel'
  },
  {
    component: resolveComponent('IconTikTok'),
    link: (runtimeConfig.public.SOCIAL_LINKS as Record<string, string>).TIKTOK,
    alt: 'Our TikTok'
  }
]
</script>

<template>
  <footer>
    <div class="ht-l-footer-container">
      <div class="ht-c-footer-brand">
        <NuxtLink
          class="ht-c-footer-brand__link"
          :to="(runtimeConfig.public.MAIN_WEBSITE as string)"
        >
          <IconBrand />
          <p>Holy Tweaks Software</p>
        </NuxtLink>
        <div class="ht-c-footer-brand__socials">
          <NuxtLink
            v-for="social in socialLinks"
            :key="social.link"
            :to="social.link"
            target="__blank"
          >
            <component
              :is="social.component"
              :alt="social.alt"
              role="img"
            />
          </NuxtLink>
        </div>
      </div>
      <div
        class="ht-c-footer__pages-directory"
        v-for="directory in pagesDirectory"
        :key="directory.title"
      >
        <span>{{ directory.title }}</span>
        <ul>
          <li
            v-for="page in directory.pages"
            :key="page.link"
          >
            <NuxtLink
              :to="page.link"
            >
              {{ page.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.ht-l-footer-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1250px;
  margin: 0 auto;
}
.ht-c-footer-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  svg {
    width: 18px;
    height: 18px;
  }
  @media only screen and (min-width: 1064px) {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    margin-right: auto;
  }
}
.ht-c-footer-brand__link {
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    color: $text-body;
    width: 32px;
  }
  p {
    color: $text-caption;
  }
  &:hover p {
    color: $text-body;
  }
}
.ht-c-footer-brand__socials {
  display: flex;
  align-items: center;
  gap: 16px;
  a {
    display: flex;
    color: $text-caption;
    position: relative;
  }
  a:before {
    inset: -8px;
    position: absolute;
    content: "";
  }
  a:hover svg {
    color: $text-body;
  }
}
.ht-c-footer__pages-directory {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
  min-width: 50%;
  flex: 1 1 0%;
  span {
    @include body-bold;
    color: $text-body;
  }
  a {
    @include body-regular;
    color: $grey-80;
  }
  a:hover {
    color: $text-body;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
    border-left: 1px solid $grey-60;
  }
  @media only screen and (min-width: 1064px) {
    margin: 0;
    min-width: min(180px, 100%);
    flex: none;
  }
}
footer {
  padding: 50px 20px;
  background-color: $bg-page;
  border-top: 1px solid $grey-40;
}
</style>