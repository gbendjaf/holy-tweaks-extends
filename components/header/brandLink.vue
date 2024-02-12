<script setup lang="ts">
interface Props {
  mode?: 'short' | 'full'
}

withDefaults(defineProps<Props>(), {
  mode: 'full'
})

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <NuxtLink
    class="ht-c-brand-link"
    :to="(runtimeConfig.public.MAIN_WEBSITE as string)"
  >
    <IconBrand />
    <p v-if="mode === 'full'">Holy Tweaks</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.ht-c-brand-link {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 45px;
  }
  p {
    @include action-large;
    font-size: 18px;
  }
  @media only screen and (min-width: 1064px) {
    svg {
      width: 49px;
    }
  }
}
</style>