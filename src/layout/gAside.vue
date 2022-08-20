<template>
    <el-scrollbar class="g-aside">
        <el-menu class="g-menu"
            :default-active="$route.meta.activePath || $route.path"
            router
        >
            <el-menu-item index="/index">
                <i class="el-icon-house"></i>
                <span>系统首页</span>
            </el-menu-item>
            <el-submenu index="/">
                <template #title>
                    <i class="el-icon-magic-stick"></i>
                    <span>使用案例</span>
                </template>
                <el-menu-item index="/svgIcon">
                    <span>svgIcon</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-scrollbar>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    computed: {
        menus() {
            return this.$store.state.menus;
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
}

.g-menu{
    border-right: none;
}
</style>
