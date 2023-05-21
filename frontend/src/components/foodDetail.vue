<template>
  <div class="ctn">
    <div class="top">
      <div class="left">
        <h1>{{ data.foodName }}</h1>
        <h2>食品价格：{{ data.foodPrice }}</h2>
        <h2>食品销量：{{ data.saleCount }}</h2>
        <h2>食品类型：{{ data.foodType }}</h2>
        <h2>发布商家：{{ data.publishBy.username }}</h2>
        <h3 v-if="data.isRcm === 1">今日推荐</h3>
      </div>
      <div class="right"></div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FoodInfo",
  data() {
    return {
      data: {
        id: 1,
        foodName: "炸串",
        foodAvatarUrl:
          "https://ts1.cn.mm.bing.net/th/id/R-C.b3a7697d2793ba094a861d546c31190d?rik=NevOIW4XmkUuMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50069%2f5445.jpg_wh1200.jpg&ehk=wuLPicg%2b9wXz8QAwp%2fAVFBtJQ6loBUiVfQZu2bbZODA%3d&risl=&pid=ImgRaw&r=0",
        foodPrice: 18,
        foodType: 1,
        saleCount: 22,
        isRcm: 1,
        foodDesc: "炸串一种非常好吃的东西",
        publishBy: {
          id: 1,
          username: "东大炸串",
        },
      },
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchData(id); // 在组件挂载后调用fetchData方法获取数据
  },
  methods: {
    fetchData(id) {
      axios
        .get("/food/detail/" + id)
        .then((response) => {
          this.data = response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.ctn {
  width: 60vw;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 20px 20px 20px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
  border-radius: 5%;
}
</style>