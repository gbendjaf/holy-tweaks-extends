<script setup lang="ts">
interface Props {
  type?: 'medium' | 'large',
	text: string,
	icon?: any
}

const props = withDefaults(defineProps<Props>(), {
  type: 'medium',
	icon: null
})
</script>

<template>
  <button
    :class="{ '--large': type === 'large' }"
  >
    <component :is="icon" />
    <p>{{ text }}</p>
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: $bg-action;
  transition: background-color 0.1s ease;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  p {
    @include action-medium;
  }
  p, svg {
    color: $text-onaction;
  }
  svg {
    height: 20px;
    width: 20px;
  }
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