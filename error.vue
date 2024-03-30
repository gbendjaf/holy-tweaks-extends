<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError
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
    <h1>{{ error.statusCode }}, {{ error.message ?? $t('error.defaultMsg') }}</h1>
    <h2 v-if="error.data && (error.data as Record<string, any> ).clearMethod === 'close'">{{ $t('error.closeWindow') }}</h2>
    <ButtonPrimary
      size="large"
      :text="$t('error.resetBtn')"
      @click="handleError"
    >
      {{ $t('error.clearBtn') }}
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
    max-width: 800px;
  }
}
</style>