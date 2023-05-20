<template>
    <div class="login-container">
        <h2>管理员登录</h2>
        <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" label-width="100px">
            <el-form-item label="手机号" prop="phoneNumber">
                <el-input v-model="loginForm.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">确认登录</el-button>
                <el-button @click="goToLogin">用户登录</el-button>
                <el-button @click="goToRegister">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { Form, FormItem, Input, Button} from 'element-ui';
import axios from 'axios';
export default {
    data() {
        return {
            loginForm: {
                phoneNumber: '',
                password: ''
            },
            loginFormRules: {
                phoneNumber: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    components: {
        'el-form': Form,
        'el-form-item': FormItem,
        'el-input': Input,
        'el-button': Button,
    },
    methods: {
        login() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // 执行登录逻辑
                    // 登录成功后的操作
                    axios.post('/user/login', this.loginForm)
                        .then(response => {
                            // 登录成功的处理逻辑
                            if (response.data.code === 500) {
                                this.$message({
                                    message: '登录失败',
                                    type: 'warning'
                                });
                            }else {
                                this.$message({
                                    message: '登陆成功！',
                                    type: 'success'
                                });
                                localStorage.setItem('id', response.data.id);
                                this.$router.push('/home');
                            }

                        })
                        .catch(error => {
                            // 注册失败的处理逻辑
                            console.error('注册失败', error);
                        });
                } else {
                    return false;
                }
            });
        },
        goToRegister() {
            // 跳转到注册页面
            this.$router.push('/register');
        },
        goToLogin(){
            this.$router.push('/login');
        }
    }
};
</script>
  
<style scoped>
.login-container {
    max-width: 400px;
    margin: 60px auto 0;
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
  