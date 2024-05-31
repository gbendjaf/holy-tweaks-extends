<script setup lang="ts">
interface Props {
  id: string
}

defineProps<Props>()

const toggled = defineModel<boolean>({ default: false })
</script>

<template>
  <label class="ht-c-switch-container">
    <input
      :id="id"
      v-model="toggled"
      type="checkbox"
    >
    <span class="ht-c-switch-slider slider" />
  </label>
</template>

<style setup lang="scss">
.ht-c-switch-container {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.ht-c-switch-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: .2s;
  border-radius: 20px;
  outline: 1px solid $border-action-low;
  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    top: 3px;
    background-color: $text-action;
    transition: .2s;
    border-radius: 50%;
  }
}

input[type=checkbox] {
  &:checked + .ht-c-switch-slider {
    background-color: $bg-active-hi;
    &:before {
      transform: translateX(13px);
    }
  }
}
</style>