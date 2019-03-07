<template lang="pug">
.i-stories
  .container
    .row
      .col
        BaseTitle(:subtitle="bTitle.subtitle" :title="bTitle.title")
    .row
      .col-12.col-md-4.mb-4.mb-md-0(v-for="i in 3" :key="i")
        .i-stories__card.gap
          .i-stories__pic.mb-3
            .i-stories__relation
              .i-stories__ratio.d-flex.align-items-center.justify-content-center
                .i-stories__img.d-flex.align-items-center.justify-content-center
            .i-stories__date
              .i-stories__num 15
              .i-stories__month Jan
          .i-stories__desc
            h5 Lorem ipsum dolor sit amet
            h4 Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          hr
          .i-stories__views.d-flex
            .i-stories__icon.mr-3
              img.mr-1(src="~assets/images/icons/view.png")
              span 542
            .i-stories__icon
              img.mr-1(src="~assets/images/icons/speech_bubble.png")
              span 17
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    return {
      bTitle: {subtitle: 'Our stories', title: 'Latest blog'}
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-stories
  margin-bottom 6.25rem
  &__relation
    padding-top 68.6%
  &__ratio
    top 0
  &__img
    background url('~assets/images/stories/stories1.jpg') center
    background-position-x 100%
    background-size cover
  &__date
    color $white
    bottom 0.625rem
    left -0.625rem
    background-color $azure
    padding 0.625rem 0.9375rem
  &__num
    line-height 1
    font-size 1.625rem
    font-family montserrat-bold
  &__month
    font-family roboto-italic
  &__views
    color $grey
  &__ratio, &__img
    width 100%
    height 100%
  &__pic, &__relation
    position relative
  &__date, &__ratio
    position absolute
</style>
