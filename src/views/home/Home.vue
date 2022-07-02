/* 首页 */
<template>
  <div>
    <!-- 首页的头部 -->
    <home-header :city="city"></home-header>
    <!-- 轮播图 -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 功能 -->
    <home-icons :iconList="iconList"></home-icons>
    <!-- 热门推荐 -->
    <home-recommend :recommendList="recommendList"></home-recommend>
    <!-- 周末去哪儿 -->
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(res => {
        const data = res.data.data;
        ({
          city: this.city,
          swiperList: this.swiperList,
          iconList: this.iconList,
          recommendList: this.recommendList,
          weekendList: this.weekendList
        } = data)
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
