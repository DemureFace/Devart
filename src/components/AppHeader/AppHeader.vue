<template>
  <header>
    <div class="header container">
      <img src="@/assets/img/svg/header/headerLogo.svg" alt="headerLogo" class="header__logo">

      <Nav :list="list"/>

      <div class="header__profile">
        <img src="@/assets/img/svg/header/loupe.svg" alt="loupe" class="header__loupe">
        <img src="@/assets/img/svg/header/cart.svg" alt="cart" class="header__cart">

        <BaseDropdown
          v-model="selectedLenguage"
          :items="lenguages"
          @input="setLenguage"
        />
        <p class="header__profileName">AndreyV</p>
      </div>
    </div>
  </header>
</template>

<script>
import TheHeaderList from '@/data/TheHeaderList.json'
import BaseDropdown from '@/components/base/BaseDropdown'
import Nav from './Nav/Nav.vue'

export default {
  name: 'TheHeader',

  components: {
    BaseDropdown,
    Nav
  },

  data () {
    return {
      description: TheHeaderList?.description || '',
      list: TheHeaderList?.list || [],
      lenguages: [
        {
          label: 'En'
        },
        {
          label: 'Ru'
        },
        {
          label: 'De'
        }
      ],
      selectedLenguage: ''
    }
  },

  methods: {
    setLenguage (lenguage) {
      this.selectedLenguage = lenguage.label
      console.log(lenguage.label)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 24px 0;
  background-color: $backgroundHeader;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {

  }

  &__profile {
    display: flex;
    align-items: center;
    gap: 40px;

  }

  &__loupe {
    width: 18px;
    height: 18px;
  }

  &__cart {
    width: 24px;
    height: 18px;
  }

  &__profileName {
    font: 400 16px/28px $fontRegularFS;
  }

}
</style>
