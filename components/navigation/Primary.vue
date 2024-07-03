<script setup lang="ts">
interface Props {
  link: string,
  size: 'medium' | 'large'
  target?: string,
}

const props = withDefaults(defineProps<Props>(), {
  target: '_self',
})
</script>

<template>
  <NuxtLink
    class="ht-c-link-primary ht-c-primary-btn-style"
    :class="{ '--large': size === 'large' }"
    :to="link"
    :target="target"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style lang="scss">
@import 'assets/styling/components/buttons.scss';
.ht-c-link-primary {

}
</style>