<script setup lang="ts">
interface Props {
  error: any
}

const props = withDefaults(defineProps<Props>(), {
})

function useError () {
  function handleError () {
    clearError({ redirect: localePath({ path: runtimeConfig.public.ERROR_REDIRECT }) })
  }

  return {
    handleError
  }
}

const localePath = useLocalePath()
const runtimeConfig = useRuntimeConfig()
const { handleError } = useError()
</script>

<template>
  <main class="ht-l-error-page">
    <h1>{{ error.statusCode }}, Oops something went wrong !</h1>
    <ButtonPrimary
      type="large"
      :text="$t('error.resetBtn')"
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