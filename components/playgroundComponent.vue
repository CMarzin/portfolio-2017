<template>
  <!-- <div id="renderCanvas"><h1>Ceci est le playground component</h1></div> -->
  <!-- <canvas id="world"></canvas> -->
</template>

<script>
// import Playground from '~/assets/pixi/bunnyPlayground.js'
import PlaygroundMatter from '~/assets/matter/matterPlayground.js'

export default {
  name: 'Playground',
  mounted () {
    // Playground()
    PlaygroundMatter()
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>