<template>
  <AppHeader />

  <main class="main">
    <AppMainBaner />
    <AppMainAdvanced />
    <AppGuides />
    <AppMainHandle />
    <AppMainBrands />
    <AppServices />
    <AppStories />
  </main>

  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppMainBaner from '@/components/AppMainBaner/AppMainBaner.vue'
import AppMainAdvanced from '@/components/AppMainAdvanced/AppMainAdvanced.vue'
import AppGuides from '@/components/AppGuides/AppGuides.vue'
import AppMainHandle from '@/components/AppMainHandle/AppMainHandle.vue'
import AppMainBrands from '@/components/AppMainBrands/AppMainBrands.vue'
import AppServices from '@/components/AppServices/AppServices.vue'
import AppStories from '@/components/AppStories'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppMainBaner,
    AppMainAdvanced,
    AppGuides,
    AppMainHandle,
    AppMainBrands,
    AppServices,
    AppStories,
    AppFooter
  }
}
</script>

<style lang="scss" scoped></style>
