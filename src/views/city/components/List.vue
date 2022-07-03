/* 城市 */
<template>
  <div class="list" ref="list">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 所有城市 -->
      <div class="area" v-for="(value, key) in cities" :key="key">
        <!-- 开头字母 -->
        <div class="title border-topbottom">{{ key }}</div>
        <!-- 当前字母下的所有城市 -->
        <div class="item-list">
          <div class="item border-bottom" v-for="item of value" :key="item.id">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  props: {
    cities: Object, // 所有城市
    hotCities: Array // 热门城市
  },
  watch: {
    // 当获取到所有城市数据并且等页面结构渲染完成后，生成滚动条
    cities (newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.list)
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl';

.border-topbottom
  &:before,
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  width: 100%
  position: absolute
  top: 1.58rem
  left: 0
  bottom: 0
  overflow: hidden
  .title
    line-height: .54rem
    padding-left: .2rem
    font-size: .26rem
    color: #666
    background-color #eee
  .button-list
    padding: .1rem
    padding-right: .6rem
    overflow: hidden
    .button-wrapper
      width: 33.33%
      float: left
      .button
        padding: .1rem 0
        margin: .1rem
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      padding-left: .2rem
      line-height: .76rem
      color: #666
</style>
