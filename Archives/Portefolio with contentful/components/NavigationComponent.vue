<template>
    <div class="name">
      <ul v-for="(item, index) in items" :key="index">
        <li>
           <nuxt-link :to='item.path'>
            {{item.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  created () {
    const currentPath = this.$router.history.current.path
    this.$router.options.routes.forEach(route => {
      if (currentPath !== route.path) {
        this.items.push({
          name: route.name,
          path: route.path
        })
      }
    })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>