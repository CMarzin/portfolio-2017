<template>
  <div class="container__main">
    <Title></Title>
    <Middle></Middle>
    <Right></Right>
  </div> 
</template>

<script>
import Title from '~/components/Title/title'
import Middle from '~/components/Middle/middle'
import Right from '~/components/Right/right'
export default {
  name: '',
  layout: 'default',
  data () {
    return {}
  },
  components: {
    'Title': Title,
    'Middle': Middle,
    'Right': Right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>