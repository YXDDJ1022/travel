<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'city-alphabet'
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
