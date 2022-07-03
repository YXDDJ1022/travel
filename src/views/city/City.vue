/* 选择城市页面 */
<template>
  <div>
    <!-- 头部 -->
    <city-header></city-header>
    <!-- 搜索框 -->
    <city-search></city-search>
    <!-- 城市 -->
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <!-- 字母表 -->
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      cities: null, // 所有城市
      hotCities: [], // 热门城市
      letter: ''
    }
  },
  methods: {
    handleLetterChange (key) {
      this.letter = key
    },
    /**
     * @description 获取城市数据
     */
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        const data = res.data.data;
        ({ cities: this.cities, hotCities: this.hotCities } = data)
      })
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
