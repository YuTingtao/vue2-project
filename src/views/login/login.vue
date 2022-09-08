<template>
    <div class="login-bg">
        <div class="login-box">
            <h3 class="title">登录系统</h3>
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

<script>
import loginApi from '@/api/user/login.js'

export default {
    data() {
        return {
            loginForm: {
                userName: 'admin',
                password: '123456',
            },
            rules: {
                userName: [{ required: true, message: '请输入账号/手机号/邮箱', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            }
        }
    },
    methods: {
        // 提交表单
        handleSubmit() {
            this.$refs['formRef'].validate((valid) => {
                if (valid) {
                    this.handleLogin();
                }
            });
        },
        // 登录
        async handleLogin() {
            this.$store.commit('setLogin', {
                token: 'Token-123456789',
                userInfo: { realName: 'admin', avatar: '' },
            });
            await this.$store.dispatch('getMenus');
            sessionStorage.vuex = JSON.stringify(this.$store.state);
            if (this.$route.query.redirect) {
                this.$router.replace(this.$route.query.redirect);
            } else {
                this.$router.replace('/');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/login/login.scss';
</style>
