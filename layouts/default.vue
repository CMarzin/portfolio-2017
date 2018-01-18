<template>
  <div class="container__main">
    <nuxt/>
    <div class="container__main-title">
      {{ currentTitle }}
    </div>
    <div class="container__main-about"></div>
    <div class="container__main-nav_horizontal">
      <h3 class="container__main-nav_horizontal--title" v-for="title in projectTitle" :key="title.id" >{{ title }}</h3>
    </div>
    <div class="container__main-footer">
     <div class="container__main-footer-nav">
      <img class="container__main-footer_arrow container__main-footer_arrow-left" src="~/static/arrow-left.svg" v-on:click="navigationLeft()" alt="">
      <img class="container__main-footer_arrow container__main-footer_arrow-right" src="~/static/arrow-right.svg" v-on:click="navigationRight()" alt="">
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
    navigationRight: function () {
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