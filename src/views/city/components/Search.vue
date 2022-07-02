/* 搜索框 */
<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名称或拼音">
  </div>
</template>

<script>
export default {
  name: 'city-search'
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
</style>
