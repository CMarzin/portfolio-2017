<template>
  <div class="container__main">
    <nuxt/>
     <div class="logo"><a href="/">Corentin Marzin</a></div>
    <div class="container__left">
      <nuxt-link :class="['container__left-prev-project', customClassBgPrevious]" :to="this.$store.state.pathToPreviousProject"></nuxt-link>
      <div class="container__left-elements">
        <div class="container__left-elements-content">
          <div class="container__left-counter">
            <p>{{ this.$store.state.counterProject + 1 }}</p>
            <p> - </p>
            <p>{{ this.$store.state.projectTitle.length }}</p>
          </div>
          <div :class="['title', 'container__left-title',customClassText]">
          <h1>{{ this.$store.state.currentProjectTitle }}</h1>
          </div>
          <!-- SHOW ARROW ON MOBILE -->
          <!-- <div class="container__left-nav">
            <nuxt-link class="container__left-arrow" :to="this.$store.state.pathToPreviousProject">
              <span class="container__main-footer_arrow-left"></span>
            </nuxt-link>
            <nuxt-link class="container__left-arrow" :to="this.$store.state.pathToNextProject">
              <span class="container__main-footer_arrow-right"></span>
            </nuxt-link>
          </div> -->
        </div>
          <div class="container__left-desc">
            {{ this.$store.state.projects[this.$store.state.pathToCurrentProject].description }}
          </div>
      </div>
    </div>
    <div class="container__middle">
      <img class="container__middle-photo" src="~/static/gerz.jpg" alt="">
      <div :class="['container__left-website', customClassBg]">
        SEE WEBSITE
      </div>
    </div>
    <div class="container__right">
      <div class="container__right-about">
        <h3>ABOUT</h3>
      </div>
      <div class="container__right-menu">
        <div class="container__right-nav">
         <h3>MENU</h3>
          <!-- SHOW MENU WHEN CLICK -->
          <!-- <nuxt-link v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === 'jochengerz' ? '/' : title.replace(/\s+/g, '')">
            <h3 class="container__main-nav_horizontal--title" >{{ title.toUpperCase() }}</h3>      
          </nuxt-link> -->
        </div>
        <nuxt-link :class="['container__right-next-project', customClassBgNext]" :to="this.$store.state.pathToNextProject"></nuxt-link>
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
    customClassBgPrevious: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToPreviousProject].color
      return customClass
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    }
  },
  methods: {
  }
}
</script>