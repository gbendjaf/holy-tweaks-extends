<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  to: RouteLocationRaw,
  withIcon?: boolean,
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  withIcon: true,
  target: '_blank'
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    :target="target"
  >
    <slot>
      External Link
    </slot>
    <IconArrowUpRightLinear v-if="withIcon" />
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  @include action-large;
  display: flex;
  align-items: flex-end;
  width: fit-content;
  text-decoration-color: $brand-mid;
  text-decoration-thickness: 2px;
  text-decoration-line: underline;
	cursor: pointer;
  color: $text-action;
  &:focus-visible {
    border: none;
    outline: none;
    & svg {
      transform: translateX(7%) translateY(-7%);
    }
  }
}
svg {
  color: $text-brand;
  transition: all 0.1s ease;
}
a:hover svg {
  transform: translateX(7%) translateY(-7%);
}
</style>