<!-- 全局layout -->
<template>
  <div class="app-layout">
    <!-- 头部 -->
    <div class="app-head" :style="`left: ${isCollapse ? '64px' : '220px'};`">
      <i class="menu-collapse" :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="toggleCollapse">
      </i>
      <el-dropdown trigger="hover">
        <div class="app-head-avatar">
          <el-avatar :src="userInfo.avatar" :size="32" icon="el-icon-user-solid" shape="circle" fit="cover">
          </el-avatar>
          <span>{{ userInfo.name }}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 侧边菜单 -->
    <div class="app-aside">
      <el-scrollbar>
        <el-menu
          :collapse="isCollapse"
          router
          :default-active="$route.meta.activePath || $route.path"
          text-color="#fff"
          background-color="#424548">
          <MenuItem v-for="item in userMenus" :key="item.id" :item="item"></MenuItem>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 主体 -->
    <div class="app-main" :style="`padding-left: ${isCollapse ? '64px' : '220px'};`">
      <!-- 页面主体 -->
      <router-view class="app-view"></router-view>
    </div>
  </div>
</template>

<script>
import MenuItem from './components/MenuItem.vue'
import loginApi from '@/api/user/login.js'

export default {
  components: { MenuItem },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    },
    userMenus() {
      return this.$store.state.userMenus
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 退出登录
    handleLogout() {
      loginApi
        .logout()
        .then(res => {
          this.$store.commit('setLogout')
          this.$router.replace('/login')
        })
        .catch(err => {
          this.$store.commit('setLogout')
          this.$router.replace('/login')
        })
    }
  }
}
</script>

<style lang="scss">
.app-layout {
  height: 100%;
  background: #fff;
}

// 头部
.app-head {
  position: fixed;
  top: 0;
  left: 220px;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 56px;
  padding: 0 20px;
  color: #333;
  background: #fff;
  border-bottom: 1px solid #f2f6fc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  transition: left 0.3s ease-in-out;
  .menu-collapse {
    font-size: 18px;
    color: #333;
    cursor: pointer;
  }
}
.app-head-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-avatar {
    margin-right: 5px;
  }
}

// 侧边菜单
.app-aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 110;
  color: #fff;
  background: #424548;
  .el-scrollbar {
    height: calc(100% + 17px);
  }
  .el-menu {
    width: 220px;
    border-right: none;
  }
  .el-menu--collapse {
    width: 64px;
  }
}

.el-menu--collapse > div > .el-menu-item span,
.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

.el-menu--collapse > div > .el-menu-item .el-submenu__icon-arrow,
.el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}

// 主体
.app-main {
  box-sizing: border-box;
  padding-left: 220px;
  padding-top: 56px;
  min-height: 100%;
  background: #fff;
  transition: padding-left 0.3s ease-in-out;
}

.app-view {
  box-sizing: border-box;
  min-height: 100%;
  margin: 20px;
}
</style>
