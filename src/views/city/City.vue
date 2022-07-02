<template>
  <div>
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 搜索框 -->
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
