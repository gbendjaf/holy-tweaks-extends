<script setup lang="ts">
const props = defineProps<{
  modelValue: number,
  index: number,
}>()

const emit = defineEmits<{
  'update:modelValue': [id: number]
}>()

function useRadioState () {
  const isSelected = computed<boolean>(() => {
    return props.modelValue === props.index
  })

  return {
    isSelected
  }
}

const { isSelected } = useRadioState()
</script>

<template>
  <label
    class="ht-c-radio"
    :class="{ '--selected': isSelected }"
    :for="`radio-${index}`"
  >
    <div class="ht-c-radio__dot">
      <input
        :id="`radio-${index}`"
        class="ht-c-radio__input"
        :value="index"
        :checked="isSelected"
        type="radio"
        @change="emit('update:modelValue', index)"
      >
      <IconDotCircleBold v-if="isSelected" />
    </div>
    <slot />
  </label>
</template>

<style scoped lang="scss">
.ht-c-radio {
  padding: 20px 20px 20px 16px;
  border: 1px solid $border-action-low;
  display: flex;
  gap: 12px;
  cursor: pointer;
  &__dot {
    position: relative;
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    max-height: 20px;
    background-color: $grey-15;
    border-radius: 100%;
    border: 1px solid $border-action-low;
    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: $text-brand;
    }
    input[type="radio"] {
      opacity: 0;
      position: absolute;
    }
  }
  &.--selected {
    border-color: $border-active-low;
  }
  &:hover {
    background-color: $bg-hover-low;
  }
}
.ht-c-radio.--selected {
  & .ht-c-radio__dot {
    border: 1px solid $border-active-low;
  }
}
</style>