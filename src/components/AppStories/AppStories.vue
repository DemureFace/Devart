<template>
<div class="stories container">
  <div class="stories__top">
    <h2 class="stories__top-title">Success Stories</h2>
  </div>

      <div class="stories__cards">
        <Cards
          v-for="card in card"
          :key="card.title"
          :text="card.text"
          :title="card.title"
          :description="card.description"
          :img="card.img"
          :icon="card.icon"
          class="stories__card"
        />
      </div>
</div>

</template>

<script>
import Cards from './cards/Cards.vue'
import StoriesList from '@/data/StoriesList.json'

export default {
  name: 'Storie-s',
  components: { Cards },

  data () {
    return {
      card: StoriesList?.card || []
    }
  }
}
</script>

<style lang="scss" scoped>
.stories {
  margin-top: 190px;
  .stories__top {
  }
  .stories__top-title {
    font: 300 36px/50px $fontLightFS;
  }
  .stories__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 40px;
    margin-top: 45px;
    margin-bottom: 100px;
  }
  .stories__card {
  }
}
</style>
