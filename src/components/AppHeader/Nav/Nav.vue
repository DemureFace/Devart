<template>
  <nav class="nav">
      <ul class="nav__list">
        <li
        v-for="item in list"
        :key="item.item"
        class="nav__item">
        <p>{{ item.item }}</p>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavHeader',

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {

&__list {
display: flex;
gap: 0 40px;
font: 400 16px/28px $fontRegularFS;
color: $light;
}
}
</style>
