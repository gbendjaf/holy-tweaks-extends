<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtLink
    class="ht-c-brand-link"
    :to="(runtimeConfig.public.MAIN_WEBSITE as string)"
  >
    <IconClipE />
    Holy Tweaks
  </NuxtLink>
</template>

<style scoped lang="scss">
.ht-c-brand-link {
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
</style>