/* 功能图标 */
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'home-icons',
  props: {
    iconList: Array
  },
  data () {
    return {
      // vue-awesome-swiper插件的配置选项
      swiperOption: {
        autoplay: false // 关闭自动滚动
      }
    }
  },
  computed: {
    // 对iconList做处理，改造成二维数组结构，方便分页展示
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl'
@import '~styles@/mixins.styl'

  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      position: relative
      overflow: hidden
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        padding: .1rem
        box-sizing: border-box
        img
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        height: .44rem
        line-height: .44rem
        position: absolute
        left: 0
        right: 0
        bottom: 0
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
