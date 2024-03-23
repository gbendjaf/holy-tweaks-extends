<template>
  <div class="ht-l-page">
    <HeaderSimple />
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.ht-l-page {
  padding: 30px;
  background-color: $bg-page;
  min-height: 100vh;
  @media only screen and (min-width: 768px) {
    padding: 50px 60px;
  }
}
</style>