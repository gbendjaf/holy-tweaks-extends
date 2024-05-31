<script setup lang="ts">
interface Props {
  link: string,
  size: 'medium' | 'large',
  type: 'primary' | 'secondary',
  target?: string,
}

const props = withDefaults(defineProps<Props>(), {
  target: '_self',
})

function useClass () {
  const btnType = computed(() => {
    return props.type === 'primary' ? 'ht-c-primary-btn-style' : 'ht-c-secondary-btn-style'
  })

  const btnSize = computed (() => {
    return props.size === 'large' ? '--large' :  undefined
  })
 
  return {
    btnType,
    btnSize
  }
}

const { btnType, btnSize } = useClass()
</script>

<template>
  <NuxtLink
    :class="[btnType, btnSize]"
    :to="link"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>

<style lang="scss">
@import '@/assets/styling/components/buttons.scss';
</style>