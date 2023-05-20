<template>
    <div class="login-container">
        <h2>用户登录</h2>
        <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" label-width="100px">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">确认登录</el-button>
                <el-button @click="goToRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            loginForm: {
                phone: '',
                password: ''
            },
            loginFormRules: {
                phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // 执行登录逻辑，发送登录请求到后端
                    // 登录成功后的操作
                } else {
                    return false;
                }
            });
        },
        goToRegister() {
            // 跳转到注册页面
            this.$router.push('/register');
        }
    }
};
</script>
  
<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}
</style>
  