<template>
  <div class="container__main-nav_horizontal">
    <!-- <button @click="emitGlobalClickEvent()"> CLICK ME</button> -->
    <h3 class="container__main-nav_horizontal--title" v-for="title in projectTitle" :key="title.id" >{{ title }}</h3>
  </div>
</template>

<script>
import { EventBus } from '~/components/Bus/event-bus.js'
import ProjectTitle from '~/components/Bus/data-bus.js'

export default {
  name: '',
  data () {
    return {
      projectTitle: ProjectTitle,
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