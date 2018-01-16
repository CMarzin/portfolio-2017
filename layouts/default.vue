<template>
  <div class="container__all">
    <nuxt/>
    <div class="title__project">
      {{ currentTitle }}
    </div>
    <div class="container__about"></div>
    <div class="horizontal__nav"></div>
    <div class="footer__nav">
     <div class="container__arrow">
      <img src="~/static/arrow-left.svg" v-on:click="navigationLeft()" alt="">
      <img src="~/static/arrow-right.svg" v-on:click="navigationRight()" alt="">
     </div>
    </div>
    <div class="footer__description"></div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      projectTitle: [
        'BE THE DROP',
        'MYWINGS',
        'HEAVEN',
        'CHER AMI',
        'FIDGET CUBE',
        'STAR WARS',
        'JOCHEN GERZ'
      ],
      currentTitle: 'BE THE DROP',
      counter: 0
    }
  },
  methods: {
    navigationRight: function (direction) {
      this.counter++
      if (this.counter === this.projectTitle.length) {
        this.counter = 0
        this.currentTitle = this.projectTitle[this.counter]
        return this.currentTitle
      } else {
        this.currentTitle = this.projectTitle[this.counter]
        return this.currentTitle
      }
    },
    navigationLeft: function () {
      this.counter--
      if (this.counter <= 0) {
        this.counter = this.projectTitle.length - 1
        this.currentTitle = this.projectTitle[this.counter]
        return this.currentTitle
      } else {
        this.currentTitle = this.projectTitle[this.counter]
        return this.currentTitle
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>