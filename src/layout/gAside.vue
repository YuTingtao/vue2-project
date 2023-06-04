<template>
  <el-scrollbar class="g-aside">
    <el-menu 
      class="g-menu"
      :default-active="$route.meta.activePath || $route.path"
      router>
      <MenuItem v-for="item in menus" :key="item.id" :item="item"></MenuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import MenuItem from './components/MenuItem.vue'

export default {
  components: { MenuItem },
  data() {
    return {}
  },
  computed: {
    menus() {
      return this.$store.state.menus
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.g-aside{
    position: fixed;
    left: 0;
    top: 60px;
    bottom: -17px;
    z-index: 1000;
    width: 220px;
    background: #fff;
    border-right: 1px solid $bd-color;
    .el-submenu__title i{
        color: #666;
    }
}

.g-menu{
    border-right: none;
}
</style>
