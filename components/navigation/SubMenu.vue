<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  title: string
  routes: Array<{
    to: RouteLocationRaw | string,
    name: string,
    icon?: any
  }>,
}

const props = withDefaults(defineProps<Props>(), {
})
</script>


<template>
  <div class="ht-c-submenu-navigation">
    <ul>
      <li
        v-for="redirection in routes"
        :key="redirection.name"
      >
        <NuxtLink :to="redirection.to">
          <component :is="redirection.icon" />
          {{ redirection.name }}
        </NuxtLink>
      </li>
    </ul>
    <button>
      {{ title }}
      <IconChevronDownLinear />
    </button>
  </div>
</template>

<style scoped lang="scss">
.ht-c-submenu-navigation {
  position: relative;
  &:hover ul {
    display: block;
  }
  &:hover button svg {
    transform: rotate(180deg);
  }
}
button {
  all: unset;
  @include action-large;
  color: $text-body;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  & svg {
    width: 20px;
    height: 20px;
    transition: transform 0.1s ease;
  }
}
ul {
  display: none;
  position: absolute;
  top: 100%;
  left: -14px;
  width: 150px;
  padding: 7px;
  border-radius: 3px;
  list-style: none;
  border: 1px solid $border-neutral;
  background-color: $grey-15;
}
li {
  @include action-large;
  cursor: pointer;
  & svg {
    width: 16px;
    height: 16px;
    color: $grey-80;
  }
  & a {
    padding: 8px 7px;
    color: $grey-80;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    width: 100%;
  }
  @media only screen and (min-width: 1064px) {
    &:hover a,
    &:hover svg {
      color: $text-body;
    }
    &:hover a {
      background-color: $bg-hover-low;
    }
  }
}
</style>