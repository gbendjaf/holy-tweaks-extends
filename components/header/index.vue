<script setup lang="ts">
interface Props {
  navigation: Array<NavigationSimple | NavigationSubMenu>,
  ctaBtn: HeaderCtaBtn
}

const props = withDefaults(defineProps<Props>(), {
})

function useBurgerMenu () {
  const isMenuOpen = ref<boolean>(false)

  return {
    isMenuOpen
  }
}

const { isMenuOpen } = useBurgerMenu()
</script>

<template>
  <header>
    <nav class="ht-l-header-container">
      <HeaderBrandLink />
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
      <div class="ht-l-mobile-actions">
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
    </nav>
  </header>
</template>

<style scoped lang="scss">
.ht-l-header-container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center
}
header {
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid $grey-40;
  padding: 0 24px;
  background-color: rgba($bg-page, 0.6);
  backdrop-filter: blur(10px);
  @media only screen and (min-width: 768px) {
    padding: 0 34px;
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
.ht-c-burger {
  @media only screen and (min-width: 1064px) {
    display: none;
  }
}
.ht-l-mobile-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>