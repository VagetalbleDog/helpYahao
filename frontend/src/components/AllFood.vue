<template>
    <div>
        <header-bar></header-bar>
        <h1 class="title">全部菜品</h1>
        <div class="ctn">
                <div  v-for="food in foodList" :key="food.id" class="food-card" @click="goToDetail(food.id)">

                    <img :src="food.foodAvatarUrl" class="food-image" alt="Food Image" />
                    <div class="food-details">
                        <h3>{{ food.foodName }}</h3>
                        <p>价格: {{ food.foodPrice }}</p>
                        <p>类型: {{ foodTypeToString(food.foodType) }}</p>
                        <p>已销售数量: {{ food.saleCount }}</p>
                        <p>是否今日推荐: 是</p>
                        <p>描述: {{ food.foodDesc }}</p>
                </div>
            </div>
            <el-empty class="empty" v-if="foodList.length===0"/>
        </div>
    </div>
</template>


<script>
import HeaderBar from "./HeaderBar.vue"
// import TodayRcm from "./TodayRcm.vue"
import axios from "axios"

export default {
    name: 'HomePage',
    data() {
        return {
            login: 0, // 0未登录，1学生登陆，2商家登录
            foodList: []
        }
    },
    components: {
        HeaderBar,
        // TodayRcm,
    },
    methods: {
        isLogin() {
            if (localStorage.getItem('user')) {
                this.login = JSON.parse(localStorage.getItem('user')).type;
                return;
            } else {
                return;
            }
        },
        getFoodList() {
            axios.get('/food').then(response => {
                    this.foodList = response.data;
            })
        },
        goToDetail(id){
            this.$router.push(`/food/${id}`)
        },
        foodTypeToString(foodType) {
            // 根据foodType的值返回相应的类型字符串
            switch (foodType) {
                case 1:
                    return '主要食物';
                case 2:
                    return '面条';
                case 3:
                    return '蔬菜';
                case 4:
                    return '肉类';
                case 5:
                    return '饮品';
                case 6:
                    return '小吃';
                case 7:
                    return '水果';
                default:
                    return '';
            }
        },
    },
    mounted() {
        this.getFoodList();
    },
}
</script>

<style scoped>
.food-card{
    height: 144px;
    width: 50vw;
    background: #ffffff;
    padding: 16px;
    margin-left: 50%;
    transform: translate(-50%);
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.4);
}
.food-card:hover{
    cursor: pointer;
    background: rgba(0,0,0,0.1);
}
.food-image{
    width: 112px;
    height: 112px;
    border-radius: 5%;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.4);
}
.food-details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 32px;
}
.title{
    margin-bottom: 24px;
}
</style>
