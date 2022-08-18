<template>
  <div class="services container">
    <div class="services__left">
      <div class="services__need">
        <img src="@/assets/img/svg/icons/messenge.svg" alt="messenge">
        <div v-for="need in need" :key="need.title" class="services__need-block">
          <h4 class="services__need-block-title">{{need.title}}</h4>
          <p class="services__need-block-text">{{need.text}}</p>
          <div class="services__need-block-links">
            <a href="" class="services__need-block-link">
              <img src="@/assets/img/svg/icons/note.svg" alt="">
              {{need.faq}}
            </a>
            <a href="" class="services__need-block-link">
              <img src="@/assets/img/svg/icons/mail.svg" alt="">
              {{need.mail}}
            </a>
          </div>
        </div>
      </div>

      <div v-for="start in start" :key="start.title" class="services__start">
        <img src="@/assets/img/svg/icons/calendar.svg" alt="messenge">
        <div class="services__start-block">
          <h4 class="services__start-block-title">{{start.title}}</h4>
          <p class="services__start-block-text">{{start.text}}</p>
          <BaseButton class="services__start-block-button">{{start.button}}</BaseButton>
        </div>
      </div>
    </div>

    <div class="services__right">
      <div v-for="licenses in licenses" :key="licenses.title" class="services__licenses">
        <img src="@/assets/img/svg/icons/licenses.svg" alt="messenge">
        <h1 class="services__licenses-title">{{licenses.title}}</h1>
        <p class="services__licenses-text">{{licenses.text}}</p>
        <div class="services__licenses-block">
          <span class="services__licenses-block-description">{{licenses.span}}</span>
          <p class="services__licenses-block-cost">{{licenses.cost}}</p>
          <BaseButton theme="light" class="services__licenses-block-button">{{licenses.button}}</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import ServicesList from '@/data/ServicesList.json'

export default {
  name: 'AppServices',
  components: { BaseButton },

  data () {
    return {
      need: ServicesList?.need || [],
      start: ServicesList?.start || [],
      licenses: ServicesList?.licenses || []
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  margin-top: 180px;

  &__left {
  }

  &__need {
    display: flex;
    align-items: flex-start;
    padding: 41px 60px 52px 44px;

    &-block {
      padding-left: 43px;

      &-title {
        font: 400 22px/32px $fontRegularFS;
      }
      &-text {
        font: 400 16px/28px $fontRegularFS;
      }

      &-links {
        display: flex;
        gap: 40px;

      }

      &-link {
        display: flex;
        gap: 12px;
        font: 400 16px/28px $fontRegularOS;
        color: $darkBlue;
      }
    }
  }

  &__start {
    display: flex;
    align-items: flex-start;
    padding: 34px 60px 40px 41px;

    &-block {
      padding-left: 43px;

      &-title {
        font: 400 22px/32px $fontRegularFS;
      }
      &-text {
        font: 400 16px/28px $fontRegularFS;
      }
      &-button {
        margin-top: 12px;
        color: $light;
        font: 500 14px/17px $fontMediumFS;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
    }
  }

  &__right {
  }

  &__licenses {
    max-height: 384px;
    max-width: 504px;
    width: 100%;
    height: 100%;
    background-color: $darkBlue;
    padding: 40px;

    &-title {
      color: $light;
      font: 500 36px/50px $fontMediumFS;
    }
    &-text {
      color: $light;
      font: 400 18px/32px $fontRegularOS;
      margin-top: 40px;
    }
    &-block {
      display: flex;
      align-items: center;
      margin-top: 40px;

      &-description {
        font: 400 22px/32px $fontRegularFS;
        color: $yellow;
      }

      &-cost {
        font: 500 46px/64px $fontMediumFS;
        color: $yellow;
        margin: 0 40px 0 10px;

      }

      &-button {
        font: 500 14px/17px $fontMediumFS;
        letter-spacing: 0.08em;
        color: $darkGrey;
        text-transform: uppercase;
      }
    }
  }
}
</style>
