<script setup lang="ts">
interface Props {
  size?: 'medium' | 'large',
  text: string,
	icon?: any
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  icon: null
})
</script>

<template>
  <button :class="{ '--large': size === 'large' }">
    <component :is="icon" />
    <p>{{ text }}</p>
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: transparent;
  transition: background-color 0.1s ease;
  border: 1px solid $border-action-hi;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  p {
    @include action-medium;
  }
  p, svg {
    color: $text-action;
  }
  svg {
    height: 20px;
    width: 20px;
  }
  &.--large {
    p {
      @include action-large;
    }
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