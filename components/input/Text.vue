<script setup lang="ts">
interface Props {
  modelValue: string,
  label: string,
  error?: boolean,
  disabled?: boolean,
  type?: 'text' | 'email',
  required?: boolean,
  autocomplete: string,
  maxlength?: number
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: 'text',
  error: false,
  required: false,
  autocomplete: 'nope',
  maxlength: 100
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
  <div class="ht-l-input-container">
    <input
      class="ht-c-input"
      :class="{ '--error': error }"
      :type="type"
      :autocomplete="autocomplete"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :maxlength="maxlength"
      placeholder=""
      spellcheck="false"
      @input="emitChange($event)"
    >
    <label>{{ label }}</label>
  </div>
</template>

<style scoped lang="scss">
$input-height: 45px;
.ht-l-input-container {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 200px;
  height: $input-height;
}
.ht-c-input {
  @include action-medium;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid $border-action-low;
  color: $text-active;
  padding: 8px 8px 8px 16px;
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
.ht-c-input ~ label {
  @include action-large;
  line-height: $input-height;
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
.ht-c-input:focus,
.ht-c-input:not(:placeholder-shown) {
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
	&.--error {
		border-top-color: transparent;
	}
}
.ht-c-input:disabled {
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
.ht-c-input.--error {
  border: 1px solid $border-error;
  & ~ label {
    color: $text-error;
  }
	& ~ label:before,
  & ~ label:after {
		border-width: 1px;
		border-color: $border-error;
  }
}
// Prevent autofill from messing up styling
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
  -webkit-background-clip: text;
  -webkit-text-fill-color: $text-active;
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px #23232329;
}
</style>