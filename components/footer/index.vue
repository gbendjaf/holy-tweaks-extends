<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <footer>
    <div class="ht-c-footer-brand">
      <NuxtLink
        class="ht-c-footer-brand__link"
        :to="runtimeConfig.public.MAIN_WEBSITE"
      >
        <IconClipE />
        <p>Holy Tweaks Software</p>
      </NuxtLink>
      <div>
        <NuxtLink>
          <IconDiscord />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  padding: 50px 20px;
  background-color: $grey-20;
  border-top: 1px solid $grey-30;
  display: flex;
  flex-direction: column;
}
.ht-c-footer-brand {
  display: flex;
  gap: 10px;
  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  svg {
    width: 18px;
    height: 18px;
    color: $grey-95;
  }
  p {
    color: $grey-95;
  }
}
a {
	text-decoration: none;
}
</style>