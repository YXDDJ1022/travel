/* 城市 */
<template>
  <div class="list" ref="list">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ city }}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 所有城市 -->
      <div class="area" v-for="(value, key) in cities" :key="key" :ref="key">
        <!-- 开头字母 -->
        <div class="title border-topbottom" >{{ key }}</div>
        <!-- 当前字母下的所有城市 -->
        <div class="item-list">
          <div class="item border-bottom" @click="handleCityClick(item.name)" v-for="item of value" :key="item.id">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'city-list',
  props: {
    cities: Object, // 所有城市
    hotCities: Array, // 热门城市
    letter: String // 城市字母
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['SET_CITY']),
    /**
     * @description 点击某个城市时执行
     * @param { string } city 城市名称
     */
    handleCityClick (city) {
      this.SET_CITY(city)
      this.$router.push('/')
    }
  },
  watch: {
    // 滚动到指定节点位置
    letter (newVal) {
      if (newVal) {
        this.scroll.scrollToElement(this.$refs[newVal][0])
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list, {
      click: true // better-scroll默认禁用了移动端的点击事件，开启
    })
  },
  updated () {
    if (this.$store.state.city && this.cities && this.hotCities.length > 0) {
      this.scroll.refresh()
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
