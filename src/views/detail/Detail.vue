/* 详情页 */
<template>
  <div>
    <!-- 横幅 -->
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <!-- 头部 -->
    <detail-header></detail-header>
    <div class="content">
      <!-- 门票 -->
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List'

export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '', // 景点名
      bannerImg: '', // 主图
      gallaryImgs: [], // 画廊图
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        console.log(res.data.data)
        const data = res.data.data;
        ({
          sightName: this.sightName,
          bannerImg: this.bannerImg,
          gallaryImgs: this.gallaryImgs,
          categoryList: this.list
        } = data)
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

.content
  height: 50rem
</style>
