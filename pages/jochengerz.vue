<template>
  <div class="container__main">
    <div class="transition-page" style="transform: scaleX(0)"></div>
    <left></left>
    <Middle></Middle>
    <Right></Right>
  </div>
</template>

<script>
import { think } from 'cowsay'
import Playground from '~/components/playgroundComponent'
import { EventBus } from '~/components/Bus/event-bus.js'

import anime from 'animejs'
import UTILS from '~/assets/helpers/function.js'

import Left from '~/components/Left/left'
import Middle from '~/components/Middle/middle'
import Right from '~/components/Right/right'

EventBus.$on('i-got-clicked', clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
})

export default {
  layout: 'default',
  data () {
    return {
      color: this.$store.state.projects[this.$store.state.pathToPreviousProject].color
    }
  },
  watch: {
    color: function () {
      console.log('kjdsnfdskjnfkjfnsknf')
      this.color = this.$store.state.projects[this.$store.state.pathToPreviousProject].color
    }
  },
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgPrevious: function () {
      this.color = this.$store.state.projects[this.$store.state.pathToPreviousProject].color
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    }
  },
  transition: {
    mode: 'out-in',
    css: false,
    enter (el, done) {
      let currentColor = this.$store.state.projects[this.$store.state.pathToPreviousProject].color
      let currentHexa = ''
      switch (currentColor) {
        case 'blue':
          currentHexa = '#A1BDD2'
          break
        case 'yellow':
          currentHexa = '#F5C316'
          break
        case 'red':
          currentHexa = '#CB0804'
          break

        default:
          break
      }
      anime({
        targets: '.container__left-prev-volet',
        duration: 1500,
        easing: 'easeOutExpo',
        backgroundColor: [{ value: currentHexa }],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 1
      })
      done()
    },
    leave (el, done) {
      console.log('leave', el)
      // let currentColor = this.$store.state.projects[this.$store.state.pathToPreviousProject].color
      // let currentHexa = ''
      // switch (currentColor) {
      //   case 'blue':
      //     currentHexa = '#A1BDD2'
      //     break
      //   case 'yellow':
      //     currentHexa = '#F5C316'
      //     break
      //   case 'red':
      //     currentHexa = '#CB0804'
      //     break

      //   default:
      //     break
      // }
      anime({
        targets: '.container__left-prev-volet',
        duration: 1500,
        easing: 'easeOutExpo',
        backgroundColor: [{ value: 'white' }],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 0
      })
      done()
    }
  },
  components: {
    'playground': Playground,
    'Left': Left,
    'Middle': Middle,
    'Right': Right
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
