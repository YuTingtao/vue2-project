<template>
  <div class="login-bg">
    <div class="login-box">
      <h3 class="title">登录</h3>
      <!-- 表单 -->
      <el-form :model="loginForm" ref="form" :rules="rules" size="large">
        <el-form-item label="" prop="userName">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入账号/手机号/邮箱"
            prefix-icon="el-icon-user">
          </el-input>
        </el-form-item>

        <el-form-item label="" prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            type="password"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="row-btn" type="primary" :loading="loading" @click="handleSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: 'admin',
        password: '123456'
      },
      rules: {
        userName: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  created() {},
  methods: {
    // 提交
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleLogin()
        }
      })
    },
    // 登录
    async handleLogin() {
      this.loading = true
      this.$store.commit('setLogin', {
        token: 'Token-123456789',
        userInfo: { name: 'admin', avatar: '' }
      })
      this.loading = false
      await this.$store.dispatch('getUserMenus')
      const redirect = this.$route.query.redirect
      if (redirect && redirect != '/login') {
        this.$router.replace(redirect)
      } else {
        this.$router.replace(this.$store.getters.firstMenu)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background: #f2f6fa;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url('@/assets/img/login/bg.jpg') no-repeat 50% 50%;
    background-size: cover;
    filter: brightness(0.6);
  }
}

.login-box {
  position: relative;
  z-index: 1;
  width: 500px;
  box-sizing: border-box;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0 40px 0;
  }
  .el-form-item {
    &:last-child {
      margin-top: 30px;
    }
  }
  :deep(.el-input__prefix) {
    font-size: 16px;
  }
}

.row-btn {
  width: 100%;
  font-size: 16px;
}
</style>
