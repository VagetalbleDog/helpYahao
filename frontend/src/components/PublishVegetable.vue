<template>
    <div>
        <header-bar></header-bar>
        <el-form ref="foodForm" label-width="120px">
            <el-form-item label="食物名称">
                <el-input v-model="food.foodName"></el-input>
            </el-form-item>
            <el-form-item label="食物展示">
                <el-input v-model="food.foodAvatarUrl"></el-input>
            </el-form-item>
            <el-form-item label="食物价格">
                <el-input v-model="food.foodPrice"></el-input>
            </el-form-item>
            <el-form-item label="食物类型">
                <el-select v-model="food.foodType" placeholder="--请选择食品的类型--">
                    <el-option label="主要食物" :value="1"></el-option>
                    <el-option label="面条" :value="2"></el-option>
                    <el-option label="蔬菜" :value="3"></el-option>
                    <el-option label="肉类" :value="4"></el-option>
                    <el-option label="饮品" :value="5"></el-option>
                    <el-option label="小吃" :value="6"></el-option>
                    <el-option label="水果" :value="7"></el-option>
                    <!-- 更多选项... -->
                </el-select>
            </el-form-item>
            <el-form-item label="卖出数量">
                <el-input-number v-model="food.saleCount" :min="0"></el-input-number>
            </el-form-item>
            <el-form-item label="是否为今日推荐">
                <el-radio-group v-model="food.isRcm">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="食品描述">
                <el-input type="textarea" v-model="food.description" :rows="4" placeholder="请输入食品描述"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderBar from './HeaderBar.vue';

export default {
    data() {
        return {
            food: {
                foodName: '',
                foodAvatarUrl: '',
                foodPrice: '',
                foodType: 0,
                saleCount: 0,
                isRcm: '',
                foodDesc: '',
            },
        };
    },
    components: {
        HeaderBar,
    },
    methods: {
        submitForm() {
            this.$refs.foodForm.validate((valid) => {
                if (valid) {
                    // 表单验证通过，可以进行提交操作
                    this.food.isRcm = parseInt(this.food.isRcm);
                    // 在这里执行提交表单的逻辑，例如发送网络请求等
                    axios.post('/food/create', this.food).then(response => {
                        if (response.data.code === 500) {
                            this.$message({
                                message: '发布菜品失败！',
                                type: 'warning'
                            });

                        } else {
                            this.$message({
                                message: '发布菜品成功！',
                                type: 'success'
                            });
                            this.$router.push('/login');
                        }
                    })
                } else {
                    // 表单验证不通过，显示错误信息等处理
                }
            });
        },
    },
};
</script>
  