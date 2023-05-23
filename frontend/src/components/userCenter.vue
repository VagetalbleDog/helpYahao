<template>
  <div>
    <header-bar></header-bar>
    <div class="ctn">
      <div class="mainTitle">用户信息中心</div>
      <div class="table">
        <el-descriptions border column="1">
          <el-descriptions-item label="用户姓名">
            {{ user.username }}
          </el-descriptions-item>
          <el-descriptions-item label="电话号码">
            {{ user.phoneNumber }}
          </el-descriptions-item>
          <el-descriptions-item label="性别">
            {{ user.gender === 1 ? "男性" : "女性" }}
          </el-descriptions-item>
          <el-descriptions-item label="用户类型">
            {{ user.type === 1 ? "学生" : "商家" }}
          </el-descriptions-item>
          <el-descriptions-item label="操作">
            <el-button @click="goToSetUserInfo(user.id)"
              >设置个人信息</el-button
            >
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="mainTitle" v-if="user.type === 2">您发布的菜品</div>
      <!-- 主页菜品列表 -->
      <div v-if="user.type === 2">
        <div
          v-for="food in user.publishFoods"
          :key="food.id"
          class="food-card"
          @click="goToDetail(food.id)"
        >
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
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import HeaderBar from "./HeaderBar.vue";
export default {
  data() {
    return {
      user: {
        id: 1,
        username: "",
        gender: 1, // Set gender to null initially
        phoneNumber: "",
        password: "",
        type: 1,
        publishFoods: [],
      },
    };
  },
  components: {
    HeaderBar,
  },
  methods: {
    fetchUserInfo(id) {
      axios
        .get(`/user/${id}`)
        .then((res) => {
          this.user = res.data;
        })
        .catch((e) => {
          console.error(e);
        });
    },
    goToSetUserInfo(id) {
      this.$router.push(`/setUserInfo/${id}`);
    },
    foodTypeToString(foodType) {
      // 根据foodType的值返回相应的类型字符串
      switch (foodType) {
        case 1:
          return "主要食物";
        case 2:
          return "面条";
        case 3:
          return "蔬菜";
        case 4:
          return "肉类";
        case 5:
          return "饮品";
        case 6:
          return "小吃";
        case 7:
          return "水果";
        default:
          return "";
      }
    },
    goToDetail(id) {
      this.$router.push(`/food/${id}`);
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchUserInfo(id);
  },
};
</script>


<style scoped>
.mainTitle {
  font-size: 25px;
  font-weight: 800;
}
.ctn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}
.table {
  width: 50%;
  transition: 500ms;
}
.table:hover {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.25);
  top: 18%;
  transition: 500ms;
}
.food-card {
  height: 144px;
  width: 50vw;
  background: #ffffff;
  padding: 16px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}
.food-card:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
}
.food-image {
  width: 112px;
  height: 112px;
  border-radius: 5%;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.4);
}
.food-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 32px;
}
.title {
  margin-bottom: 24px;
}
</style>
  