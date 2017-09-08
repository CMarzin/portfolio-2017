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
    let test = 3
    console.log('fds', test)
    const client = createClient({
      space: 'tw1iov2cs9xm',
      accessToken: '5629700ff8f1892f03ca2c4d0ff1a0c60dd6ba17705661f8ff68986bf2b62616'
    })
    client.getEntry('3y89bmQZbGm66EWGsGOcsS').then((entry) => console.log(entry))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>