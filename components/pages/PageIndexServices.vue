<template lang="pug">
.i-services
  .container
    .row
      .col
        BaseTitle(v-bind="Title")
    .row
      .i-services__block.col-12.col-md-4(v-for="s, i in service" :key="i")
        .d-flex
          .i-services__icon
            img(:src="require(`~/assets/images/icons/${s.imgUrl}`)")
          div
            p.i-services__title {{ s.title }}
            h4.i-services__desc {{ s.desc }}
        hr.my-5.d-md-none(v-if="i > 2")
</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'

export default {
  components: { BaseTitle },
  data () {
    const Title = {
      subtitle: 'We work with',
      title: 'Amazing Services'
    }
    return {
      Title,
      service: [
        { imgUrl: 'alarm_clock.png', title: 'Photography', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { imgUrl: 'line_graph.png', title: 'Web Design', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { imgUrl: 'computer.png', title: 'Creativity', desc: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
        { imgUrl: 'book.png', title: 'seo', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
        { imgUrl: 'home.png', title: 'Css/Html', desc: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.' },
        { imgUrl: 'digital.png', title: 'digital', desc: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-services
  margin-bottom 6.25rem
  &__block:nth-child(-n+3)
    margin-bottom 3.125rem
    padding-bottom 3.125rem
    border-bottom 1px solid $light
  &__icon
    margin 0.3125rem 1.875rem 0 0
  &__title
    color $dark
    font-size 0.875rem
    font-family montserrat
    text-transform uppercase
</style>
