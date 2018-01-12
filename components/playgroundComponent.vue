<template>
  <div id="renderCanvas"><h1>Ceci est le playground component</h1></div>
</template>

<script>
import Playground from '~/assets/pixi/playground.js'

export default {
  name: 'Playground',
  mounted () {
    Playground()
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>