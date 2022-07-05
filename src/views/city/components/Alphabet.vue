/* 字母表 */
<template>
  <ul class="list">
    <li class="item" @click="handleLetterClick(item)" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" v-for="(item, index) of letters" :key="index" :ref="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'city-alphabet',
  props: {
    cities: Object // 所有城市
  },
  data () {
    return {
      touchStatus: false,
      startY: 0, // 字母'A'距离有定位的父元素顶部的距离(从“搜索框”组件底部到字母“A”顶部之间的距离)
      timer: null // 延时器
    }
  },
  computed: {
    // 对传递过来的cities数据处理成数组结构
    letters () {
      if (!this.cities) {
        return []
      }
      return Object.keys(this.cities)
    }
  },
  methods: {
    /**
     * @description 点击哪个字母，就显示该字母对应的城市
     * @param { string } key 字母
     */
    handleLetterClick (key) {
      this.$emit('change', key)
    },
    /**
     * @description 触屏开始事件处理函数
     */
    handleTouchStart () {
      this.touchStatus = true
    },
    /**
     * @description 在触屏滑动的过程中判断当前手指在哪个字母上，显示对应的城市
     * @param { object } e 事件对象
     */
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 用延时器进行节流，提升性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 手指距离屏幕顶部的距离减去顶部“城市选择”组件和“搜索框”组件的高度(79px)可得到手指与“搜索框”组件底部间的距离
          const touchY = e.touches[0].clientY - 79
          // 手指与字母“A”之间的距离除以每个字母的高度20px可得到第几个字母
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    /**
     * @description 触屏结束事件处理函数
     */
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    // 当通过props传递的cities有数据后会触发此钩子函数
    // 获取从“搜索框”组件底部到字母“A”顶部之间的距离
    this.startY = this.$refs.A[0].offsetTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/varibles.styl'

.list
  width: .4rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: absolute
  top: 1.58rem
  bottom: 0
  right: 0
  .item
    line-height: .4rem
    color: $bgColor
</style>
