<template>
    <div>
        <header-bar></header-bar>
        <today-rcm :foodList="foodList"></today-rcm>
    </div>
</template>


<script>
import HeaderBar from "./HeaderBar.vue"
import TodayRcm from "./TodayRcm.vue"
import axios from "axios"


export default {
    name: 'HomePage',
    data() {
        return {
            login:0, // 0未登录，1学生登陆，2商家登录
            foodList:[]
        }
    },
    components: {
        HeaderBar,
        TodayRcm,
    },
    methods: {
        isLogin(){
            if(localStorage.getItem('user')){
                this.login = JSON.parse(localStorage.getItem('user')).type;
                return;
            }else {
                return;
            }
        },
        getFoodList(){
            axios.get('/food').then(response => {
                if (response.data.code === 500) {
                    this.$message({
                        message:'获取今日推荐失败！',
                        type: 'warning',
                    })
                }else {
                    this.foodList = response.data;
                }
            })
        },
    },
    mounted(){
        this.getFoodList();
    }
}
</script>

<style scoped></style>
