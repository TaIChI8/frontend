<template lang="pug">
.b-title
  h3 {{ subtitle }}
  h2 {{ title }}
  h4 {{ desc }}
</template>

<style lang="stylus">
.b-title
  margin 6.25rem auto
  max-width 1000px
  text-align center
</style>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
