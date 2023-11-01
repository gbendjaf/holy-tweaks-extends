<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  modelValue: string,
  placeholder: string,
  error?: boolean,
  disabled?: boolean,
  type?: 'text' | 'password' | 'email',
  icon?: any,
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'iconClicked'): void
}>()

const isInputFocused = ref<boolean>(false)

// Emited each time input value change
function emitChange (event: Event): void {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="ht-l-input-container">
    <component
      v-if="icon"
      class="ht-c-input__icon"
      :class="{ '--is-active': isInputFocused || modelValue !== '' }"
      :is="icon"
      @click.stop="emit('iconClicked')"
      @hover.stop.prevent
    />
    <input
      class="ht-c-input ht-c-input-text"
      :class="{ '--error': error, '--icon': icon }"
      :type="type"
      autocomplete="nope"
      spellcheck="false"
      placeholder=""
      :disabled="disabled"
      :value="modelValue"
      @input="emitChange($event)"
      @focus="isInputFocused = true"
      @blur="isInputFocused = false"
    >
    <label>{{ placeholder }}</label>
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
  outline: none;
  width: 100%;
  height: 100%;
  @include action-medium;
  border-radius: 2px;
  background-color: transparent;
  border: 1px solid $border-action-low;
  color: $text-active;
  padding: 8px 8px 8px 16px;
  &:focus {
    border-color: $grey-100;
    border-width: 2px;
  }
  &:focus ~ label:before,
  &:focus ~ label:after {
    border-color: $grey-100;
  }
  &:hover:not(:focus) {
    background-color: $bg-hover-low;
  }
  &.--icon {
    padding-right: 48px;
  }
}
.ht-c-input ~ label {
  @include action-medium;
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
    border-width: 2px;
  }
}
.ht-c-input:disabled {
  pointer-events: none;
  background-color: $bg-disabled;
  border-left-color: $border-disabled;
  border-bottom-color: $border-disabled;
  border-right-color: $border-disabled;
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
  border: 1px solid $border-error ;
  & ~ label {
    color: $text-error;
  }
}
.ht-c-input__icon {
  height: 48px;
  width: 48px;
  padding: 16px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: $text-caption;
  &:hover ~ input:not(:focus) {
    background-color: $bg-hover-low;
  }
  &.--is-active {
    color: $text-body;
  }
}
</style>