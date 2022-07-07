/* 门票 */
<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>{{ item.title }}
      </div>
      <!-- 递归组件 -->
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-list',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>

.item-title
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
  display: flex
  align-items: center
  .item-title-icon
    width: .36rem
    height: .36rem
    display: inline-block
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) no-repeat 0 -.45rem/.4rem 3rem
    margin-right: .1rem
.item-children
  padding: 0 .2rem
</style>
