<template>
  <el-scrollbar class="g-aside">
    <el-menu class="g-menu"
             :default-active="$route.meta.activePath || $route.path"
             router
    >
      <menuItem v-for="item in menus" :key="item.id" :item="item"></menuItem>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import menuItem from './components/menuItem.vue'

export default {
  components: { menuItem },
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
