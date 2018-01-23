<template>
  <div class="container__main-footer">
    <div class="container__main-footer-projects">
      <p>{{ this.counter }}</p>
      <p> / </p>
      <p>{{ this.projectTitle.length - 1  }}</p>
    </div>
    <div class="container__main-footer-nav">
      <nuxt-link :to="this.previousProject">
        <img class="container__main-footer_arrow container__main-footer_arrow-left" src="~/static/arrow-left.svg" v-on:click="navigationLeft()" alt="">
      </nuxt-link>
      <nuxt-link :to="this.nextProject">
        <img class="container__main-footer_arrow container__main-footer_arrow-right" src="~/static/arrow-right.svg" v-on:click="navigationRight()" alt="">
      </nuxt-link>
    </div>
      <div class="container__main-footer-description"></div>
  </div>
</template>

<script>
import ProjectTitle from '~/components/Bus/data-bus.js'

export default {
  name: '',
  data () {
    return {
      projectTitle: ProjectTitle,
      items: [],
      nextProject: '',
      previousProject: '',
      archiveLink: [
        'http://corentinmarzin.fr/lab/recall',
        'http://corentinmarzin.fr/lab/cowspiracy',
        'http://corentinmarzin.fr/lab/easter',
        'http://cocoweb.fr/dumbledor/'
      ],
      currentTitle: 'JOCHEN GERZ',
      counter: 0
    }
  },
  mounted () {
    const currentPath = this.$router.history.current.path
    this.$router.options.routes.forEach(route => {
      if (currentPath !== route.path) {
        this.items.push({
          name: route.name,
          path: route.path
        })
      }
    })
    console.log('routes', this.items)
    console.log('jn', this.projectTitle.length - 1)
  },
  methods: {
    navigationRight: function () {
      this.counter++
      // if (this.counter === this.projectTitle.length) {
      //   this.counter = 0
      //   this.currentTitle = this.projectTitle[0]
      //   console.log('this.currentTitle RIGHT', this.currentTitle.toLowerCase().replace(/\s+/g, ''))
      //   this.nextProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
      //   return this.nextProject
      // } else {
      //   this.currentTitle = this.projectTitle[this.counter]
      //   console.log('this.currentTitle RIGHT', this.currentTitle.toLowerCase().replace(/\s+/g, ''))
      //   this.nextProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
      //   return this.nextProject
      // }
    },
    navigationLeft: function () {
      this.counter--
      if (this.counter <= 0) {
        this.counter = this.projectTitle.length - 1
        this.currentTitle = this.projectTitle[this.projectTitle.length - 1]
        this.previousProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
        console.log('this.currentTitle LEFT', this.previousProject)
        return this.previousProject
      } else {
        this.currentTitle = this.projectTitle[this.counter]
        this.previousProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
        console.log('this.currentTitle LEFT', this.previousProject)
        return this.previousProject
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>