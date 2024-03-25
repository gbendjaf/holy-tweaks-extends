<script setup lang="ts">
interface Props {
  size?: 'medium' | 'large',
	text?: string,
	icon?: any,
isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: 'dummy text',
  size: 'medium',
	icon: null,
  isLoading: false
})
</script>

<template>
  <button
    class="ht-c-btn-primary"
    :class="{ '--large': size === 'large', '--is-loading': isLoading }"
  >
    <div  
      v-if="!isLoading"
      class="ht-c-btn-primary__content"
    >
      <component :is="icon" />
      <p>{{ text }}</p>
    </div>
    <IconLoaderHalfCIrcle v-else-if="isLoading" />
  </button>
</template>

<style scoped lang="scss">
.ht-c-btn-primary {
  display: flex;
  align-items: center;
  border: none;
  user-select: none;
  border-radius: 2px;
  padding: 8px;
  background-color: $bg-action;
  transition: background-color 0.1s ease;
  transition: width 0.1s ease;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  &__content {
    display: flex;
    align-items: center;
    gap: 8px;
    svg {
      height: 20px;
      width: 20px;
    }
    p, svg {
      color: $text-onaction;
    }
    p {
      @include action-medium;
    }
  }
  &:not(:disabled):hover {
    background-color: $bg-hoveractive-hi;
  }
  &.--large {
    padding: 8px 12px;
    p {
      @include action-large;
    }
  }
  &.--is-loading {
    svg {
      color: $text-onaction;
    }
  }
  &:disabled {
    background-color: $bg-disabled;
    cursor: default;
    p {
      color: $text-disabled;
    }
  }
  &:focus-visible {
    outline: 1px solid $border-active-hi;
  }
}
</style>