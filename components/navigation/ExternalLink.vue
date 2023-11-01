<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  withIcon?: boolean,
  to: RouteLocationRaw,
}

const props = withDefaults(defineProps<Props>(), {
  withIcon: true,
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    target="_blank"
  >
    <slot>
      External Link
    </slot>
    <IconArrowUpRightLinear v-if="withIcon"/>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  @include action-large;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  text-decoration-color: $text-brand;
  text-decoration-thickness: 2px;
}
svg {
  color: $text-brand;
  transition: all 0.1s ease;
}
a:hover svg {
  transform: translateX(7%) translateY(-7%);
}
</style>