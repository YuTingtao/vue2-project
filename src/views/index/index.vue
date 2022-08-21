<template>
    <div class="">
        欢迎登录系统！当前时间：{{ formatDate(Date.now()) }}
    </div>
</template>

<script>
import { formatDate } from '@/utils';

export default {
    data() {
        return {};
    },
    created() {

    },
    methods: {
        formatDate,
    },
};
</script>

<style lang="scss" scoped>

</style>
