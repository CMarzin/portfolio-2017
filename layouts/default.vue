<template>
  <div class="container__main">
    <nuxt/>
    <div class="logo"><a href="/">Corentin Marzin</a></div>
    <!-- <Left></Left>
    <Middle></Middle>
    <Right></Right> -->
  </div>
</template>

<script>
import anime from 'animejs'
import Left from '~/components/Left/left'
import Middle from '~/components/Middle/middle'
import Right from '~/components/Right/right'

export default {
  name: '',
  components: {
    'Left': Left,
    'Middle': Middle,
    'Right': Right
  },
  data () {
    return {
      toggle: false
    }
  },
  transition (to, from) {
    // Access component properties here
    console.log(to.matched[0].components.default.options)
    return 'fade'
  },
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgPrevious: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToPreviousProject].color
      return customClass
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
  methods: {
    openAbout: function () {
      if (this.toggle) {
        this.toggle = false
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: 'easeOutExpo',
          backgroundColor: [{ value: '#F5C316' }],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 0
        })
      } else {
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: 'easeOutExpo',
          backgroundColor: [{ value: '#F5C316' }],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 1
        })
        this.toggle = true
      }
      console.log('toggle', this.toggle)
    }
  }
}
</script>
