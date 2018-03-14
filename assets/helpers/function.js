// import store from '~/store'
class UTILS {
  customClassText () {
    let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
    return customClass
  }
  customClassBgPrevious () {
    let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToPreviousProject].color
    return customClass
  }
  customClassBg () {
    let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
    return customClass
  }
  customClassBgNext () {
    let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
    return customClass
  }
}

export default UTILS
