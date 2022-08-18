<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :target="target"
    :disabled="disabled"
    :class="classes"
    @click="onClick"
  >

    <i v-if="icon" :class="`button__icon button__icon_${icon}`" />

    <span class="button__text">
      <slot name="default"></slot>
    </span>

  </component>
</template>

<script>

export default {
  name: 'BaseButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'blue',
      validator: (type) =>
        [
          'blue',
          'transparent',
          'green',
          'light'
        ].includes(type)
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag () {
      if (!this.url) {
        return 'button'
      } else if (
        /(http|https)|(tel:)|(mailto:)/.test(this.url) ||
        this.target === '_blank'
      ) {
        return 'a'
      } else {
        return 'router-link'
      }
    },

    href () {
      return this.tag !== 'button' ? this.url : null
    },
    to () {
      return this.tag === 'router-link' ? this.url : null
    },
    classes () {
      return [
        'button',
        `button_${this.theme}`,
        { button_rounded: this.rounded }
      ]
    }
  },
  methods: {
    onClick (event) {
      if (this.tag === 'nuxt-link') {
        event.preventDefault()
      }
      if (this.disabled) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  height: 48px;
  padding: 0 24px;
  border: none;

&_blue {
  background-color: $darkBlue;

  @include transition;

  @include hover {
    cursor: pointer;
    background-color: $light;
    color: $darkBlue;
    box-shadow: rgba($blue, 0.4) -5px 5px, rgba($blue, 0.3) -10px 10px, rgba($blue, 0.2) -15px 15px;
  }

}

&_transparent {
  background-color: transparent;
  cursor: pointer;

  @include transition;
  @include hover {
    cursor: pointer;
    background-color: $light;
    color: $darkBlue;
    box-shadow: $light 0px 0px 15px;
  }

}

&_green {
  background-color: $green;
  border: none;
  cursor: pointer;

  @include transition;
  @include hover {
    cursor: pointer;
    background-color: $light;
    color: $green;
    box-shadow: $green -5px 5px 15px;
  }
}

&_light {
  background-color: $light;
  cursor: pointer;

  @include transition;
  @include hover {
    cursor: pointer;
    color: $darkBlue;
    box-shadow: rgba($light, 0.4) -5px 5px, rgba($light, 0.3) -10px 10px, rgba($light, 0.2) -15px 15px;
  }
}
  &__icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 10px;

    &_play {
      background: center / contain no-repeat url("@/assets/img/svg/icons/icon-play.svg");
    }
    &_note {
      background: center / contain no-repeat url("@/assets/img/svg/icons/icon-note.svg");
    }
  }
}
</style>
