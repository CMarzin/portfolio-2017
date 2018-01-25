<template>
  <div class="container__main">
    <nuxt/>
    <h1 class="container__main-logo">Corentin Marzin</h1>
    <div class="container__main-about">
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
import anime from 'animejs'

export default {
  name: '',
  components: {
    'footerNav': footerNav,
    'horizontalNav': horizontalNav
  },
  mounted () {
    console.log('anime', anime)
    // anime({
    //   targets: 'h3',
    //   translateX: [
    //     { value: 100, duration: 1200 },
    //     { value: 0, duration: 800 }
    //   ],
    //   rotate: '1turn',
    //   backgroundColor: '#FFF',
    //   duration: 2000,
    //   loop: true
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>