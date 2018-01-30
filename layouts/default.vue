<template>
  <div class="container__main">
    <nuxt/>
    <div class="container__main-playground">
        <h1 class="container__main-logo">Corentin Marzin</h1>
        <div :class="['container__main-title', customClassText]">
           {{ this.$store.state.currentProjectTitle }}
        </div>
        <div class="container__main-photos">
           <img class="container__main-photo" src="~/static/gerz.jpg" alt="">
        </div>
    </div>

    <div :class="['container__main-about', customClassBgNext]">
      <h3>ABOUT</h3>
    </div>

    <!-- HORIZONTAL Navigation -->
      <horizontalNav></horizontalNav>
    <!-- HORIZONTAL Navigation -->

    <!-- FOOTER Navigtation -->
      <footerNav></footerNav>
    <!-- FOOTER Navigtation -->

  </div>
</template>

<script>
import footerNav from '~/components/Footer/footerNavComponent'
import horizontalNav from '~/components/Horizontal-Navigation/horizontalNavComponent'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>