<template lang="pug">
.i-brands
  hooper.container.d-none.d-lg-block(:autoPlay="true" :playSpeed="3000" :itemsToShow="6" :infiniteScroll="true")
    slide(v-for="i in 12" :key="i")
      .text-center
        img(src="~assets/images/brands/logotypes1.png")
  hooper.container.d-none.d-md-block.d-lg-none(:autoPlay="true" :playSpeed="3000" :itemsToShow="3" :infiniteScroll="true")
    slide(v-for="i in 12" :key="i")
      .text-center
        img(src="~assets/images/brands/logotypes1.png")
  hooper.container.d-block.d-md-none(:autoPlay="true" :playSpeed="3000" :itemsToShow="1" :infiniteScroll="true")
    slide(v-for="i in 12" :key="i")
      .text-center
        img(src="~assets/images/brands/logotypes1.png")
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: { Hooper, Slide }
}
</script>

<style lang="stylus">
.i-brands
  padding 4.375rem 0 0
  background-color #f8f8f8
</style>
