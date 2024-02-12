<script setup lang="ts">
interface Props {
  text: string,
  disabled?: boolean,
  size?: 'medium' | 'large',
  type?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Input submit',
  size: 'medium',
  type: 'primary',
  disabled: false
})

function useClass () {
  const isPrimary = computed<boolean>(() => {
    return props.type === 'primary'
  })

  const inputClass = reactive({
    '--large': props.size === 'large',
    '--primary': isPrimary.value,
    '--secondary': !isPrimary.value
  })

  return {
    inputClass
  }
}

const { inputClass } =  useClass()
</script>

<template>
  <input
    :class="inputClass"
    type="submit"
    :value="text"
    :disabled="disabled"
  >
</template>

<style scoped lang="scss">
input {
  @include action-medium;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.1s linear;
  &:not(:disabled):hover {
    background-color: $bg-hoveractive-hi;
  }
  &.--large {
    @include action-large;
    padding: 8px 12px;
  }
  &.--primary {
    border: none;
    user-select: none;
    background-color: $bg-action;
    color: $text-onaction;
    &:disabled {
      background-color: $bg-disabled; 
    }
    &:not(:disabled):hover {
      background-color: $bg-hoveractive-hi;
    }
  }
  &.--secondary {
    color: $text-action;
    background-color: transparent;
    border: 1px solid $border-action-hi;
    &:disabled {
      border: 1px solid $border-disabled;
    }
    &:not(:disabled):hover {
      background-color: $alpha-white-8;
    }
  }
  &:disabled {
    color: $text-disabled;
    cursor: default;
  }
  &:focus-visible {
    outline: 1px solid $border-active-hi;
  }
}
</style>