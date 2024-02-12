<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <header>
    <nav>
      <HeaderBrandLink />
      <p>|</p>
      <span>{{ runtimeConfig.public.CURRENT_SUBDOMAIN as string }}</span>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    @include brand-small;
    font-size: 22px;
    letter-spacing: 0px;
    color: $text-body;
  }
}
header {
  background-color: $bg-page;
}
</style>