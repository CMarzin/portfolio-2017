<template>
  <div class="name">
    hello this is the bethedrop page
    <p><nuxt-link to="/">Index</nuxt-link></p>
    <nuxt-child/>
    <p><nuxt-link to="/bethedrop/description">Be the drop descriptions</nuxt-link></p>
    <!--<p><nuxt-link to="/heaven">Heaven</nuxt-link></p>
    <p><nuxt-link to="/cherami">Cher Ami</nuxt-link></p>
    <p><nuxt-link to="/fidgetcube">Fidget Cube</nuxt-link></p>
    <p><nuxt-link to="/starwars">Star Wars</nuxt-link></p>
    <p><nuxt-link to="/about">About</nuxt-link></p>-->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>