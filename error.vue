<script setup lang="ts">
const props = defineProps({
  error: Object
})

const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()

function handleError () {
  clearError({ redirect: localePath({ path: runtimeConfig.public.ERROR_REDIRECT }) })
}
</script>

<template>
  <main class="ht-l-error-page">
    <h1>{{ error.statusCode }}, Oops something went wrong !</h1>
    <ButtonPrimary
      type="large"
      @click="handleError"
    >
      Return to homepage
    </ButtonPrimary>
  </main>
</template>

<style scoped lang="scss">
.ht-l-error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 100px;
  background-color: $grey-20;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding: 30px;
  h1 {
    text-align: center;
  }
}
</style>