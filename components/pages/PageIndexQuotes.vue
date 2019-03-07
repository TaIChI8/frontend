<template lang="pug">
.i-quotes.py-5
  hooper(:autoPlay="true" :playSpeed="3000")
    slide(v-for="i in 4" :key="i")
      .container
        .row.py-5
          .col-12.col-md-auto.i-quotes__icon.mr-5.text-center.mb-4.mb-md-0
            img.img-fluid(src="~assets/images/icons/quote.png")
          .col-12.col-md.d-flex.flex-column.justify-content-between
            .i-quotes__desc “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            .i-quotes__name Jon Doe {{i}}
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: { Hooper, Slide }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-quotes
  background-color #f8f8f8
  &__content
    margin 4.375rem auto
    max-width 1000px
  &__desc
    color $grey
    font-family roboto-italic
  &__name
    font-family kaushan
  &__desc, &__name
    font-size 1.5rem
</style>
