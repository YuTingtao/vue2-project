<!-- 全局layout -->
<template>
  <div class="g-layout">
    <GHeader></GHeader>
    <div class="g-body">
      <GAside></GAside>
      <router-view class="g-page"></router-view>
    </div>
  </div>
</template>

<script>
import GHeader from './GHeader.vue'
import GAside from './GAside.vue'

export default {
  components: { GHeader, GAside },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.g-layout{
    height: 100%;
    background: #fff;
}

.g-body{
    box-sizing: border-box;
    height: 100%;
    padding-top: 60px;
    padding-left: 220px;
}

.g-page{
    box-sizing: border-box;
    min-height: 100%;
    padding: 20px;
    background: #fff;
}
</style>
