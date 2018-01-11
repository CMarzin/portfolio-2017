<template>
  <div class="name">
    hello this is the index page
    <Navigation></Navigation>
  </div>
</template>

<script>
import {createClient} from 'contentful'
import Navigation from '@/components/NavigationComponent'

export default {
  name: '',
  components: {
    'Navigation': Navigation
  },
  data () {
    return {}
  },
  beforeMount () {
    const client = createClient({
      space: process.env.spaceID,
      accessToken: process.env.token
    })
    client.getEntry('3y89bmQZbGm66EWGsGOcsS').then((data) => {
      console.log('test')
      this.$store.commit('saveData', data.fields)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>