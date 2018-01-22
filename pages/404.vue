<template>
  <div class="container__main-cowsay">
    {{ displayDaCow }}
  </div>
</template>

<script>
import * as cowSay from 'cowsay'
export default {
  name: '',
  layout: 'default',
  data () {
    return {
      randomCow: Object.keys(cowSay),
      displayDaCow: ''
    }
  },
  methods: {
    diplayLostMessage: function () {
      const randomNumber = Math.random() * this.randomCow.length
      const pickDaCow = this.randomCow[Math.floor(randomNumber)]
      const randowOupsMessage = cowSay.think({
        text: 'Hello there',
        cow: cowSay[pickDaCow],
        wrapLength: 40,
        wrap: false
      })
      this.displayDaCow = randowOupsMessage
    }
  },
  mounted () {
    this.diplayLostMessage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>