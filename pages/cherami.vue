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
  // layout: 'default',
  data () {
    return {
      descritption: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
    }
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