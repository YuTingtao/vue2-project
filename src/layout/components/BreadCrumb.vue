<template>
  <!-- 面包屑 -->
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path + index" :to="item.path">
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: []
    };
  },
  watch: {
    // 监听路由path
    '$route.path': {
      handler: function() {
        this.getBreadcrumbs();
      },
      immediate: true
    }
  },
  methods: {
    // 获取面包屑数据
    getBreadcrumbs() {
      this.breadcrumbs = [];
      let matched = this.$route.matched;
      if (matched[0].name == 'layout') {
        matched = matched.slice(1);
      }
      // console.log(matched)
      if (matched.length > 1 || matched[0].meta.parentPath) {
        for (let i = matched.length - 1; i >= 0; i--) {
          const item = matched[i];
          let path = item.path;
          // 最后一层或者菜单模块的path为空
          if ((i == matched.length - 1) || item.meta.type == 0) {
            path = '';
          }
          this.breadcrumbs.unshift({
            path: path,
            title: item.meta.title
          });
          // 添加自定义parentPath
          const parentPath = item.meta.parentPath || '';
          if (parentPath) {
            this.breadcrumbs.unshift(...this.getParentsBread(parentPath));
          }
        }
      }
    },
    // 递归获取父级面包屑
    getParentsBread(path, arr = []) {
      // 所有路由
      const routes = this.$router.getRoutes();
      const parent = routes.find(item => item.path == path);
      if (parent) {
        arr.unshift({
          path: parent.meta.type == 0 ? '' : parent.path,
          title: parent.meta.title
        });
      }
      if (parent.meta.parentPath) {
        return this.getParentsBread(parent.meta.parentPath, arr);
      } else {
        return arr;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
