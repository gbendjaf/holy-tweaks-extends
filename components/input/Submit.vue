<script setup lang="ts">
interface Props {
  text: string,
  disabled?: boolean,
  type?: 'medium' | 'large',
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Input submit',
  type: 'medium',
  disabled: false
})
</script>

<template>
  <input
    :class="{ '--large': type === 'large' }"
    type="submit"
    :value="text"
    :disabled="disabled"
  >
</template>

<style scoped lang="scss">
input {
  @include action-medium;
  border: none;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: $bg-action;
  transition: background-color 0.1s linear;
  cursor: pointer;
  width: fit-content;
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