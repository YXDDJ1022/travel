/* 首页 */
<template>
  <div>
    <!-- 首页的头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
