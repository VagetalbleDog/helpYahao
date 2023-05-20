<template>
  <div class="ctn">
    <div class="mainTitle">用户信息中心</div>
    <el-descriptions class="table" border column="1">
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
        <el-button @click="goToSetUserInfo(user.id)">设置个人信息</el-button>
      </el-descriptions-item>
    </el-descriptions>
    <div v-if="user.type === 2">
      <div class="mainTitle">您发布的菜品</div>
      <!-- 主页菜品列表 -->
    </div>
  </div>
</template>
<script>
import axios from "axios";

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
      },
    };
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
.table {
  width: 50%;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%);
  transition: 500ms;
}
.table:hover {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.25);
  top: 18%;
  transition: 500ms;
}
</style>
  