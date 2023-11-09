<script setup lang="ts">
interface Props {
  modelValue: string,
  label: string,
  error?: boolean,
  disabled?: boolean,
  required?: boolean,
	maxlength?: number,
}

const props = withDefaults(defineProps<Props>(), {
  error: false,
  disabled: false,
  required: false,
	maxlength: 300
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Emited each time input value change
function emitChange (event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="ht-l-textarea-container">
    <textarea
      class="ht-c-textarea"
      :class="{ '--error': error }"
      :required="required"
      :disabled="disabled"
			:maxlength="maxlength"
      :value="modelValue"
      placeholder=""
      @input="emitChange($event)"
    />
    <label>{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
.ht-l-textarea-container {
  position: relative;
  display: flex;
	min-width: 200px;
  width: 100%;
}
.ht-c-textarea {
	@include action-medium;
  width: 100%;
	min-height: 100px;
	max-height: 600px;
  resize: vertical;
  background-color: transparent;
  outline: none;
  border-radius: 2px;
  border: 1px solid $border-action-low;
  color: $text-active;
  padding: 12px 16px;
  &:focus {
    border-color: $border-active-hi;
    border-width: 1px;
  }
  &:focus ~ label:before,
  &:focus ~ label:after {
    border-color: $border-active-hi;
  }
  &:hover:not(:focus) {
    background-color: $bg-hover-low;
  }
}
.ht-c-textarea:disabled {
  pointer-events: none;
  background-color: $bg-disabled;
  border-color: $border-disabled;
  color: $text-disabled;
  & ~ label {
    color: $text-disabled;
  }
  & ~ label:before,
  & ~ label:after {
    border-width: 1px;
    border-color: $border-disabled;
  }
}
.ht-c-textarea ~ label {
  @include action-medium;
  line-height: 45px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  color: $text-caption;
  transition: all ease 0.2s;
  background-color: transparent;
  pointer-events: none;
  display: flex;
  white-space: nowrap;
  &:before {
    content: '';
    border-top: 1px solid $border-action-low;
    border-top-left-radius: 2px;
    min-width: 13px;
    height: 1px;
    display: block;
    margin-right: 5px;
  }
  &:after {
    content: '';
    width: 100%;
    border-top: 1px solid $border-action-low;
    border-top-right-radius: 2px;
    margin-left: 5px;
  }
}
.ht-c-textarea:focus,
.ht-c-textarea:not(:placeholder-shown) {
  // When focus or text within it
  border-top-color: transparent;
  & ~ label {
    @include input-label;
    line-height: 1px;
    color: $text-body;
  }
  & ~ label:before,
  & ~ label:after {
    border-width: 1px;
  }
  &:disabled {
    border-top-color: transparent;
  }
}
</style>