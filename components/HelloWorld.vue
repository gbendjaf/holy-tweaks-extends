<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World from extended component!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
