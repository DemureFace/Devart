<template>
  <div class="main-handle container">
    <h1 class="main-handle__title">{{title}}</h1>
    <Tab />
  </div>
</template>

<script>
import Tab from './Tabs/Tab.vue'
export default {
  name: 'MainHandle',
  data () {
    return {
      title: 'Unveil differences between formatting of predefined styles'
    }
  },
  components: { Tab }
}
</script>

<style lang="scss" scoped>
.main-handle {
  margin-top: 203px;

  &__title {
    font: 300 36px/50px $fontLightFS;
    text-align: center;
  }
}
</style>
