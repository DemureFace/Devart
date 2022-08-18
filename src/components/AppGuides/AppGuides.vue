<template>
  <div class="guid container">
    <h1 class="guid-title">Check out our quick video guides</h1>
    <Tab />
  </div>
</template>

<script>
import Tab from './Tabs/Tab.vue'
export default {
  name: 'AppGuides',
  components: { Tab },

  data () {
    return {
      icon: [
        'rocket',
        'refresh',
        'union'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.guid {
  margin-top: 212px;

  &-title {
    font: 300 36px/50px $fontLightFS;
    margin-bottom: 50px;
  }

}
</style>
