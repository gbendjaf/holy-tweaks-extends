<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
const inputTextDisabled = ref(`I'm dissabled !`)
</script>

<template>
  <main>
    <h1>Welcome to Holy Tweaks Software Web theme !</h1>
    <div class="ht-c-inputs-container">
      <InputText
        v-model="inputText"
        placeholder="Exemple de fou"
      />
      <InputText
        v-model="inputTextDisabled"
        placeholder="Mot de passe"
        :disabled="true"
      />
    </div>
  </main>
</template>

<style scope lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ht-c-inputs-container {
  display: flex;
  gap: 100px;
  padding: 20px;
  // background-color: $accent-sage;
}
h1 {
  @include heading-large;
  color: $text-title;
}
</style>