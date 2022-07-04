/* 搜索框 */
<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名称或拼音">
    </div>
    <!-- 搜索结果 -->
    <div class="search-content" v-show="keyword" ref="search-result">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city-search',
  props: {
    cities: Object // 所有城市
  },
  data () {
    return {
      keyword: '', // 搜索内容
      list: [], // 搜索结果
      timer: null // 延时器
    }
  },
  watch: {
    keyword (newVal) {
      if (newVal === '') {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.list = []
        Object.values(this.cities).forEach(items => {
          items.forEach(city => {
            if (city.name.includes(this.keyword) || city.spell.includes(this.keyword)) {
              this.list.push(city)
            }
          })
        })
        if (this.scroll) {
          this.$nextTick(() => {
            this.scroll.refresh()
          })
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs['search-result'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl'

.search
  height: .72rem
  padding: 0 .1rem
  background-color $bgColor
  .search-input
    width: 100%
    height: .62rem
    line-height: .62rem
    padding: 0 .3rem
    border-radius: .06rem
    text-align: center
    color: #666
    box-sizing: border-box
.search-content
  width: 100%
  position: absolute;
  top: 1.58rem
  left: 0
  bottom: 0
  z-index: 10
  background-color: #eee
  overflow: hidden
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background-color #fff
</style>
