/* 周末去哪儿 */
<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-weekend',
  data () {
    return {
      // 数据源
      weekendList: [
        {
          id: '00001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
          title: '鼓浪屿',
          desc: '鼓浪屿是一个宁静美丽的小岛，凭借其独特的景色，已然成为厦门名副其实的旅游名片。岛上有日光岩、菽庄花园、风琴博物馆等景点，在日光岩内，可以俯视全岛，将景色尽收眼底。'
        },
        {
          id: '00002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
          title: '鼓浪屿',
          desc: '鼓浪屿是一个宁静美丽的小岛，凭借其独特的景色，已然成为厦门名副其实的旅游名片。岛上有日光岩、菽庄花园、风琴博物馆等景点，在日光岩内，可以俯视全岛，将景色尽收眼底。'
        },
        {
          id: '00003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg',
          title: '鼓浪屿',
          desc: '鼓浪屿是一个宁静美丽的小岛，凭借其独特的景色，已然成为厦门名副其实的旅游名片。岛上有日光岩、菽庄花园、风琴博物馆等景点，在日光岩内，可以俯视全岛，将景色尽收眼底。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles@/mixins.styl'

.weekend-title
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
  margin-top: .2rem
.item
  .item-img-wrapper
    height: 0
    padding-bottom: 33.9%
    overflow: hidden
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
