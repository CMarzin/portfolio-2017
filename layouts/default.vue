<template>
  <div class="container__main">
    <nuxt/>
    <div class="container__main-playground">
        <h1 class="container__main-logo">Corentin Marzin</h1>
        <button @click="launchAnimLeftToRight()">CLICK left to right</button>
        <button @click="launchAnimRightToLeft()">CLICK right to left</button>
        <button @click="reset()">RESET</button>
        <div :class="['container__main-title', customClassText]">
           {{ this.$store.state.currentProjectTitle }}
           <span :class="['cover__box', customClassBgNext]"></span>
           <span :class="['cover__boxLate', customClassBgNext]"></span>
        </div>
        <div class="container__main-photos">
           <img class="container__main-photo" src="~/static/gerz.jpg" alt="">
        </div>
    </div>

    <div :class="['container__main-about', customClassBgNext]">
      <h3>ABOUT</h3>
    </div>

      <horizontalNav></horizontalNav>
      
      <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '~/components/Footer/footerNavComponent'
import horizontalNav from '~/components/Horizontal-Navigation/horizontalNavComponent'

import anime from 'animejs'

export default {
  name: '',
  components: {
    'footerNav': footerNav,
    'horizontalNav': horizontalNav
  },
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToSecondNextProject].color
      return customClass
    }
  },
  methods: {
    reset: function () {
      anime({
        targets: '.cover__box',
        scaleX: 1
      })
    },
    launchAnimLeftToRight: function () {
      anime({
        targets: '.cover__box',
        duration: 250,
        easing: 'easeInQuad',
        transformOrigin: ['100% 0%', '100% 0%'],
        scaleX: [
          { value: 0, duration: 250 },
          { value: 1, duration: 250 }
        ]
      })
    },
    launchAnimRightToLeft: function () {
      anime({
        targets: '.cover__box',
        duration: 250,
        easing: 'easeInQuad',
        transformOrigin: ['100% 0%', '0% 100%'],
        scaleX: [
          { value: 0, duration: 250 },
          { value: 1, duration: 250 },
          { value: 0, duration: 250 }
        ]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cover__box {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  transform: scale(0);
}
</style>