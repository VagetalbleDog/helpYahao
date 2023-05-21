<template>
    <div>
        <div v-if="login === 0"><header-bar></header-bar></div>
        <div v-else-if="login === 1"><student-header-bar></student-header-bar></div>
        <div style="width: 40vw;display: flex;flex-direction: column;align-items: center;">
            <el-card v-for="(food, index) in foodList" :key="index" class="food-card" style="width:40vw;">
                <div class="food-info">
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
            </el-card>
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
    },
    mounted() {
        this.getFoodList();
    }
}
</script>

<style scoped></style>
