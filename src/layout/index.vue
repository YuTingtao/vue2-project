<!-- 全局layout -->
<template>
  <div class="g-layout">
    <gHeader></gHeader>
    <div class="g-body">
      <gAside></gAside>
      <router-view class="g-page"></router-view>
    </div>
  </div>
</template>

<script>
import gHeader from './gHeader.vue'
import gAside from './gAside.vue'

export default {
  components: { gHeader, gAside },
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
