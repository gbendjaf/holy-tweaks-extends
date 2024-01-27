<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  to: RouteLocationRaw,
  icon?: any,
  name: string,
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
    <component :is="icon"/>
    <p>{{ name }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {    
    @include action-large;
    line-height: 20px;
  }
  @media only screen and (min-width: 1064px) {
    &:not(.router-link-active):hover {
      p, svg {
        color: $grey-60;
      }
    }
  }
}
</style>