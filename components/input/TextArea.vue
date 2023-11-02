<script setup lang="ts">
interface Props {
  placeholder: string
}

const props = withDefaults(defineProps<Props>(), {
})
</script>

<template>
  <textarea
    class="ht-c-textarea"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.ht-c-textarea {
  resize: vertical;
}
</style>