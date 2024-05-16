<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  to: RouteLocationRaw,
  name: string,
  icon?: any,
  openNewPage?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  openNewPage: false,
	icon: null
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    :target="openNewPage ? '_blank' : ''"
  >
    <component :is="icon" />
    <p>{{ name }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  p {    
    @include action-large;
    line-height: 20px;
  }
  @media only screen and (min-width: 1064px) {
    &:hover {
      background-color: $alpha-white-8;
    }
  }
}
</style>