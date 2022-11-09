<template>
  <div class="page-home">
    {{ userInfo.realName }}，欢迎登录系统！系统时间：{{ formatDate(Date.now()) }}
  </div>
</template>

<!-- 组合式API写法 -->
<script setup>
import { ref, reactive, computed } from 'vue'
import store from '@/store'
import { formatDate } from '@/utils'

const userInfo = computed(() => store.state.userInfo)
</script>

<style lang="scss" scoped>

</style>
