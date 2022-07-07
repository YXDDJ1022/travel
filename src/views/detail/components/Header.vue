/* 头部 */
<template>
  <div>
    <!-- 返回按钮 -->
    <div class="header-abs" @click="back" v-if="showAbs">
      <i class="iconfont icon-fanhui header-abs-back"></i>
    </div>
    <!-- 顶部标题栏 -->
    <div class="header-fixed" :style="opacityStyle" v-else>
      景点详情
      <router-link to="/">
        <i class="iconfont icon-fanhui header-fixed-back"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  data () {
    return {
      showAbs: true, // 控制返回按钮的显示与隐藏
      // 顶部标题栏CSS样式
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    /**
     * @description 点击【返回按钮】时执行
     */
    back () {
      this.$router.push('/')
    },
    /**
     * @description 滚动条滚动事件处理函数
     */
    handleScroll () {
      const top = document.documentElement.scrollTop
      this.showAbs = !(top > 60)
      if (top > 60 && top < 140) {
        const opacity = top / 140
        this.opacityStyle = {
          opacity
        }
      }
    }
  },
  activated () {
    // 注册滚动条滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl'

.header-abs
  width: .8rem
  height: .8rem
  line-height: .8rem
  position: absolute
  left: .2rem
  top: .2rem
  border-radius: .4rem
  background-color rgba(0, 0, 0, .8)
  text-align: center
  .header-abs-back
    color: #fff
    font-size: .4rem
.header-fixed
  width: 100%
  height: $headerHeight
  line-height: $headerHeight
  position: fixed
  top: 0
  left: 0
  z-index: 10
  text-align: center
  color: #fff
  background-color $bgColor
  font-size: .32rem
  .header-fixed-back
    width: .64rem
    position: absolute
    left: 0
    top: 0
    font-size: .4rem
    color: #fff
</style>
