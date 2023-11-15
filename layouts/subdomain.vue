<template>
  <div class="ht-l-page">
    <HeaderSimple />
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.ht-l-page {
  padding: 50px 60px;
  background-color: $grey-20;
  min-height: 100vh;
  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
}
</style>