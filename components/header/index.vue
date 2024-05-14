<script setup lang="ts">
interface Props {
  navigation: Array<NavigationSimple | NavigationSubMenu>,
  ctaBtn: HeaderCtaBtn
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<template>
  <header>
    <nav class="ht-l-header-container">
      <HeaderBrandLink />
      <div class="ht-l-flex-navigation">
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
      <NavigationPrimary
        :link="ctaBtn.link"
        :size="ctaBtn.size"
        :target="ctaBtn.target"
      >
        <p>{{ ctaBtn.caption }}</p>
      </NavigationPrimary>
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
.ht-l-flex-navigation {
  display: flex;
  align-items: center;
  gap: 32px;
}
</style>