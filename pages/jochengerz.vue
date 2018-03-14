<template>
  <div class="transition-page" style="transform: scaleX(0)"></div>
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'
import { EventBus } from '~/components/Bus/event-bus.js'

import anime from 'animejs'
import UTILS from '~/assets/helpers/function.js'

EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
})

export default {
  layout: 'default',
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      console.log('enterClass', el)
      anime({
        targets: el,
        duration: 500,
        easing: 'easeOutExpo',
        backgroundColor: [{ value: '#F5C316' }],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleX: [
          {
            value: 1, delay: 250
          },
          {
            value: 0, delay: 250
          }
        ]
      })
      done()
    }
  },
  components: {
    'playground': Playground
  },
  mounted () {
    console.log('UTILS', UTILS)
    console.log(think({
      text: 'Hello there',
      eyes: 'oo',
      wrapLength: 40,
      wrap: false
    }))
  }
}
</script>
