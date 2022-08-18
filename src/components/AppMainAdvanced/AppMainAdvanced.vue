<template>
  <div class="main-advanced ">
    <div class="main-advanced__top container">
      <div class="main-advanced__top-logo">
        <img src="@/assets/img/svg/main/Logo.svg" alt="LOGO">
        <span>SQL Complete</span>
      </div>
      <BaseButton theme="green" class="main-advanced__top-button">Buy now</BaseButton>
    </div>

    <div class="main-advanced__info container">
      <div class="main-advanced__info-right">
        <h3 class="main-advanced__title">{{text.title}}</h3>
        <p class="main-advanced__text">{{text.text}}</p>
        <p class="main-advanced__description">{{text.description}}</p>
        <div class="main-advanced__buttons">
        <BaseButton theme="blue" icon="play" class="main-advanced__buttons-play">watch the introductory video</BaseButton>
        <BaseButton theme="transparent" icon="note" class="main-advanced__buttons-note">Read WhitePaper</BaseButton>
        </div>
      </div>

    <div class="main-advanced__acordeon">
      <accordion>
          <accordion-item  v-for="text in accordion" :key="text.description">

            <template v-slot:accordion-trigger>
              <h3 class="main-advanced__acordeon-title">{{text.item}}</h3>
              <img src="@/assets/img/svg/icons/arrow-bottom.svg" alt="arrow" class="main-advanced__acordeon-title-img"/>
            </template>

            <template v-slot:accordion-content>
              <span class="main-advanced__acordeon-description">{{text.description}}</span>

            </template>
          </accordion-item>

      </accordion>
      </div>
    </div>
  </div>
</template>

<script>
import MainAdvanced from '@/data/MainAdvancedList.json'
import Accordion from '@/components/Accordion/accordion'
import AccordionItem from '@/components/Accordion/accordion-item'
import BaseButton from '@/components/base/BaseButton.vue'

export default {
  name: 'MainAdvanced',
  components: {
    BaseButton,
    Accordion,
    AccordionItem
  },

  data () {
    return {
      accordion: MainAdvanced?.accordion || [],

      selectedLenguage: '',

      text: {
        title: 'Advanced SQL Autocompletion Pretty SQL Formatting Smart Code Refactoring',
        text: 'SQL Complete is an advanced solution for SQL database development, management, and administration. Available as an add-in for Visual Studio and SSMS, the tool offers excellent autocompletion capabilities.',
        description: 'Write, beautify, refactor your SQL code easily and boost your productivity dramatically due to the features that are included in SQL Complete but are lacking in Management Studio and Visual Studio IntelliSense.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-advanced {
&::before {
    content: "";
    z-index: -1;
    width: 99vw;
    height: 76px;
    position: absolute;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
}
&__top {
display: flex;
justify-content: space-between;
padding-top: 12px;

}
&__top-logo {
  display: flex;
  gap: 15px;
  align-items: center;
  font: 500 22px/26px $fontMediumFS;
}

&__top-button {
  color: $light;
  font: 500 13px/15px $fontMediumFS;
  padding: 5px 32px;
  letter-spacing: 0.15em;
  text-transform: uppercase;

}

&__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;

}
&__info-right {
  max-width: 630px;
  width: 100%;
}
&__title {
  font: 300 46px/64px $fontLightFS;
  color: $darkGrey;
  margin-bottom: 25px;
  &:focus-within {
    &__acordeon-title-img{
      transform: rotate(180deg);
    }
  }
}
&__text {
  font: 400 18px/32px $fontRegularOS;
  color: $fontGrey;
  margin-bottom: 20px;
}
&__description {
  font: 400 18px/32px $fontRegularOS;
  color: $fontGrey;
  margin-bottom: 40px;
}

&__acordeon {
  max-width: 690px;
  width: 100%;

  &::before {
    position: absolute;
    content: "free";
    padding: 4px 6px;
    color: $light;
    font: 500 13px/20px $fontMediumFS;
    text-transform: uppercase;
    background-color: $red;
    border-radius: 3px;
    transform: translate(253px, 7px);
  }

  &-title {
    font: 500 18px/24px $fontMediumFS;
  }

  &-description {
    font:400 16px/28px $fontRegularOS;
    color: $fontGrey;
  }
}

&__buttons {
  display: flex;
  gap: 20px;

  &-play {
    font: 500 14px/28px $fontMediumFS;
    color: $light;
    letter-spacing: 0.1em;
    text-transform: uppercase;

  }

  &-note {
    border: 1px solid $borderButton;
  }

}
}
.accordion__trigger_active {

  .main-advanced__acordeon-title-img {
    transform: rotate(180deg);
    @include transition;
  }
}
</style>
