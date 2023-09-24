<template>
  <div class="page-svg">
    <div class="icon-box">
      <svg-icon name="case" size="16px"></svg-icon>
      <span> svg-icon案例</span>
    </div>

    <div class="permission">
      <span>菜单权限：</span>
      <el-button v-permission="{ path: '/svgIcon' }" type="primary">svg图标</el-button>
      <el-button v-permission="{ path: '/svgIcon2' }" type="primary">svg图标2</el-button>
    </div>
    
    <div class="permission">
      <span>按钮权限：</span>
      <!-- 简单用法 -->
      <el-button v-permission="'add'" type="primary">新增</el-button>
      <el-button v-permission="'edit'" type="primary">编辑</el-button>
      <!-- 高级用法 -->
      <el-button v-permission="{ path: '/svgIcon', btn: 'delete' }" type="primary">删除</el-button>
      <!-- 无权限 -->
      <el-button v-permission="'export'" type="primary">导出</el-button>
    </div>
  </div>
</template>

<!-- 选项式API -->
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.page-svg {
  .permission {
    margin-top: 20px;
  }
}
</style>
