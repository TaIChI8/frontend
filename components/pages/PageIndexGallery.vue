<template lang="pug">
.i-gallery
  .container
    .row
      .col
        BaseTitle(v-bind="Title")
  .row.no-gutters
    .col
      .i-gallery__relation
        .i-gallery__ratio.d-flex.align-items-center.justify-content-center
          .i-gallery__left.d-flex.flex-column
            .i-gallery__img1.d-flex.align-items-center.justify-content-center
            .i-gallery__img2.d-flex.align-items-center.justify-content-center
          .i-gallery__center.d-flex.flex-column
            .i-gallery__img3.d-flex.align-items-center.justify-content-center
          .i-gallery__right.d-flex.flex-column
            .i-gallery__img4.d-flex.align-items-center.justify-content-center
            .i-gallery__img5.d-flex.align-items-center.justify-content-center
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    const Title = {
      subtitle: 'What we do',
      title: 'some of our work'
    }
    return { Title }
  }
}
</script>

<style lang="stylus">
.i-gallery
  &__relation
    position relative
    padding-top 52.152%
  &__ratio
    position absolute
    top 0
  &__img1
    background url('~assets/images/gallery/14.jpg')
  &__img2
    background url('~assets/images/gallery/15.jpg')
  &__img3
    background url('~assets/images/gallery/18.jpg')
  &__img4
    background url('~assets/images/gallery/16.jpg')
  &__img5
    background url('~assets/images/gallery/17.jpg')
  &__left, &__center, &__right
    width 33.3333%
    height 100%
  &__ratio, &__img1, &__img2, &__img3, &__img4, &__img5
    width 100%
    height 100%
  &__img1, &__img2, &__img3, &__img4, &__img5
    background-position-x 100%
    background-size cover
</style>
