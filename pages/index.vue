<template>
  <div class="name">
    hello this is the index page
    <p><nuxt-link to="/bethedrop">Be the drop</nuxt-link></p>
    <p><nuxt-link to="/heaven">Heaven</nuxt-link></p>
    <p><nuxt-link to="/cherami">Cher Ami</nuxt-link></p>
    <p><nuxt-link to="/fidgetcube">Fidget Cube</nuxt-link></p>
    <p><nuxt-link to="/starwars">Star Wars</nuxt-link></p>
    <p><nuxt-link to="/about">About</nuxt-link></p>
  </div>
</template>

<script>
import {createClient} from 'contentful'
export default {
  name: '',
  data () {
    return {}
  },
  beforeMount () {
    const client = createClient({
      space: process.env.spaceID,
      accessToken: process.env.token
    })
    client.getEntry('3y89bmQZbGm66EWGsGOcsS').then((data) => {
      this.$store.commit('saveData', data.fields)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>