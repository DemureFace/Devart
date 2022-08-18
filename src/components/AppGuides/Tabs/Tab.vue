<template>
  <div>
  <div id="app">
    <div class="tabs">
      <ul class="tabs__list">
      <li
          v-for="(item, index) in items"
          :key="item"
          class="tabs__item"
          :class="[index === active ? 'tabs__item-active' : '']"
          @click="activate(index)">

          {{item}}

          </li>

    </ul>

    <div  class="tabs__content">
      <div class="tabs__content-right">
        <h5 class="tabs__content-title">Boost coding productivity</h5>
        <p class="tabs__content-text">SQL Complete is designed to help the user increase their coding speed, dedicate more time to actually writing code, help them make it more understandable, and reduce the number of syntax errors.</p>
        <p class="tabs__content-description">Being an advanced SQL IntelliSense tool, SQL Complete helps most of these benefits have an immediate effect. It offers valid context-specific suggestions to speed up query writing. During typing, it conveniently leads the user through the syntax of SQL queries and commands.</p>
        <a href="" class="tabs__content-link">Learn more <img src="@/assets/img/svg/icons/arrow-left.svg" alt="ArrowLeft" /></a>
        </div>
        <div class="tabs__content-img">
          <img src="@/assets/img/png/Graphica.png" alt="">
        </div>
    </div>
  </div>
</div>
  </div>

</template>

<script>

export default {
  name: 'Tab-s',

  data: function () {
    return {
      active: 0,
      items: [
        'Boost productivity',
        'Reuse code modules',
        'Improve code quality'
      ]
    }
  },
  methods: {
    activate (index) {
      this.active = index
    }
  },

  components: {

  }
}

</script>

<style lang="scss" scoped>
.tabs {

  &__list {
    position: relative;
    margin-bottom: 10px;
    list-style:none;
    padding-bottom: 20px;
    display:flex;

    &::before{
      content: "";
      position: absolute;
      border-bottom: 3px solid $borderButton;
      width: 100%;
      bottom: 20px;
      left: 0;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    @include transition;

    &-right {
      width: 750px;
    }
    &-title {
      font: 400 26px/32px $fontRegularFS;
      color: $darkGrey;
    }
    &-text {
      font: 400 16px/28px $fontRegularOS;
      color: $fontGrey;
      margin: 15px 0;
    }
    &-description {
      font: 400 16px/28px $fontRegularOS;
      color: $fontGrey;
      margin-bottom: 15px;
    }
    &-link {
      font: 500 14px/22px $fontMediumFS;
      color: $darkBlue;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    border-bottom: 3px solid $light;
    font: 500 16px/19px $fontMediumFS;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $fontTab;

    @include transition;
    @include hover {
      color: $darkGrey;
      cursor:pointer;
    }

      &-active {
        color: $darkGrey;
        border-bottom: 3px solid $blue;
        z-index: 1;
      }
    }

    &__icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 10px;

    &_0 {
      background: center / contain no-repeat url("@/assets/img/svg/icons/rocket.svg");
    }
    &_1 {
      background: center / contain no-repeat url("@/assets/img/svg/icons/refresh.svg");
    }
    &_2 {
      background: center / contain no-repeat url("@/assets/img/svg/icons/union.svg");
    }
  }

  }
</style>
