<script setup lang="ts">
interface Props {
  navigation: Array<NavigationSimple | NavigationSubMenu>,
  ctaBtn: HeaderCtaBtn
}

const props = withDefaults(defineProps<Props>(), {
})

function useBurgerMenu () {
  const isMenuOpen = ref<boolean>(false)

  watch(
    () => route.path,
    () => {
      isMenuOpen.value = false
    }, { flush: 'post', deep: true}
  )

  return {
    isMenuOpen
  }
}

const route = useRoute()
const { isMenuOpen } = useBurgerMenu()
</script>

<template>
  <header class="ht-c-header">
    <nav class="ht-c-header__nav-container">
      <HeaderBrandLink/>
      <div class="ht-c-desktop-navigation">
        <div
          v-for="(el, index) in navigation"
          :key="`navigation-${index}`"
        >
          <NavigationSimple
            v-if="'routes' in el === false"
            :to="el.to"
            :name="el.name"
          />
          <NavigationSubMenu
            v-else
            :title="el.title"
            :routes="el.routes"
          />
        </div>
      </div>
      <div class="ht-c-header__actions">
        <NavigationPrimary
          :link="ctaBtn.link"
          :size="ctaBtn.size"
          :target="ctaBtn.target"
        >
          <p>{{ ctaBtn.caption }}</p>
        </NavigationPrimary>
        <HeaderBurger
          class="ht-c-burger"
          v-model="isMenuOpen"
        />
      </div>
      <ul
        class="ht-c-mobile-nav-menu"
        :class="{ '--is-open': isMenuOpen }"
      >
        <li
          v-for="(el, index) in navigation"
          :key="`navigation-mobile-${index}`"
        >
          <div
            v-if="'routes' in el"
            class="ht-l-nav-column"
          >
            <span>{{ el.title }}</span>
            <NuxtLink
              v-for="(path, i) in el.routes"
              :key="`nav-${index}-${i}`"
              :to="path.to"
            >
              {{ path.name }}
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              :to="el.to"
            >
              {{ el.name }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.ht-c-header {
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0;
  background-color: rgba($bg-page, 0.6);
  backdrop-filter: blur(10px);
  &__nav-container {
    padding: 0 18px;
    border-bottom: 1px solid $grey-40;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  @media only screen and (min-width: 768px) {
    &__nav-container {
      padding: 0 32px;
    }
  }
  @media only screen and (min-width: 1024px) {
    border-bottom: 1px solid $grey-40;
    &__nav-container {
      max-width: 1364px;
      border: none;
    }
  }
}
.ht-c-desktop-navigation {
  display: none;
  @media only screen and (min-width: 1064px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
}
.ht-c-burger,
.ht-c-mobile-nav-menu {
  @media only screen and (min-width: 1064px) {
    display: none;
  }
}
.ht-c-mobile-nav-menu {
  height: 100vh;
  width: 100vw;
  background-color: $bg-page;
  position: absolute;
  transform: translateY(-101%);
  top: 0;
  left: 0;
  z-index: -1;
  padding: 72px 24px;
  transition: transform 0.4s $default-bezier;
	overflow-y: scroll;
  &.--is-open {
    transform: translateY(0%);
  }
  li {
    border-bottom: 1px solid $grey-40;
    padding: 24px 0;
    a {
      @include action-large;
      color: $grey-80;
    }
    span {
      @include action-large;
      font-size: 18px;
    }
    .ht-l-nav-column {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &:last-child {
      border: none;
    }
  }
}
</style>