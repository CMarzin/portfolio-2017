<template>
  <div class="name">
    Cher ami page
    <p><nuxt-link to="/">Index</nuxt-link></p>
    <p><nuxt-link to="/bethedrop">Be the drop</nuxt-link></p>
    <p><nuxt-link to="/heaven">Heaven</nuxt-link></p>
    <p><nuxt-link to="/fidgetcube">Fidget Cube</nuxt-link></p>
    <p><nuxt-link to="/starwars">Star Wars</nuxt-link></p>
    <p><nuxt-link to="/about">About</nuxt-link></p>
    <p><nuxt-link to="/cherami/description">descriptions</nuxt-link></p>
    <nuxt-child/>
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