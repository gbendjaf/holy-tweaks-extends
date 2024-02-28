<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <header>
    <nav class="ht-l-header-container">
      <HeaderBrandLink />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.ht-l-header-container {
  max-width: 1250px;
  margin: 0 auto;
}
header {
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid $grey-40;
  padding: 0 24px;
  background-color: rgba($bg-page, 0.8);
  backdrop-filter: blur(10px);
  @media only screen and (min-width: 768px) {
    padding: 0 34px;
  }
}
</style>