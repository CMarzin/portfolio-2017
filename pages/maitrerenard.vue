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

import beforeEnterTransition from '~/assets/transition/beforeEnterTransition'
import enterTransition from '~/assets/transition/enterTransition'
import leaveTransition from '~/assets/transition/leaveTransition'
import beforeRouteLeaveTransition from '~/assets/transition/beforeRouteLeaveTransition'

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
  beforeRouteLeave (to, from, next) {
    beforeRouteLeaveTransition(this.$el, this.$store, next)
  },
  transition: {
    css: false,
    mode: 'out-in',
    duration: 10000,
    type: 'transition',
    beforeEnter (el) {
      beforeEnterTransition(el, this.$store)
    },
    enter (el, done) {
      enterTransition(el, this.$store)
      done()
    },
    beforeLeave (el) {

    },
    leave (el, done) {
      leaveTransition(el, this.$store)
      done()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>