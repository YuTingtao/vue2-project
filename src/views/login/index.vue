<template>
  <div class="login-page">
    <div class="login-box">
      <h3 class="title">欢迎登录</h3>

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
          <el-button class="row-btn" type="primary" :loading="loading" @click="onSubmit">登 录</el-button>
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
    };
  },
  created() {},
  methods: {
    // 提交
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleLogin();
        }
      });
    },
    // 登录
    async handleLogin() {
      this.loading = true;
      this.$store.commit('setLogin', {
        token: 'Token-123456789',
        userInfo: { name: 'admin', avatar: '' }
      });
      this.loading = false;
      await this.$store.dispatch('getUserMenus');
      const redirect = this.$route.query.redirect;
      if (redirect && redirect != '/login') {
        this.$router.replace(redirect);
      } else {
        this.$router.replace(this.$store.getters.firstMenu);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow-y: auto;
  background: url('@/assets/img/login/login-bg.jpg') no-repeat;
  background-size: cover;
}

.login-box {
  box-sizing: border-box;
  width: 480px;
  padding: 30px;
  margin: 0 12%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, .15);
  .title {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    color: #409efe;
  }
  .el-form-item {
    &:last-child {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
  :deep(.el-icon) {
    font-size: 16px;
  }
}

.row-btn {
  width: 100%;
  font-size: 16px;
}

@media screen and (max-width: 950px) {
  .login-box {
    margin: 0 8%;
  }
}
</style>
