<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  to: RouteLocationRaw,
  openNewPage?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  openNewPage: false
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    :target="openNewPage ? '_blank' : ''"
  >
    <slot>
      Simple nav
    </slot>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  @include action-large;
  text-decoration: none;
  &:hover {
    color: $text-onhover;
  }
}
</style>