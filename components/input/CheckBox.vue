<script setup lang="ts">
interface Props {
  modelValue: boolean,
  disabled?: boolean,
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <label
    class="ht-l-checkbox-container"
    :class="{ '--disabled': disabled }"
    for="checkbox"
  >
    {{ label }}
    <input
      id="checkbox"
      class="ht-c-input-checkbox"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', !modelValue)"
    >
    <span class="ht-c-checkmark">
      <IconCheckLinear v-if="modelValue" />
    </span>
  </label>
</template>

<style scoped lang="scss">
.ht-l-checkbox-container {
  position: relative;
  user-select: none;
  padding-left: 28px;
  cursor: pointer;
  &.--disabled {
    cursor: default;
  }
  &:hover .ht-c-input-checkbox:not(:disabled) {
    &:checked ~ .ht-c-checkmark {
      background-color: $bg-hoveractive-hi;
    }
    &:not(:checked) ~ .ht-c-checkmark {
      background-color: $bg-hover-low;
    }
  }
}
.ht-c-input-checkbox {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked ~ .ht-c-checkmark {
    background-color: $bg-active-hi;
    border: none;
  }
  &:disabled ~ .ht-c-checkmark {
    background-color: $bg-disabled;
    border-color: $border-disabled;
  }
  &:disabled:checked ~ .ht-c-checkmark {
    background-color: $bg-disabled;
    border: none;
    & svg {
      color: $text-disabled;
    }
  }
  &:focus-visible ~ .ht-c-checkmark {
    outline: 1px solid white;
  }
}
.ht-c-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid $border-action-low;
  box-sizing: border-box;
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20px;
    height: 20px;
    color: $text-onaction;
  }
}
</style>