<template>
  <div class="container__main">
    <nuxt/>
    <h1 class="container__main-logo">Corentin Marzin</h1>
    <!-- <div class="container__main-title">
      {{ currentTitle }}
    </div> -->
    <div class="container__main-about">
      <h3>ABOUT</h3></div>
    <div class="container__main-nav_horizontal">
      <h3 class="container__main-nav_horizontal--title" v-for="title in projectTitle" :key="title.id" >{{ title }}</h3>
    </div>
    <div class="container__main-footer">
      <div class="container__main-footer-projects">
        <p>{{ this.counter }}</p>
        <p> / </p>
        <p>{{ this.projectTitle.length - 1  }}</p>
      </div>
     <div class="container__main-footer-nav">
      <img class="container__main-footer_arrow container__main-footer_arrow-left" src="~/static/arrow-left.svg" v-on:click="navigationLeft()" alt="">
      <img class="container__main-footer_arrow container__main-footer_arrow-right" src="~/static/arrow-right.svg" v-on:click="navigationRight()" alt="">
     </div>
     <div class="container__main-footer-description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      projectTitle: [
        'JOCHEN GERZ',
        'MYWINGS',
        'PORTFOLIO',
        'FIDGET CUBE',
        'MAITRE-RENARD',
        'STAR WARS',
        'HEAVEN',
        'BE THE DROP',
        'CHER AMI',
        'ARCHIVES'
      ],
      archiveLink: [
        'http://corentinmarzin.fr/lab/recall',
        'http://corentinmarzin.fr/lab/cowspiracy',
        'http://corentinmarzin.fr/lab/easter',
        'http://cocoweb.fr/dumbledor/'
      ],
      currentTitle: 'JOCHEN GERZ',
      counter: 1
    }
  },
  methods: {
    navigationRight: function () {
      this.counter++
      if (this.counter === this.projectTitle.length) {
        this.counter = 1
        this.currentTitle = this.projectTitle[0]
        return this.currentTitle
      } else {
        this.currentTitle = this.projectTitle[this.counter]
        return this.currentTitle
      }
    },
    navigationLeft: function () {
      this.counter--
      if (this.counter <= 1) {
        this.counter = this.projectTitle.length - 1
        this.currentTitle = this.projectTitle[this.projectTitle.length - 1]
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