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
  gap: 10px;
  border-radius: 3px;
  color: $grey-80;
  p {    
    @include action-large;
    line-height: 20px;
    color: $grey-80;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  @media only screen and (min-width: 1064px) {
    &:hover,
    &:hover p {
      color: $text-body;
    }
  }
}
</style>