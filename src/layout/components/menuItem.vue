<template>
    <div v-if="!item.hidden">
        <el-menu-item
            v-if="!item.children || item.children.filter(item => !item.hidden).length < 1"
            :index="item.redirect || item.path"
        >
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path || item.redirect">
            <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
            </template>
            <menuItem
                v-for="item2 in item.children" :key="item2.id"
                :item="item2">
            </menuItem>
        </el-submenu>
    </div>
</template>

<script>
export default {
    name: 'menuItem',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>

</style>
