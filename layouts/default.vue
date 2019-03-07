<template lang="pug">
div
  // TheHeader
  main
    nuxt
  TheFooter
</template>

<style lang="stylus">
@import '~assets/stylus/main'
</style>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader, TheFooter
  }
}
</script>
