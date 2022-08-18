<template>
  <div class="card">
    <img :src="imgSrc" alt="" class="card__img">
    <h5 class="card__title">{{title}}</h5>
    <p class="card__description">{{description}}</p>
    <span class="card__text">
      <img :src="iconSrc" alt="" class="card__icon">
      {{text}}
    </span>
  </div>
</template>

<script>

export default {
  name: 'card-s',

  props: {
    title: {
      type: String,
      default: 'Card Title'
    },
    text: {
      type: String,
      default: 'Card Text'
    },
    description: {
      type: String,
      default: 'Card Title'
    },
    img: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },

  computed: {
    imgSrc () {
      return `${require(`@/assets/img/card/${this.img}.png`)}`
    },
    iconSrc () {
      return `${require(`@/assets/img/card/${this.icon}.svg`)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  @include transition;
  &__img {
  }
  &__title {
    font: 500 18px/24px $fontMediumFS;
  }
  &__description {
    font: 400 16px/28px $fontRegularFS;
  }
  &__text {
    display: flex;
    align-items: center;
    font: 600 14px/24px $fontSemiBoldFS;
  }
  &__icon {
  }
}
</style>
