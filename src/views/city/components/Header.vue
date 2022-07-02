<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont icon-fanhui header-back-icon"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'city-header'
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl'

.header
  height: $headerHeight
  line-height: $headerHeight
  position: relative
  text-align: center
  overflow: hidden
  color: #fff
  background-color $bgColor
  font-size: .32rem
  .header-back-icon
    width: .64rem
    position: absolute
    left: 0
    top: 0
    font-size: .4rem
    color: #fff
</style>
