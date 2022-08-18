<template>
  <div
    v-click-outside="closeDropdown"
    :class="['dropdown', { dropdown_active: isOpen }]"
  >
    <div @click="showDropdown" class="dropdown__head">
      <span class="dropdown__label">{{ selectedLabel }}</span>

      <transition name="fade" mode="out-in">
        <div class="dropdown__wrap">
          <div class="dropdown__body" :class="{ active: isOpen }">
            <slot name="body">
              <div
                v-for="(item, i) in list"
                :key="i"
                class="dropdown__body-item"
                @click="selectItem(item)"
              >
                {{ item.label }}
              </div>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',
  props: {
    items: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isOpen: false,
      selectedLabel: this.items[0]?.label || ''
    }
  },
  computed: {
    list () {
      return Object.values(this.items) || []
    }
  },
  methods: {
    showDropdown () {
      this.isOpen = !this.isOpen
    },
    closeDropdown () {
      this.isOpen = false
    },
    selectItem (item) {
      this.selectedLabel = item.label
      this.$emit('input', item)
    }
  }
}
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: 100%;
  min-width: 17px;
  max-width: 17px;
  @include hover {
    cursor: pointer;
  }
  &_active {
    .dropdown__arrow {
      transform: rotate(180deg);
    }
  }
  &__head {
    position: relative;
    display: flex;
    width: 25px;
    height: 22px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font: 600 14px/24px $fontSemiBoldFS;
    transition: 0.5s;
    color: $light;
  }
  &__label {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    font: 600 14px/24px $fontSemiBoldFS;
    text-align: left;
    white-space: nowrap;
    transition: all 0.3s ease;
  }
  &__wrap {
    position: absolute;
    top: calc(100% + 15px);
    left: 0;
    z-index: 50;
    display: flex;
    width: 100%;
    max-height: 205px;
    margin-top: 1px;
    background-color: $backgroundHeader;
    border-radius: 5px;
    box-shadow: 0 4px 50px rgba(89, 89, 89, 0.1);
  }
  &__body {
    width: 100%;
    max-height: 0;
    margin: 0 15px;
    overflow-y: auto;
    opacity: 0;
    transition: all 0.5s;
    overflow: hidden;
    @include custom-scroll(null, dropdown);
    &.active {
      max-height: 205px;
      margin: 25px 5px;
      opacity: 1;
    }
  }
  &__body-item {
    padding: 0 10px;
    margin-bottom: 15px;
    font: 600 14px/24px $fontSemiBoldFS;
    color: $black;
    transition: color 0.5s;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      color: $blue;
    }
  }
}
</style>
