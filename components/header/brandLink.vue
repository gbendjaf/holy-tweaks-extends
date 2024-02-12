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
    <p>{{ mode === 'full' ? 'Holy Tweaks' : undefined }}</p>
  </NuxtLink>
</template>

<style scoped lang="scss">
.ht-c-brand-link {
  @include action-large;
  font-size: 18px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 45px;
  }
  @media only screen and (min-width: 1064px) {
    svg {
      width: 50px;
    }
  }
}
</style>