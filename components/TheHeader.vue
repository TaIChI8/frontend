<template lang="pug">
header.header
  .container
    .row
      .col-2
        .header__logo.d-flex.align-items-center MoGo
      .col-9
        nav.header__nav
          ul.d-flex.align-items-center.justify-content-end
            li
              a(href="/") about
            li
              a(href="/") service
            li
              a(href="/") work
            li
              a(href="/") blog
            li
              a(href="/") contact
      .col-1.d-flex.align-items-center.justify-content-between
        a.header__icon(href="/")
          img.img-fluid(src="~assets/images/icons/shopping-cart.svg")
        .header__icon
          img.img-fluid(src="~assets/images/icons/searcher.svg")
</template>

<style lang="stylus">
@import '~assets/stylus/variables'

.header
  position fixed
  top 0
  opacity .4
  width 100%
  z-index 1000
  background black
  &__logo
    font-size 1.875rem
    font-family montserrat-bold
  &__nav
    font-size 0.875rem
    font-family montserrat
    text-transform uppercase
  &__nav ul
    height inherit
  &__nav a
    margin 0 1.5625rem
    padding 0.9375rem 0
  &__nav a:hover
    border-bottom 2px solid $apricot
  &__icon img
    width 20px
  &__logo, &__nav
    height 60px
    color $white

</style>
