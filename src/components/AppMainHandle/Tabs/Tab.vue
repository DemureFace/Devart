<template>
  <div>
  <div id="app">
    <div class="tabs">

      <ul class="tabs__list">
        <h4 class="tabs__list-title">Formatting profiles</h4>
      <li
          v-for="(item, index) in items"
          :key="index"
          class="tabs__item"
          :class="[index === active ? 'tabs__item-active' : '']"
          @click="activate(index)">

          {{item}}</li>

    </ul>

    <div class="tabs__content">
      <img src="@/assets/img/png/Test.png" alt="TestImg" class="tabs__content-img">
      <div class="tabs__content-buttons">
        <BaseButton
        theme="transparent"
        class="tabs__content-button">After formatting</BaseButton>
        <BaseButton
        theme="transparent"
        class="tabs__content-button" >Before formatting</BaseButton>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'Tab-s',
  data: function () {
    return {
      active: 0,
      items: [
        'Collapsed',
        'Commas brfore',
        'Compact',
        'Default',
        'Extended'
      ]
    }
  },
  methods: {
    activate (index) {
      this.active = index
    }
  },
  components: {
    BaseButton
  }
}

</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  &__list {

    &-title {
      font: 400 22px/32px $fontRegularFS;
    }
}
    &__item {
      padding: 0.6rem;
      margin:0 0.5rem 0 0;
      font: 400 18px/30px $fontRegularFS;
      color: $fontTab;
      border-left: 2px solid $light;
      cursor:pointer;
      opacity:0.75;
      @include transition;

      &-active {
        color: $darkGrey;
        border-left: 2px solid $darkBlue;
        opacity:1;
        box-shadow:none;
      }
    }

  &__content {
    background:#fff;
    padding:1rem;
    border-radius:0 0.5rem 0.5rem 0.5rem;

    &-img {
      border: 1px solid $borderGrey;
      box-shadow: 0px 29px 100px -60px $grey;
    }

    &-buttons {
      display: flex;
      justify-content: space-between;

    }

    &-button {
      padding: 0;
      font: 500 18px/24px $fontMediumFS;
      color: $fontTab;

      &:focus-within {
        color: $darkGrey;
      }
    }
  }
}
</style>
