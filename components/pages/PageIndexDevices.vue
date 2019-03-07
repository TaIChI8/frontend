<template lang="pug">
.i-devices
  .overlay-lt
  .container
    .row
      .col
        BaseTitle(v-bind="Title")
    .row
      .col-4.offset-4
        .i-devices__relation
          .i-devices__ratio.d-flex.align-items-center.justify-content-center
            .i-devices__tab-img.d-flex.align-items-center.justify-content-center
            .i-devices__phone-img.d-flex.align-items-center.justify-content-center
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    const Title = {
      subtitle: 'For all devices',
      title: 'Unique design'
    }
    return { Title }
  }
}
</script>

<style lang="stylus">

.i-devices
  position relative
  background url('~assets/images/bg/feauture_bg.jpg') no-repeat
  &__relation
    padding-top 121.6%
    position relative
  &__ratio
    position absolute
    top 0
  &__tab-img
    background url('~assets/images/devices/table.png') center no-repeat
    background-position-x 100%
    background-size cover
  &__phone-img
    background url('~assets/images/devices/phone.png') center no-repeat
    background-size contain
    position absolute
    width 60%
    height 90%
    top 29%
    left 75%
  &__relation, &__ratio, &__tab-img
    width 100%
    height 100%
</style>
