<template>
  <div class="main-brands container">
    <h1 class="main-brands__title">{{title}}</h1>

    <div class="main-brands__images">
      <img src="@/assets/img/png/Brands/Microsoft.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Arconic.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Anthem.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Polaris.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Lam.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Hewlett.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Morgan.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Jabil.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Berkly.png" alt="" class="main-brands__image">
      <img src="@/assets/img/png/Brands/Amerisource.png" alt="" class="main-brands__image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBrands',

  data () {
    return {
      title: 'Leading companies choose dbForge Products'
    }
  }
}
</script>

<style lang="scss" scoped>

.main-brands {
  margin-top: 188px;

  &__title {
    margin-bottom: 50px;
    font: 300 36px/50px $fontLightFS;
  }

  &__images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0fr;
    justify-items: center;
    align-items: center;
  }

  &__image {
    margin-bottom: 70px;
  }
}
</style>
