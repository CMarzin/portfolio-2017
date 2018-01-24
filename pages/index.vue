<template>
  <!-- <section>
    <playground></playground>
  </section> -->
  <div class="container__main-title">
    JOCHEN GERZ
    <svg>
      <rect id="rect" width="25" height="25" x="10%" y="10%" fill="gray" stroke="rgba(80, 80, 80, 1)" stroke-width="0px" />
    </svg>
  </div>
  
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'
import { EventBus } from '~/components/Bus/event-bus.js'
import velocity from 'velocity'

EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
})

export default {
  layout: 'default',
  components: {
    'playground': Playground
  },
  mounted () {
    console.log(think({
      text: 'Hello there',
      eyes: 'oo',
      wrapLength: 40,
      wrap: false
    }))
        $svgRectangle.velocity({
        /* Coordinate animation works. */
        x: 200,
        r: 25,
        /* 2D transforms work. */
        translateX: "200px",
        /* 3D transforms work in non-IE browsers. */
        translateZ: "200px",
        /* "Fill" color animation works. */
        fill: "#ff0000",
        strokeRed: 255,
        strokeGreen: 0,
        strokeBlue: 0,
        /* Some standard CSS properties work. */
        opacity: 1,
        width: "50%"
    })
  }
}
</script>
