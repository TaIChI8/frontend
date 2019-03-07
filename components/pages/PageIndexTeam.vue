<template lang="pug">
.i-team
  .container
    .row
      .col
        BaseTitle(:subtitle="bTitle.subtitle" :title="bTitle.title" :desc="bTitle.desc")
    .row
      .col-12.col-md-4(v-for="item, i in items" :key="i")
        .i-team__relation
          .i-team__ratio.d-flex.align-items-center.justify-content-center
            .i-team__img.d-flex.align-items-center.justify-content-center
              .i-team__bg.overlay-gd
        h5.i-team__name {{ item.name }}
        h4.i-team__post {{ item.post }}
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    const items = [
      {
        name: 'Matthew Dix',
        post: 'Graphic Design'
      },
      {
        name: 'Matthew Dix',
        post: 'Graphic Design'
      },
      {
        name: 'Matthew Dix',
        post: 'Graphic Design'
      }
    ]
    return {
      items,
      bTitle: {subtitle: 'Who we are', title: 'Meet our team', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-team
  margin-bottom 6.25rem
  &__relation
    position relative
    padding-top 132.6%
  &__ratio
    position absolute
    top 0
  &__img
    background url('~assets/images/team/our_team1.jpg')
    background-position-x 100%
    background-size cover
    transition .5s
    &:hover .i-team__bg
      display block
      cursor pointer
    &:hover
      transform translate(-10px,-10px)
      box-shadow 15px 15px 0px 0px $azure
  &__bg
    display none
  &__name
    margin 1.875rem 0 0.625rem
  &__post
    font-family roboto-italic
  &__name, &__post
    text-align center
  &__ratio, &__img
    width 100%
    height 100%
</style>
