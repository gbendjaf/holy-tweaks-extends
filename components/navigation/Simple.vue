<script setup lang="ts">
interface Props extends /* @vue-ignore */ NavigationSimple {
}

const props = withDefaults(defineProps<Props>(), {
  openNewPage: false,
	icon: null
})
</script>

<template>
  <NuxtLink
    :to="props.to"
    :target="openNewPage ? '_blank' : ''"
  >
    <component :is="icon" />
    <p>{{ name }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  p {    
    @include action-large;
    line-height: 20px;
  }
  @media only screen and (min-width: 1064px) {
    &:not(.router-link-active):hover {
      p, svg {
        color: $grey-60;
      }
    }
  }
}
</style>