<template>
  <div class="login-bg">
    <div class="login-box">
      <h3 class="title">登录系统</h3>
      <!-- 表单 -->
      <el-form :model="loginForm" ref="formRef" :rules="rules" size="large">
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
          <el-button class="row-btn" type="primary" @click="handleSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<!-- 组合式API写法 -->
<script setup>
import { ref, reactive } from 'vue'
import store from '@/store'
import router from '@/router'
import loginApi from '@/api/user/login.js'

const route = router.currentRoute

const loginForm = reactive({
  userName: 'admin',
  password: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const formRef = ref()
function handleSubmit() {
  formRef.value.validate((valid) => {
    if (valid) {
      handleLogin()
    }
  })
}
// 登录
async function handleLogin() {
  store.commit('setLogin', {
    token: 'Token-123456789',
    userInfo: { name: 'admin', avatar: '' }
  })
  await store.dispatch('getUserMenus')
  if (route.query.redirect && route.query.redirect != '/login') {
    router.replace(route.query.redirect)
  } else {
    router.replace('/')
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/login/login.scss';
</style>
