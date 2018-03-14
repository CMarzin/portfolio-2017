<template>
  <div class="container__right">
    <div class="container__right-about">
      <div @click="openAbout()" class="container__right-title">
        <h3 v-if="this.toggle">CLOSE</h3>
        <h3 v-else>ABOUT</h3>
        
      </div>
      <div class="container__right-about-content" style="transform: scale(0)">
        <div class="container__right-about-description">
          <p>Hi, My name is Corentin Marzin</p>
          <p>I am a Creative developer blablabl</p>
        </div>
        <div class="container__right-about-social"></div>
      </div>
    </div>
    <div class="container__right-menu">
      <div class="container__right-nav">
        <h3>MENU</h3>
        <!-- SHOW MENU WHEN CLICK -->
        <!-- <nuxt-link v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === 'jochengerz' ? '/' : title.replace(/\s+/g, '')">
          <h3 class="container__main-nav_horizontal--title" >{{ title.toUpperCase() }}</h3>      
        </nuxt-link> -->
      </div>
      <nuxt-link :class="['container__right-next-project', customClassBgNext]" :to="this.$store.state.pathToNextProject">
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

export default {
  name: 'Right',
  data () {
    return {
      toggle: false
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
    openAbout: function () {
      if (this.toggle) {
        this.toggle = false
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: 'easeOutExpo',
          backgroundColor: [{ value: '#F5C316' }],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 0
        })
      } else {
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: 'easeOutExpo',
          backgroundColor: [{ value: '#F5C316' }],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 1
        })
        this.toggle = true
      }
      console.log('toggle', this.toggle)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>