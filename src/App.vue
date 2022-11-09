<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    // 菜单路径数组
    menuPaths() {
      return ['/', '/login', ...this.$store.getters.menuPaths]
    },
    // 第一个菜单路径
    firstMenuPath() {
      return this.$store.getters.firstMenuPath
    }
  },
  watch: {
    // 路由拦截
    '$route.path'(val) {
      if (!this.menuPaths.includes(val)) {
        if (val != '/index') {
          this.$message.error('暂无权限访问')
        }
        this.$router.replace(this.firstMenuPath)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
