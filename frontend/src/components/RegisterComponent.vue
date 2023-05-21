<template>
    <div>
        <el-row class="toolbar" justify="center">
            <el-col :span="24">
                <div class="title">高校食堂管理信息系统</div>
            </el-col>
        </el-row>
        <div class="register-container">
            <h2>用户注册</h2>
            <el-form ref="registerForm" :model="registerForm" :rules="registerFormRules" label-width="100px"
                class="form-container">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="registerForm.username"></el-input>
                </el-form-item>
                <!-- 枚举1男 -->
                <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="registerForm.gender">
                        <el-radio :label="1">男</el-radio>
                        <el-radio :label="2">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="用户类型" prop="type">
                    <el-radio-group v-model="registerForm.type">
                        <el-radio :label="1">学生</el-radio>
                        <el-radio :label="2">商家</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手机号" prop="phoneNumber">
                    <el-input v-model="registerForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">注册</el-button>
                    <el-button type="primary" @click="goToAdminLogin">管理员登录</el-button>
                    <el-button type="primary" @click="goToLogin">用户登录</el-button>

                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { Form, FormItem, Input, Button, Radio, RadioGroup } from 'element-ui';
import axios from 'axios';

export default {
    data() {
        return {
            registerForm: {
                username: '',
                gender: null, // Set gender to null initially
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                type:1, // 1学生2管理员
            },
            registerFormRules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
                phoneNumber: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                confirmPassword: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator: this.validatePassword, trigger: 'blur' }
                ]
            }
        };
    },
    components: {
        'el-form': Form,
        'el-form-item': FormItem,
        'el-input': Input,
        'el-button': Button,
        'el-radio': Radio,
        'el-radio-group': RadioGroup
    },
    methods: {
        submitForm() {
            this.$refs.registerForm.validate((valid) => {
                if (valid) {
                    // 执行注册逻辑
                    // 注册成功后的操作
                    const data = {
                        ...this.registerForm,
                        confirmPassword: undefined,
                    }
                    axios.post('/user/register', data)
                        .then(response => {
                            // 注册成功的处理逻辑

                            if (response.data.code === 500) {
                                this.$message({
                                    message: '注册失败，请重新注册！',
                                    type: 'warning'
                                });

                            } else {
                                this.$message({
                                    message: '注册成功，请登录！',
                                    type: 'success'
                                });
                                this.$router.push('/login');
                            }

                        })
                        .catch(error => {
                            // 注册失败的处理逻辑
                            console.error('注册失败', error);
                        });
                } else {
                    console.log('asdf');
                    return false;
                }
            });
        },
        validatePassword(rule, value, callback) {
            if (value !== this.registerForm.password) {
                callback(new Error('两次输入的密码不一致'));
            } else {
                callback();
            }
        },
        goToAdminLogin() {
            this.$router.push('/adminlogin');
        },
        goToLogin() {
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.title {
    background-color: #f0f0f0;
    height: 58px;
    line-height: 58px;
    font-size: larger;
    color: #409EFF;
}
.register-container {
    max-width: 400px;
    margin: 60px auto 0;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}
</style>
