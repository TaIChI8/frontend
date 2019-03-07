<template lang="pug">
footer.footer
  .container
    .row
      .col-md-6.col-lg-5.mb-4.mb-lg-0
        .footer__logo.mb-4 MoGo
        h4.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        p.footer__num 15k&nbsp
          span followers
        hr
        .d-flex.flex-column
          h4.footer__sub.mb-4 Follow Us:
            a.footer__link.ml-2(href="/")
              img(src="~assets/images/icons/fb.png")
            a.footer__link(href="/")
              img(src="~assets/images/icons/db.png")
            a.footer__link(href="/")
              img(src="~assets/images/icons/tw.png")
            a.footer__link(href="/")
              img(src="~assets/images/icons/pt.png")
          .footer__form
            input(type="email" placeholder="Your Email...")
            button.footer__btn.btn Subscribe
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        h5.mb-4 blogs
        .d-flex.align-items-start.mb-4
          img.footer__img(src="~assets/images/blog/blog1.jpg")
          .footer__preview
            p Lorem ipsum dolor sit amet, consectetur adipiscing
            p Jan 9, 2018
        .d-flex.align-items-start.mb-4
          img.footer__img(src="~assets/images/blog/blog2.jpg")
          .footer__preview
            p Lorem ipsum dolor sit amet, consectetur adipiscing
            p Jan 9, 2018
        .d-flex.align-items-start.mb-4
          img.footer__img(src="~assets/images/blog/blog3.jpg")
          .footer__preview
            p Lorem ipsum dolor sit amet, consectetur adipiscing
            p Jan 9, 2018
      .col-md-6.col-lg-3
        h5.mb-4 instagram
        .d-flex.flex-wrap
          a.footer__inst-link(v-for="i in 9" :key="i" href="/")
            .footer__item
</template>

<style lang="stylus">
@import '~assets/stylus/variables'

.footer
  padding 6.25rem 0
  background-color #f8f8f8
  &__logo
    color #cccccc
    line-height .8
    font-size 2.875rem
  &__num
    font-size 1.125rem
  &__sub
    margin 0 1.25rem 0 0
  &__link
    margin-right 0.625rem
  &__form input
    outline none
    padding 0.3125rem
    border 1px solid $light
  &__btn
    color $white
    border-radius 0
    background-color $azure
  &__img
    margin-right 1.25rem
    max-width 120px
  &__item
    width 80px
    height 80px
    background url('~assets/images/blog/blog1.jpg') center
    background-size cover
  &__inst-link
    margin 0 0.125rem 0.125rem 0
  &__preview p:first-child
    margin 0.625rem 0 0.3125rem
    font-size 0.75rem
  &__preview p:last-child
    color $grey
    font-size 0.8125rem
  &__num span, &__btn
    font-size 0.875rem
  &__num, &__logo, &__btn
    font-family montserrat-bold
  &__preview p:first-child, &__btn
    text-transform uppercase
  &__preview p:first-child, &__num span
    font-family montserrat
  &__preview p:last-child, &__sub
    font-family roboto-italic
</style>
