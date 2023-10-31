<script setup lang="ts">
import { resolveComponent } from 'vue'
import { ref } from 'vue'

const EyeIcon = resolveComponent('IconEyeBold')

const inputText = ref('')
const inputTextDisabled = ref(`mario-bros-123`)
</script>

<template>
  <main>
    <section>
      <h1>Holy Tweaks Software Web theme.</h1>
      <p>A Nuxt Layer to standardize brand accross brand domain.</p>
    </section>
    <hr>
    <section class="ht-c-form-section">
      <h2>Here is a form</h2>
      <form>
        <h3>Connecte-toi</h3>
        <InputText
          v-model="inputText"
          placeholder="Email"
          type="email"
        />
        <InputText
          v-model="inputTextDisabled"
          placeholder="Mot de passe"
          type="password"
          :icon="EyeIcon"
        />
      </form>
    </section>
  </main>
</template>

<style scope lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 20px;
}
.ht-c-form-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
h1 {
  max-width: 700px;
}
section {
  width: 100%;
}
hr {
  width: 40%;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  border: 2px solid $border-neutral;
}
</style>