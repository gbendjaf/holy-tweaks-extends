<script setup lang="ts">
interface Props {
  type?: 'regular' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'regular'
})
</script>

<template>
  <button
    :class="{ '--large': type === 'large' }"
  >
    <slot>
      Primary btn
    </slot>
  </button>
</template>

<style scoped lang="scss">
button {
  @include action-medium;
  border: none;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: $bg-action;
  transition: background-color 0.1s ease;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  color: $text-onaction;
  &:not(:disabled):hover {
    background-color: $purple-40;
  }
  &.--large {
    @include action-large;
    padding: 8px 12px;
  }
  &:disabled {
    background-color: $bg-disabled;
    color: $text-disabled;
    cursor: default;
  }
  &:focus-visible {
    outline: 1px solid $border-active-hi;
  }
}
</style>