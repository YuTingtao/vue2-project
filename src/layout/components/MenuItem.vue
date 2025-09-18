<template>
  <div v-if="item.meta.visible">
    <!-- 菜单组 -->
    <el-submenu
      v-if="item.children && item.children.filter(item => item.meta.visible).length > 0"
      :index="item.path || item.meta.title">
      <template #title>
        <svg-icon v-if="item.meta.icon" :name="item.meta.icon"></svg-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem
        v-for="item2 in item.children" :key="item2.path"
        :item="item2">
      </MenuItem>
    </el-submenu>
    <!-- 菜单 -->
    <el-menu-item v-else :index="item.path" @click="routerTo(item.path)">
      <svg-icon v-if="item.meta.icon" :name="item.meta.icon"></svg-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    // 路由跳转
    routerTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
