<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtLink
    class="ht-c-brand-link"
    :to="(runtimeConfig.public.MAIN_WEBSITE as string)"
  >
    <IconBrand />
    Holy Tweaks
  </NuxtLink>
</template>

<style scoped lang="scss">
.ht-c-brand-link {
  @include action-large;
  font-size: 18px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 50px;
    height: 20px;
  }
}
</style>