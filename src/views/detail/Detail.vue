/* 详情页 */
<template>
  <div>
    <!-- 横幅 -->
    <detail-banner></detail-banner>
    <!-- 头部 -->
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'

export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>

.content
  height: 50rem
</style>
