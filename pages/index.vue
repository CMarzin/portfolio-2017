<template>
<section>
<h1>qdlfkndslkf,n</h1>
</section>
</template>

<script>
import { think } from 'cowsay'

export default {
  data () {},
  mounted () {
    console.log(think({
      text: 'Hello there',
      eyes: 'oo',
      wrapLength: 40,
      wrap: false
    }))
  }
}
</script>

<style>
</style>
