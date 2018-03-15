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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>