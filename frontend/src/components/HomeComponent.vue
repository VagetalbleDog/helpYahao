<template>
    <div>
        <div v-if="login===0"><header-bar></header-bar></div>
        <div v-else-if="login===1"><student-header-bar></student-header-bar></div>
        <div v-else><saler-header-bar></saler-header-bar></div>
        <today-rcm></today-rcm>

    </div>
</template>


<script>
import HeaderBar from "./HeaderBar.vue"
import TodayRcm from "./TodayRcm.vue"
import axios from "axios"
import StudentHeaderBar from "./StudentHeaderBar.vue"
import SalerHeaderBar from './SalerHeaderBar.vue'

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
        StudentHeaderBar,
        SalerHeaderBar,
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
            axios.get('/').then(response => {
                if (response.data.code === 500) {
                    this.$message({
                        message:'获取今日推荐失败！',
                        type: 'warning',
                    })
                }else {
                    this.foodList = response.data.data;
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
