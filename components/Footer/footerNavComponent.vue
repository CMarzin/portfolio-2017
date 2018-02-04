<template>
  <div class="container__main-footer">
    <div class="container__main-footer-projects">
      <p>{{ this.$store.state.counterProject + 1 }}</p>
      <p> / </p>
      <p>{{ this.$store.state.projectTitle.length }}</p>
    </div>
    <div :class="['container__main-footer-nav', customClassBg]">
      <nuxt-link class="container__main-footer_arrow" :to="this.$store.state.pathToPreviousProject">
        <span class="container__main-footer_arrow-left"></span>
        <!-- <img class="container__main-footer_arrow container__main-footer_arrow-left" src="~/static/arrow-left.svg" alt=""> -->
      </nuxt-link>
      <nuxt-link class="container__main-footer_arrow" :to="this.$store.state.pathToNextProject">
        <span class="container__main-footer_arrow-right"></span>
        <!-- <img class="container__main-footer_arrow container__main-footer_arrow-right" src="~/static/arrow-right.svg" alt=""> -->
      </nuxt-link>
    </div>
      <div class="container__main-footer-description">
        {{ this.$store.state.projects[this.$store.state.pathToCurrentProject].description }}
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  middleware: 'routing',
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    }
  },
  data () {
    return {
      defaultClassFooterProjects: 'container__main-footer-projects',
      customClassFooterProjects: '',
      archiveLink: [
        'http://corentinmarzin.fr/lab/recall',
        'http://corentinmarzin.fr/lab/cowspiracy',
        'http://corentinmarzin.fr/lab/easter',
        'http://cocoweb.fr/dumbledor/'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>