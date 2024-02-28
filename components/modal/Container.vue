<script setup lang="ts">
interface Props {
  closable: boolean,
  closableFromOutside?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closable: false,
  closableFromOutside: false
})

function useModalState () {
  const isOpen = useState('is-modal-open')
  const view = useState('modal-view')
  const title = useState('modal-title')

  function close () {
    isOpen.value = false
  }

  return {
    isOpen,
    view,
    title,
    close
  }
}

function useModalEvents () {
  const target = ref(null)
  
  onClickOutside(target, event => {
    if (props.closableFromOutside) close()
  })

  return { target }
}

const { target: modalContainerRef } = useModalEvents()
const { isOpen, view, title, close } = useModalState()
</script>

<template>
  <Teleport to="body">
    <transition name="modal">
      <div
        v-if="isOpen"
        class="ht-l-modal-mask"
      >
        <div
          class="ht-c-modal-content"
          ref="modalContainerRef"
        >
          <div class="ht-c-modal-content__heading">
            <h2>{{ title }}</h2>
            <IconClose
              v-if="closable"
              @click="close"
            />
          </div>
          <component :is="view"/>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="scss">
.ht-l-modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-overlay-hi;
  transition: opacity 0.2s ease;
  padding: 24px;
}

.ht-c-modal-content {
  width: fit-content;
  height: fit-content;
  padding: 20px 24px;
  background-color: $bg-section;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    svg {
      width: 22px;
      height: 22px;
      cursor: pointer;
      color: $text-action;
    }
  }
  h2 {
    @include heading-small;
    color: $text-title;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
  opacity: 1;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>