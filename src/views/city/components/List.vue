<template>
  <div class="list" ref="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
          <div class="item border-bottom">a</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
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
