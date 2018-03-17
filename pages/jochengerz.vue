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
    css: false,
    beforeEnter (el) {
      const leftVolet = el.querySelector('.container__left-prev-volet')
      const rightVolet = el.querySelector('.container__right-next-volet')
      leftVolet.setAttribute('style', 'transform: scaleY(0)')
      rightVolet.setAttribute('style', 'transform: scaleY(0)')
      console.log('test beforeEnter', rightVolet)
    },
    enter (el, done) {
      let previousColor = this.$store.state.projects[this.$store.state.pathToPreviousProject].color
      let nextColor = this.$store.state.projects[this.$store.state.pathToNextProject].color
      let hexa = ''
      switch (previousColor) {
        case 'blue':
          hexa = '#A1BDD2'
          break
        case 'yellow':
          hexa = '#F5C316'
          break
        case 'red':
          hexa = '#CB0804'
          break
      }
      let nextHexa = ''
      switch (nextColor) {
        case 'blue':
          nextHexa = '#A1BDD2'
          break
        case 'yellow':
          nextHexa = '#F5C316'
          break
        case 'red':
          nextHexa = '#CB0804'
          break
      }
      anime({
        targets: '.container__left-prev-volet',
        duration: 1500,
        easing: 'easeOutExpo',
        backgroundColor: [{ value: hexa }],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 1
      })
      anime({
        targets: '.container__right-next-volet',
        duration: 1500,
        easing: 'easeOutExpo',
        backgroundColor: [{ value: nextHexa }],
        transformOrigin: ['50% 100% 0', '50% 100% 0'],
        scaleY: 1
      })
      done()
    },
    beforeLeave (el) {
      // const test = el.querySelector('.container__left-prev-volet')
      // test.setAttribute('style', 'transform: scaleY(0)')
      // console.log('test beforeLeave', test)
      // console.log('leave', el)
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
      // anime({
      //   targets: '.container__left-prev-volet',
      //   duration: 0,
      //   easing: 'easeOutExpo',
      //   backgroundColor: [{ value: 'white' }],
      //   transformOrigin: ['0% 0% 0', '0% 0% 0'],
      //   scaleY: 0
      // })
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
