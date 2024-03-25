<script setup lang="ts">
interface Props {
  text?: string,
  disabled?: boolean,
  size?: 'medium' | 'large',
  type?: 'primary' | 'secondary',
  isLoading?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Input submit',
  size: 'medium',
  type: 'primary',
  disabled: false,
  isLoading: false
})

function useClass () {
  const isPrimary = computed<boolean>(() => {
    return props.type === 'primary'
  })

  const inputClass = reactive({
    '--large': props.size === 'large',
    '--primary': isPrimary.value,
    '--secondary': !isPrimary.value,
    '--disabled': props.disabled,
    '--is-loading': props.isLoading
  })

  return {
    inputClass
  }
}

const { inputClass } =  useClass()
</script>

<template>
  <label
    for="submit"
    class="ht-c-submit-btn"
    :class="inputClass"
    tabindex="0"
  >
    <p v-if="!props.isLoading">{{ text }}</p>
    <IconLoaderHalfCIrcle v-else />
    <input
      id="submit"
      type="submit"
      :disabled="disabled"
    >
  </label>
</template>

<style scoped lang="scss">
.ht-c-submit-btn {
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.1s linear;
  transition: width 0.1s linear;
  p {
    @include action-medium;
  }
  &:not(.--disabled):hover {
    background-color: $bg-hoveractive-hi;
  }
  &.--large {
    p {
      @include action-large;
    }
    padding: 8px 12px;
  }
  &.--primary {
    border: none;
    user-select: none;
    background-color: $bg-action;
    p {
      color: $text-onaction;
    }
    &.--disabled {
      background-color: $bg-disabled; 
    }
    &:not(.--disabled):hover {
      background-color: $bg-hoveractive-hi;
    }
    &.--is-loading svg {
      color: $text-onaction;
    }
  }
  &.--secondary {
    background-color: transparent;
    border: 1px solid $border-action-hi;
    p {
      color: $text-action;
    }
    &.--disabled {
      border: 1px solid $border-disabled;
    }
    &:not(.--disabled):hover {
      background-color: $alpha-white-8;
    }
    &.--is-loading svg {
      color: $text-action;
    }
  }
  &.--disabled {
    p {
      color: $text-disabled;
    }
    cursor: default;
  }
  &:focus-visible {
    outline: 1px solid $border-active-hi;
  }
  &.--is-loading {
    display: flex;
    align-items: center;
  }
}
input {
  display: none;
}
</style>