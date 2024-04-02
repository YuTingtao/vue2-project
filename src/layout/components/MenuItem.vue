<template>
  <div v-if="!item.hidden">
    <!-- 菜单组 -->
    <el-submenu
      v-if="item.children && item.children.filter(item => !item.hidden).length > 0"
      :index="item.title">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <MenuItem
        v-for="item2 in item.children" :key="item2.id"
        :item="item2">
      </MenuItem>
    </el-submenu>
    <!-- 菜单 -->
    <el-menu-item v-else :index="item.path || item.redirect">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
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
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
