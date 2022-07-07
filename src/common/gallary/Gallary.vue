/* 图片画廊 */
<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <template v-if="imgs.length">
          <swiper-slide v-for="(item, index) of imgs" :key="index">
            <img class="gallary-img" :src="item" alt="">
          </swiper-slide>
        </template>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-gallary',
  props: {
    // 图片数据
    imgs: {
      type: Array,
      default () {
        return []
      }
    },
    showGallary: Boolean // 控制画廊的显示与否
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 显示成页码形式
        // 当滑块容器发生变化时自动重新初始化
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('update:show-gallary', false)
    }
  }
}
</script>

<style lang="stylus" scoped>

.wrapper >>> .swiper-container
  width: 100%
  height: 100vw
  overflow: inherit

.container
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 20
  background-color #000
  display: flex
  flex-direction: column
  justify-content: center
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallary-img
      width: 100%
      height: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
