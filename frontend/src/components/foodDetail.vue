<template>
  <div class="ctn">
    <div class="top">
      <div class="left">
        <div class="foodName">{{ data.foodName }}</div>
        <div class="foodLabel">食品价格：{{ data.foodPrice }}</div>
        <div class="foodLabel">食品销量：{{ data.saleCount }}</div>
        <div class="foodLabel">食品类型：{{ data.foodType }}</div>
        <div class="foodLabel">发布商家：{{ data.publishBy.username }}</div>
        <div v-if="data.isRcm === 1">
          <el-tag class="foodName" effect="dark"> 今日推荐 </el-tag>
        </div>
      </div>
      <div class="right">
        <img
          class="img"
          alt=""
          src="https://ts1.cn.mm.bing.net/th/id/R-C.b3a7697d2793ba094a861d546c31190d?rik=NevOIW4XmkUuMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50069%2f5445.jpg_wh1200.jpg&ehk=wuLPicg%2b9wXz8QAwp%2fAVFBtJQ6loBUiVfQZu2bbZODA%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
    <hr />
    <div class="bottom">
      <div class="desc">{{ data.foodDesc }}</div>
      <div class="buttonGroup">
        <el-button type="warning" @click="handleEdit">更改菜品信息</el-button>
        <el-button type="danger" @click="handleDelete">删除菜品</el-button>
      </div>
    </div>
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
    handleEdit() {
      const id = this.$route.params.id;
      this.$router.push(`/modifyvegetable/${id}`)
    },
    handleDelete() {
      const res = window.confirm("你确定要删除吗");
      if (res) {
        const id = this.$route.params.id;
        axios.post(`/food/delete/${id}`).then((res) => {
          if (res.data.code === 500) {
            this.$message({
              message: "删除失败",
              type: "warning",
            });
          } else {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.$router.push("/");
          }
        });
      }
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
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  padding: 32px;
}
.left {
  width: 50%;
  text-align: left;
}
.foodName {
  text-align: center;
  font-size: 22px;
  font-weight: 800;
}
.foodLabel {
  margin: 16px 0;
  font-size: 18px;
  font-weight: 600;
}
.bottom {
  padding: 32px;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
}
.right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 360px;
}
.desc {
  height: 300px;
}
.buttonGroup {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>