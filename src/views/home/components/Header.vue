/* 首页的头部 */
<template>
  <div class="header">
    <!-- 返回 -->
    <div class="header-left">
      <span class="iconfont icon-fanhui back-icon"></span>
    </div>
    <!-- 搜索 -->
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
    </div>
    <!-- 城市 -->
    <div class="header-right">
      {{ city }}<span class="iconfont icon-jiantou_yemian_xiangxia_o arrow-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl';

  .header
    height: .86rem
    line-height: .86rem
    display: flex
    color: #fff
    background-color $bgColor
    .header-left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        font-size: .4rem
    .header-input
      height: .64rem
      line-height: .64rem
      flex: 1
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background-color #fff
      border-radius: .1rem
      color: #ccc
      box-sizing: border-box
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .36rem
        margin-left: -.09rem
</style>
