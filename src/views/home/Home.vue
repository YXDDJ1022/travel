/* 首页 */
<template>
  <div>
    <!-- 首页的头部 -->
    <home-header></home-header>
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
import { mapState } from 'vuex'
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
      swiperList: [], // 轮播图
      iconList: [], // 功能
      recommendList: [], // 热门推荐
      weekendList: [], // 周末去哪儿
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    /**
     * @description 获取首页数据
     */
    getHomeInfo () {
      axios.get(`/api/index.json?city=${this.city}`).then(res => {
        const data = res.data.data;
        ({
          swiperList: this.swiperList,
          iconList: this.iconList,
          recommendList: this.recommendList,
          weekendList: this.weekendList
        } = data)
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
