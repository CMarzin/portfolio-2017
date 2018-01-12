<template>
  <div id="renderCanvas"><h1>Ceci est le playground component</h1></div>
</template>

<script>
// import Playground from '~/assets/playground.js'

export default {
  name: 'Playground',
  mounted () {
    /* global PIXI */
    const renderer = PIXI.autoDetectRenderer(400, 400)

    // 2. Append canvas element to the body
    document.body.appendChild(renderer.view)

    // 3. Create a container that will hold your scene
    const stage = new PIXI.Container()

    // add stage to the canvas
    render()

    function render () {
      renderer.render(stage)
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>