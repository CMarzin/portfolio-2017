<template>
  <div class="container__main-footer">
    <div class="container__main-footer-projects">
      <p>{{ this.counter + 1 }}</p>
      <p> / </p>
      <p>{{ this.projectTitle.length + 1}}</p>
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
      nextProject: ProjectTitle[1].toLowerCase().replace(/\s+/g, ''),
      previousProject: ProjectTitle[ProjectTitle.length - 1].toLowerCase().replace(/\s+/g, ''),
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
    let currentPathName = this.$router.history.current
    let indexOfPreviousProject = ProjectTitle.indexOf(currentPathName.name)
    let indexOfCurrentProject = ProjectTitle.indexOf(currentPathName.name)
    let indexOfNextProject = ProjectTitle.indexOf(currentPathName.name)

    if (currentPathName.name === 'index') {
      indexOfPreviousProject = ProjectTitle.length - 1
      indexOfCurrentProject = 0
      indexOfNextProject = indexOfCurrentProject + 1
    } else if (indexOfCurrentProject === ProjectTitle.length - 1) {
      indexOfPreviousProject = indexOfCurrentProject - 1
      indexOfNextProject = 0
    } else {
      indexOfPreviousProject = indexOfCurrentProject - 1
      indexOfNextProject = indexOfCurrentProject + 1
      console.log('trest', indexOfNextProject)
    }

    console.log('indexOfPreviousproject', ProjectTitle[indexOfPreviousProject])
    console.log('indexOfCurrentproject', ProjectTitle[indexOfCurrentProject])
    console.log('indexOfNextProject', ProjectTitle[indexOfNextProject])
  },
  methods: {
    navigationRight: function () {
      let currentPathName = this.$router.history.current
      let indexOfPreviousProject = ProjectTitle.indexOf(currentPathName.name)
      let indexOfCurrentProject = ProjectTitle.indexOf(currentPathName.name)
      let indexOfNextProject = ProjectTitle.indexOf(currentPathName.name)

      if (currentPathName.name === 'index') {
        indexOfPreviousProject = ProjectTitle.length - 1
        indexOfCurrentProject = 0
        indexOfNextProject = indexOfCurrentProject + 1
      } else if (indexOfCurrentProject === ProjectTitle.length - 1) {
        indexOfNextProject = 0
      } else {
        indexOfPreviousProject = indexOfCurrentProject - 1
        indexOfNextProject = indexOfCurrentProject + 1
        console.log('trest', indexOfNextProject)
      }

      console.log('indexOfPreviousproject', ProjectTitle[indexOfPreviousProject])
      console.log('indexOfCurrentproject', ProjectTitle[indexOfCurrentProject])
      console.log('indexOfNextProject', ProjectTitle[indexOfNextProject])
      // this.
    },
    navigationLeft: function () {
      if (this.counter <= 0) {
        this.counter = ProjectTitle.length
        this.currentTitle = this.projectTitle[this.projectTitle.length - 1]
        this.previousProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
        return this.previousProject
      } else {
        this.counter--
        this.currentTitle = this.projectTitle[this.counter]
        this.previousProject = this.currentTitle.toLowerCase().replace(/\s+/g, '')
        return this.previousProject
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>