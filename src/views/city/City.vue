<template>
  <div>
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 搜索框 -->
    <city-search></city-search>
    <!--  -->
    <city-list></city-list>
    <!-- 字母表 -->
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
