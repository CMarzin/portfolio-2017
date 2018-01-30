<template>
  <div :class="['container__main-nav_horizontal', customClassBgNext]">
    <!-- <button @click="emitGlobalClickEvent()"> CLICK ME</button> -->
    <nuxt-link v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === 'jochengerz' ? '/' : title.replace(/\s+/g, '')">
      <h3 class="container__main-nav_horizontal--title" >{{ title.toUpperCase() }}</h3>      
    </nuxt-link>
  </div>
</template>

<script>
import { EventBus } from '~/components/Bus/event-bus.js'

export default {
  name: '',
  computed: {
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    }
  },
  data () {
    return {
      clickCount: 0
    }
  },
  methods: {
    emitGlobalClickEvent () {
      this.clickCount++
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit('i-got-clicked', this.clickCount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>