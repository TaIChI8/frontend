<template lang="pug">
.i-aboutUs
  .container
    .row
      .col
        BaseTitle(v-bind="Title")
    .row
      .col-12.col-lg-4.mb-4.mb-lg-0.d-flex.justify-content-center(v-for="n in 3" :key="n")
        .i-aboutUs__item.d-flex.justify-content-center.align-items-center.w-100(:style="{ backgroundImage: `url(${require(`~/assets/images/about_us/about_us${n}.jpg`)})` }")
          .i-aboutUs__bg.overlay-gd
          .i-aboutUs__title
            p super team
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { 'BaseTitle': BaseTitle },
  data () {
    const Title = {
      subtitle: 'What we do',
      title: 'Story about us',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    return { Title }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'
.i-aboutUs
  margin-bottom 6.25rem
  &__item
    color $white
    height 250px
    max-width 390px
    position relative
    transition .5s
    &:hover
      transform translate(-10px,-10px)
      box-shadow 15px 15px 0px 0px $azure
      .i-aboutUs
        &__bg, &__title
          opacity 1
          cursor pointer
  &__bg, &__title
    opacity 0
    transition .5s
  &__title
    position relative
    font-size 1.125rem
    text-transform uppercase
    font-family montserrat-bold
</style>
