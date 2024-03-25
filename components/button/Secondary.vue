<script setup lang="ts">
interface Props {
  size: 'medium' | 'large',
  text: string,
	icon: any,
  isLoading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: 'dummy text',
  size: 'medium',
  icon: null,
  isLoading: false,
})
</script>

<template>
  <button
    class="ht-c-btn-secondary"
    :class="{ '--large': size === 'large', '--is-loading': isLoading }"
  >
    <div  
      v-if="!isLoading"
      class="ht-c-btn-secondary__content"
    >
      <component :is="icon" />
      <p>{{ text }}</p>
    </div>
    <IconLoaderHalfCIrcle v-else-if="isLoading" />
  </button>
</template>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: transparent;
  transition: background-color 0.1s ease;
  transition: width 0.1s ease;
  border: 1px solid $border-action-hi;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
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
  }
  &.--large {
    p {
      @include action-large;
    }
    padding: 8px 12px;
  }
  &.--is-loading {
    svg {
      color: $text-action;
    }
  }
  &:disabled {
    p {
      color: $text-disabled;
    }
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