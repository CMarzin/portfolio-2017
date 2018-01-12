<template>
  <section>
    <playground></playground>
  </section>
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'

export default {
  components: {
    'playground': Playground
  },
  data () {},
  mounted () {
    console.log(think({
      text: 'Hello there',
      eyes: 'oo',
      wrapLength: 40,
      wrap: false
    }))
  }
}
</script>

<style>
</style>
