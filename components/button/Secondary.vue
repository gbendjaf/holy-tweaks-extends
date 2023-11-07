<script setup lang="ts">
interface Props {
  type?: 'regular' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'regular'
})
</script>

<template>
  <button :class="{ '--large': type === 'large' }">
    <slot>
      Secondary Btn
    </slot>
  </button>
</template>

<style scoped lang="scss">
button {
  @include action-medium;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid $border-action-hi;
  cursor: pointer;
  color: $text-action;
  &.--large {
    @include action-large;
    padding: 8px 12px;
  }
  &:disabled {
    color: $text-disabled;
    border: 1px solid $border-disabled;
    cursor: default;
  }
  &:not(:disabled):hover {
    background-color: $alpha-white-8;
  }
  &:focus-visible {
    outline: 1px solid $border-active-hi;
  }
}
</style>