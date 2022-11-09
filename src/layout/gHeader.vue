<template>
  <div class="g-header">
    <router-link class="g-logo" to="/">
      <img src="@/assets/img/logo.png" alt="">
      <h2>管理后台</h2>
    </router-link>
    <div class="g-header-right">
      <el-dropdown trigger="hover" placement="bottom">
        <div class="dropdown-title">
          <el-avatar
            :src="userInfo.avatar"
            :size="34"
            icon="el-icon-user-solid"
            shape="circle"
            fit="cover">
          </el-avatar>
          <span>{{ userInfo.realName || userInfo.nickName }}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    }
  },
  methods: {
    // 退出登录
    handleLogout() {
      this.$store.commit('setLogout')
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss">
.g-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    color: #fff;
    background: $primary;
}

.g-logo{
    display: flex;
    align-items: center;
    margin-right: auto;
    img{
        margin-right: 10px;
        width: 36px;
        height: 36px;
    }
    h2{
        font-size: 22px;
        font-weight: normal;
    }
}

.g-header-right{
    display: flex;
    align-items: center;
    .el-dropdown{
        color: #fff;
    }
    .dropdown-title{
        display: flex;
        align-items: center;
    }
    .el-avatar{
        margin-right: 5px;
    }
}
</style>
