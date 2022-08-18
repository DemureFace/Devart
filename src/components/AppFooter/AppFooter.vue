<template>
  <div class="footer">
    <div class="container">
      <span class="footer__span">© 1997 - 2019 Devart. All rights reserved.</span>
      <p class="footer__text">Privacy & Security | Terms of Use</p>
      <BaseButton theme="transparent" class="footer__button" @click="toTop">
        Back on Top
        <img src="@/assets/img/svg/icons/arrow-top.svg" alt="">
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  name: 'Foote-r',
  components: { BaseButton },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $backgroundFooter;

  &__span {
    color: $light;
    font: 400 13px/24px $fontRegularOS;
  }

  &__text {
    color: $light;
    font: 400 13px/24px $fontRegularOS;
  }

  &__button {
    color: $light;
    font: 400 13px/24px $fontRegularOS;
    opacity: 0.6;
  }
}

.container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
</style>
