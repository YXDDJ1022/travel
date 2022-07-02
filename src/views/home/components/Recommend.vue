/* 热门推荐 */
<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-recommend',
  data () {
    return {
      // 数据源
      recommendList: [
        {
          id: '00001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '鼓浪屿',
          desc: '鼓浪屿是一个宁静美丽的小岛，凭借其独特的景色，已然成为厦门名副其实的旅游名片。岛上有日光岩、菽庄花园、风琴博物馆等景点，在日光岩内，可以俯视全岛，将景色尽收眼底。'
        },
        {
          id: '00002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '鼓浪屿',
          desc: '鼓浪屿是一个宁静美丽的小岛，凭借其独特的景色，已然成为厦门名副其实的旅游名片。岛上有日光岩、菽庄花园、风琴博物馆等景点，在日光岩内，可以俯视全岛，将景色尽收眼底。'
        },
        {
          id: '00003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
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

.recommend-title
  line-height: .8rem
  background-color: #eee
  text-indent: .2rem
  margin-top: .2rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    min-width: 0
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
    .item-button
      padding: 0 .2rem
      border-radius: .06rem
      background-color #ff9300
      color: #fff
      margin-top: .16rem
      line-height: .44rem
</style>
