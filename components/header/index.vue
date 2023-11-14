<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <header>
    <nav class="ht-l-header-container">
      <NuxtLink
        class="ht-c-header-brand__link"
        :to="(runtimeConfig.public.MAIN_WEBSITE as string)"
      >
        <IconClipE />
        Holy Tweaks
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.ht-l-header-container {
  max-width: 1250px;
  margin: 0 auto;
}
.ht-c-header-brand__link {
  @include action-large;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 25px;
    height: 26px;
  }
}
header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  border-bottom: 1px solid $grey-40;
  padding: 0 20px;
  background-color: rgba($grey-20, 0.8);
  backdrop-filter: blur(10px);
}
</style>