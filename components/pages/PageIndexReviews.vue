<template lang="pug">
.i-reviews
  .container
    .row.py-5
      .col-12.col-md-auto.i-reviews__avatar.mr-4.text-center.mb-4.mb-md-0
        img.img-fluid(src="~assets/images/reviews/testimonial.jpg")
      .col-12.col-md.i-reviews__desc
        p “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
        p.i-reviews__name Joshua Earle
</template>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-reviews
  &__desc
    color #a8a8a8
    font-size 1.5rem
    line-height 1.4
    font-family roboto-italic
  &__name
    color $dark
    margin 0
    font-family kaushan
</style>
