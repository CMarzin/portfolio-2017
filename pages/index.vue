<template>
  <div class="container__main-title">
    JOCHEN GERZ
    <div class="box-test"></div>
    <!-- <playground></playground> -->
    
  </div>
  
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'
import { EventBus } from '~/components/Bus/event-bus.js'

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
  }
}
</script>
