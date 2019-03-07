<template lang="pug">
.i-clients.pb-4
  .overlay-lt
  .container
    .row
      .col
        BaseTitle(:subtitle="bTitle.subtitle" :title="bTitle.title")
    .row
      .col-12.col-md-6(v-for="i in 4" :key="i")
        .i-clients__list.d-flex
          .i-clients__item.d-flex.align-items-start
            .i-clients__avatar
            .i-clients__desc
              h5 Matthew Dix
              h4.i-clients__post Graphic Design
              h4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    return {
      bTitle: {subtitle: 'Happy Clients', title: 'What people say'}
    }
  }
}
</script>

<style lang="stylus">
.i-clients
  position relative
  background url('~assets/images/bg/clients_bg.jpg') no-repeat
  &__list
    margin-bottom 4.375rem
  &__avatar
    width 100%
    max-width 110px
    min-height 110px
    margin-right 30px
    border-radius 50%
    background url(src="~assets/images/reviews/reviews1.jpg") no-repeat top
  &__post
    font-family roboto-italic
</style>
