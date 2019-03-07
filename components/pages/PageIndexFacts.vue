<template lang="pug">
.i-facts
  .container
    .row.i-facts__items
      .col-12.col-lg(v-for="item, i in items" :key="i" :class="[0,1,3,4].includes(i) ? 'col-sm-6' : 'col-sm-12'")
        p.i-facts__num {{ item.num }}
        p.i-facts__desc {{ item.desc }}
</template>

<script>
export default {
  data () {
    return {
      items: [
        {num: '42', desc: 'Web Design Projects'},
        {num: '123', desc: 'happy client'},
        {num: '15', desc: 'award winner'},
        {num: '99', desc: 'cup of coffee'},
        {num: '24', desc: 'members'}
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/stylus/variables'

.i-facts
  color $white
  background-color $azure
  &__items > div
    width 100%
    text-align center
    padding 3.4375rem 0
    border-right 1px solid
    border-left 1px solid
  &__items > div:not(:last-child)
    border-bottom 1px solid
  &__num
    line-height 5rem
    font-size 4.5rem
    font-family montserrat-bold
  &__desc
    font-size 0.875rem
    font-family montserrat
    text-transform uppercase
</style>
