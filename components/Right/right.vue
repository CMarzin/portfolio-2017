<template>
  <div class="container__right">
    <div class="container__right-about">
      <div @click="openAbout()" class="container__right-title">
        <h3 v-if="this.toggleAbout">CLOSE</h3>
        <h3 v-else>ABOUT</h3>
      </div>
      <div class="container__right-about-content" style="transform: scale(0); background-color: #F5C316">
        <About></About>
      </div>
    </div>
    <div class="container__right-menu">
      <div @click="openMenu()" class="container__right-nav">
        <div class="container__right-nav-title">
          <h3 v-if="this.toggleMenu">CLOSE</h3>
          <h3 v-else>MENU</h3>
        </div>
      </div>
      <div :class="['container__right-menu-content', customClassBg]" style="transform: scaleX(0);">
        <nuxt-link v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === 'jochengerz' ? '/' : title.replace(/\s+/g, '')">
          <h3 class="container__main-nav_horizontal--title" >{{ title.toUpperCase() }}</h3>
        </nuxt-link>
      </div>
      <nuxt-link class="container__right-next-project" :to="this.$store.state.pathToNextProject">
        <div :class="['container__right-next-volet', customClassBgNext]"></div>
        <div class="container__right-next-icon">
          <span class="container__right-next-text">NEXT</span>
          <span class="container__right-next-arrow"></span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import About from '~/components/About/about'

export default {
  name: 'Right',
  components: {
    'About': About
  },
  data () {
    return {
      toggleAbout: false,
      toggleMenu: false
    }
  },
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
    openMenu: function () {
      if (this.toggleMenu) {
        this.toggleMenu = false
        this.$store.state.stateMenu = this.toggleMenu
        anime({
          targets: '.container__right-menu-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 100% 0', '100% 100% 0'],
          scaleX: 0
        })
      } else {
        anime({
          targets: '.container__right-menu-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 100% 0', '100% 100% 0'],
          scaleX: 1
        })
        this.toggleMenu = true
        this.$store.state.stateMenu = this.toggleMenu
      }
    },
    openAbout: function () {
      if (this.toggleAbout) {
        this.toggleAbout = false
        anime({
          targets: '.container__right-about-content',
          delay: 250,
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 0
        })
        anime({
          targets: '.container__right-about-description',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          opacity: 0
        })
      } else {
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 1
        })
        anime({
          targets: '.container__right-about-description',
          delay: 250,
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          opacity: 1
        })
        this.toggleAbout = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>