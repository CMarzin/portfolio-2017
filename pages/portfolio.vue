<template>
  <div class="container__main">
      <Left></Left>
      <Middle></Middle>
      <Right></Right>
  </div>
</template>

<script>
import Left from '~/components/Left/left'
import Middle from '~/components/Middle/middle'
import Right from '~/components/Right/right'

import anime from 'animejs'

export default {
  name: '',
  layout: 'default',
  data () {
    return {}
  },
  components: {
    'Left': Left,
    'Middle': Middle,
    'Right': Right
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>