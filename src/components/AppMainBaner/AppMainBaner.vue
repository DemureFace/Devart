<template>
  <div class="main-baner container">
    <div class="main-baner__left">
      <p class="main-baner__text">{{text}}</p>
      <h1 class="main-baner__title">{{title}}</h1>
      <p class="main-baner__description">{{description}}</p>

    <div class="main-baner__buttons">
      <BaseButton theme="blue" class="main-baner__download">download</BaseButton>
      <BaseButton theme="transparent" class="main-baner__buy">buy now</BaseButton>
    </div>
    </div>
    <div class="main-baner__right">
      <img src="@/assets/img/png/MainBaner.png" alt="MainBaner">
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'MainBaner',
  components: { BaseButton },

  data () {
    return {
      text: 'Achieve the next level productivity',
      title: 'dbForge SQL Complete',
      description: 'An advanced IntelliSense-style code completion add-in for SSMS and VS'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-baner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $backgroundMainBaner;

  &__left {
  }

  &__text {
    color: $purple;
    font: 400 22px/32px $fontRegularFS;
  }

  &__title {
    color: $light;
    font: 500 54px/52px $fontMediumFS;
    margin: 7px 0;
  }

  &__description {
    color: $light;
    font: 400 18px/30px $fontRegularOS;
  }
  &__buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  }

  &__download {
    font: 500 14px/17px $fontMediumFS;
    text-transform: uppercase;
    color: $light;
    border: none;
  }
  &__buy {
    font: 500 14px/17px $fontMediumFS;
    text-transform: uppercase;
    color: $light;
    border: 1.5px solid rgba($light, 0.25);
  }
  &__right {
  }

}
</style>
