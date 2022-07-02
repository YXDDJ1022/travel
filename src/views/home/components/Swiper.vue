/* 轮播图 */
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="轮播图">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'home-swiper',
  data () {
    return {
      // vue-awesome-swiper插件的配置选项
      swiperOption: {
        pagination: '.swiper-pagination', // 带有“小圆点”的轮播控件
        loop: true // 可循环轮播
      },
      // 轮播图数据源
      swiperList: [
        {
          id: '00001',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20220618_dujia_homepage_750x192_V2.jpg'
        },
        {
          id: '00002',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20220625_qunar_dujia_homepage_a750x192_3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  width: 100%
  height: 0
  padding-bottom: 25.6%
  overflow: hidden
  background-color #eee
  .swiper-img
    width: 100%
</style>
