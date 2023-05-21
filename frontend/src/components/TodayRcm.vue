<template>
    <div style="width: 40vw;display: flex;flex-direction: column;align-items: center;">
        <el-card v-for="(food, index) in filteredFoodArr" :key="index" class="food-card" style="width:40vw;">
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
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
        };
    },
    computed: {
        filteredFoodArr() {
            return this.foodList.filter(food => food.isRcm === 1);
        },
    },
    props:{
        foodList:{
            type: Array,
        }
    },
    methods: {
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
        getTodayRcm() {
            axios.get('/').then(response => {
                if (response.data.code === 500) {
                    this.$message({
                        message: '今日暂时没有推荐商品！',
                        type: 'warning'
                    });

                } else {
                    this.foodArr = response.data.a;
                }
            })
        }

    },
    mounted() {
        this.getTodayRcm();
    }
};
</script>
  
<style scoped>
.food-card {

    margin-bottom: 20px;
    border: 1px solid #ebeef5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.food-image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px 0 0 8px;
}

.food-info {
    display: flex;
    padding: 10px;
}

.food-details {
    padding-left: 10px;
}
</style>
  