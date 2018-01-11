<template>
  <div class="name">
    Cher ami page
    <Navigation></Navigation>
    <nuxt-child/>
  </div>
</template>

<script>
import Navigation from '@/components/NavigationComponent'

export default {
  name: '',
  components: {
    'Navigation': Navigation
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>