<template lang="pug">
.b-slider
  .overlay-gd
  .container-fluid
    .row
      .col
        .b-slider__block
          p.b-slider__subtitle Creative Template
          h1 welcome to mogo
          button.b-slider__btn.btn learn more
</template>

<style lang="stylus">
@import '~assets/stylus/variables'

.b-slider
  color $white
  text-align center
  position relative
  padding-bottom 6rem
  background url('~assets/images/slider/banner.jpg') no-repeat center
  &__block
    max-width 1000px
    margin 9.375rem auto 0
  &__subtitle
    font-size 4.5rem
    font-family kaushan
  &__btn
    color $white
    border-radius 0
    font-size 0.875rem
    margin-top 5rem
    border 2px solid $white
    padding 0.75rem 1.875rem
    text-transform uppercase
    font-family montserrat-bold
</style>
