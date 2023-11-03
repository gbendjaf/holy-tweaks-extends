<script setup lang="ts">
interface Props {
  modelValue: boolean,
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Default label'
})

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div class="ht-l-checkbox-container">
    <input
      id="agree"
      class="ht-c-input-checkbox"
      type="checkbox"
      :value="modelValue"
      @input="$emit('update:modelValue', !modelValue)"
    >
    <IconCheckLinear v-if="modelValue" />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.ht-l-checkbox-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.ht-c-input-checkbox {
  accent-color: $bg-active-hi;
  border-radius: 6px;
  background-color: transparent;
  outline: 1px solid $border-action-low;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:not(:checked, :disabled):hover {
    background-color: $bg-hover-low;
  }
  &:not(:checked):disabled {
    outline: 1px solid $border-disabled;
  }
  &:checked {
    outline: none;
    background-color: $bg-active-hi;
    &:not(:disabled):hover {
      background-color: $bg-hoveractive-hi;
    }
    &:disabled {
      outline: none;
    }
  }
  &:disabled {
    cursor: default;
    background-color: $bg-disabled;
  }
}
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 17px;
  height: 17px;
  pointer-events: none;
}
</style>