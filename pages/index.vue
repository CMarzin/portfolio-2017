<template>
  <!-- <section>
    <playground></playground>
  </section> -->
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'

export default {
  layout: 'default',
  components: {
    'playground': Playground
  },
  mounted () {
    console.log('routes', this.$router.options.routes)
    console.log(think({
      text: 'Hello there',
      eyes: 'oo',
      wrapLength: 40,
      wrap: false
    }))
  }
}
</script>
