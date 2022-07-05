/* 横幅 */
<template>
  <div>
    <!-- 图片 -->
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="imgs[0]" alt="">
      <div class="banner-info">
        <div class="banner-title">大美山西，表里山河，与历史重逢</div>
        <div class="banner-number">
          <i class="iconfont icon-tupian"></i>
          图片</div>
      </div>
    </div>
    <!-- 图片画廊 -->
    <common-gallary v-show="showGallary" :imgs="imgs" :show-gallary.sync="showGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue'

export default {
  name: 'detail-banner',
  components: {
    CommonGallary
  },
  data () {
    return {
      // 图片数据源
      imgs: [
        'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/24490c207f818119f3541b7bc48d9da9.jpg',
        'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/441e13aef8edd94ebe4e1c665bf1f62e.jpg',
        'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/be049a68a045fa43ecc1044e5bbbd343.jpg'
      ],
      showGallary: false // 控制图片画廊组件的显示与隐藏
    }
  },
  methods: {
    /**
     * @description 点击图片后显示画廊组件
     */
    handleBannerClick () {
      this.showGallary = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  width: 100%
  height: 0
  padding-bottom: 53%
  position: relative
  overflow: hidden
  .banner-img
    width: 100%
  .banner-info
    width: 100%
    display: flex
    position: absolute
    left: 0
    bottom: 0
    line-height: .6rem
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      padding: 0 .2rem
      color: #fff
    .banner-number
      padding: 0 .4rem
      border-radius: .2rem
      background-color rgba(0, 0, 0, .8)
      font-size: .24rem
      color: #fff
</style>
