<template>
  <div class="container__main">
    <nuxt/>
     <h1 class="logo"><a href="/">Corentin Marzin</a></h1>
    <div class="container__left">
      <div class="container__left-counter">
        <p>{{ this.$store.state.counterProject + 1 }}</p>
        <p> - </p>
        <p>{{ this.$store.state.projectTitle.length }}</p>
      </div>
      <div :class="['title', 'container__left-title',customClassText]">
        {{ this.$store.state.currentProjectTitle }}
      </div>
      <div class="container__left-nav">
        <nuxt-link class="container__left-arrow" :to="this.$store.state.pathToPreviousProject">
          <span class="container__main-footer_arrow-left"></span>
        </nuxt-link>
        <nuxt-link class="container__left-arrow" :to="this.$store.state.pathToNextProject">
          <span class="container__main-footer_arrow-right"></span>
        </nuxt-link>
      </div>
      <div class="container__left-desc">
         {{ this.$store.state.projects[this.$store.state.pathToCurrentProject].description }}
      </div>
      <div :class="['container__left-website', customClassBg]">
        SEE WEBSITE
      </div>
    </div>
    <div class="container__middle">
      <img class="container__middle-photo" src="~/static/gerz.jpg" alt="">
    </div>
    <div class="container__right">
      <div :class="['container__right-nav', customClassBgNext]">
        <nuxt-link v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === 'jochengerz' ? '/' : title.replace(/\s+/g, '')">
          <h3 class="container__main-nav_horizontal--title" >{{ title.toUpperCase() }}</h3>      
        </nuxt-link>
      </div>
      <div :class="['container__right-about', customClassBgSecondNext]">
        <h3>ABOUT</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    },
    customClassBgSecondNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToSecondNextProject].color
      return customClass
    }
  },
  methods: {
  }
}
</script>