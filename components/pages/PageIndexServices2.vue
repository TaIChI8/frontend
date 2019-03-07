<template lang="pug">
.i-services2
  .container
    .row
      .col
        BaseTitle(v-bind="Title")
    .row
      .col-12.col-md-6
        template(v-for="item, i in items")
          img.img-fluid(v-if="selected === i" :src="require(`~/assets/images/service/${item.img}`)")
      .col-12.col-md-6.mt-md-0.mt-5
        .i-services2__content
          .services2__block.mb-3(v-for="(item, i) in items" :key="i" @click="selected = i")
            .i-services2__title.d-flex.align-items-center.p-3
              img.mr-3(src="~assets/images/icons/photography.png")
              h5 {{ item.title }}
            .i-services2__desc.p-3(v-if="i === selected")
              h4 {{ items[selected].desc }}

</template>

<script>
import BaseTitle from '~/components/base/BaseTitle'
export default {
  components: { BaseTitle },
  data () {
    const Title = {
      subtitle: 'Service',
      title: 'what we do',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    const items = [
      {
        title: 'Photography',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        img: 'service_photo.jpg'
      },
      {
        title: 'Web Design',
        desc: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        img: 'service_photo1.jpg'
      },
      {
        title: 'Creativity',
        desc: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        img: 'service_photo.jpg'
      }
    ]
    return { Title, items, selected: 0 }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-services2
  margin-bottom 6.25rem
  &__title
    border 1px solid $light
  &__desc
    border-left 1px solid $light
    border-right 1px solid $light
    border-bottom 1px solid $light
    font-family roboto-italic
</style>
