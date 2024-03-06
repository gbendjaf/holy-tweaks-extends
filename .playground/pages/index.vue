<script setup lang="ts">
import ModalDummy from '@/components/modal/Dummy.vue'
import { ref } from 'vue'

const inputText = ref('')
const inputPassword = ref(``)
const textArea = ref(``)
const inputCheckBox = ref(true)

const subMenuRedirection = [
{
    to: '/about',
    name: 'About',
    icon: resolveComponent('IconInfoBold')
  },
  {
    to: '/blog',
    name: 'Blog',
    icon: resolveComponent('IconLandscapeBold')
  },
  {
    to: '/somewhere',
    name: 'Somewhere'
  }
]

function login () {
  console.log('login tentative !')
}

const { open: openModal, close: closeModal } = useModal()
</script>

<template>
  <main>
    <section>
      <h1>Holy Tweaks Software Web theme.</h1>
      <p>
        <b>A Nuxt Layer</b>
        <br>
        Standardize visual accross our brand domains.
      </p>
    </section>
    <hr>
    <section class="ht-c-form-section">
      <h2>Here is a form</h2>
      <form @submit.prevent="login">
        <h3>Fake login</h3>
				<p>Enter your credentials please</p>
        <InputText
          class="ht-c-inputs"
          v-model="inputText"
          label="Email"
          type="email"
          autocomplete="email"
          required
        />
        <InputPassword
          v-model="inputPassword"
          label="Mot de passe"
          required
        />
        <InputTextArea
          v-model="textArea"
          label="Tell us about you"
          required
        />
				<div class="ht-c-form__validation">
					<InputCheckBox
						v-model="inputCheckBox"
            label="Ask for user approval"
            required
					/>
					<InputSubmit
						class="ht-c-input-submit"
						text="Me connecter"
						size="large"
					/>
				</div>
      </form>
    </section>
    <section class="ht-c-other-section">
      <h2>Some other components</h2>
      <div class="ht-l-flex-gap">
        <NavigationExternalLink
          to="https://youtu.be/dQw4w9WgXcQ"
        >
          Free vbucks
        </NavigationExternalLink>
        <NavigationExternalLink
          to="https://youtu.be/dQw4w9WgXcQ"
          :with-icon="false"
        >
          Free vbucks
        </NavigationExternalLink>
        <ButtonPrimary text="Primary"/>
        <ButtonPrimary text="Primary Disabled" disabled/>
        <ButtonPrimary text="Primary Large" size="large"/>
        <ButtonSecondary text="Secondary"/>
        <ButtonSecondary text="Secondary Disabled" disabled/>
        <ButtonSecondary text="Secondary Large" size="large" />
      </div>
    </section>
    <section class="ht-c-nav-menu-section">
      <h2>A nav menu</h2>
      <div class="ht-l-flex-gap">
        <NavigationSimple
          to="/contact"
          name="Contact"
        />
        <NavigationSubMenu
          title="Entreprise"
          :routes="subMenuRedirection"
        />
      </div>
    </section>
    <section class="ht-c-modal-section">
      <h2>And our modal</h2>
      <div class="ht-l-flex-gap">
        <ButtonPrimary
          text="Open modal"
          @click="openModal(ModalDummy, 'Custom titlee', true, true)"
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.ht-c-form-section {
  max-width: 500px;
}
.ht-c-nav-menu-section {
  max-width: 700px;
}
.ht-c-other-section {
  max-width: 600px;
}
.ht-c-input-submit {
  align-self: flex-end;
}
.ht-l-flex-gap {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
}
.ht-c-form__validation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}
.ht-c-modal-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 68px 24px 200px 24px;
  background-color: $grey-15;
  @media only screen and (min-width: 768px) {
    padding: 68px 34px 200px 34px;
  }
}
section {
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
  gap: 40px;
  padding: 20px;
  border: 2px solid $border-neutral;
  background-color: $grey-20;
  // background-color: pink;
}
</style>