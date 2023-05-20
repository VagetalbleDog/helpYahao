<template>
    <div>
        <!-- 功能栏 -->
        <el-row class="toolbar" justify="center">
            <el-col :span="24">
                <div class="toolbar-wrapper">
                    <div class="left-buttons">
                        <el-button class="toolbar-item" type="primary" @click="goToRegister">注册</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToLogin">用户登录</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToAdminLogin">商家登录</el-button>
                    </div>
                    <div style="font-size: larger;;color: #409EFF;">高校食堂管理信息系统</div>
                    <div v-if="user.id">{{ user.username }}
                        {{ user.type===1?"学生":"商家" }}</div>
                    <div v-else style="color: red;">请登录！</div>
                    <div v-if="user.id" class="right-buttons">
                        <el-button class="toolbar-item" type="primary" @click="goToPersonInfo">个人信息</el-button>
                        <el-button class="toolbar-item" type="primary" @click="handleLogout">注销</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 主题内容 -->
        <el-row class="content" justify="center">
            <el-col :span="24">
                <!-- 数据库操作按钮 -->
                <el-row class="database-buttons" justify="center" :gutter="[10, 20]">
                    <el-col :span="6">
                        <el-button type="success" @click="handleCreate">创建</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleRead">读取</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleUpdate">更新</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleDelete">删除</el-button>
                    </el-col>
                </el-row>

                <!-- 数据库展示 -->
                <el-table class="database-data" :data="foodList">
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="name" label="名称"></el-table-column>
                    <el-table-column prop="price" label="价格"></el-table-column>
                    <!-- 更多列... -->
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            foodList: [], // 数据库food中的数据

            user:{},
        };
    },
    methods: {
        goToRegister() {
            this.$router.push('/register');
        },
        goToLogin() {
            this.$router.push('/login');
        },
        goToAdminLogin() {
            this.$router.push('/adminlogin');
        },
        goTOPersonInfo() {
            this.$router.push('/personinfo')
        },
        handleButton5() {
            // 处理按钮5的逻辑
        },
        handleCreate() {
            // 处理创建操作的逻辑
        },
        handleRead() {
            // 处理读取操作的逻辑
        },
        handleUpdate() {
            // 处理更新操作的逻辑
        },
        handleDelete() {
            // 处理删除操作的逻辑
        },
        handleLogout(){
            localStorage.clear();
            this.$router.push('/login')
        }
    },
    mounted(){
        this.user=JSON.parse(localStorage.getItem('user'));
    }
};
</script>
  
<style scoped>
.toolbar {
    margin-bottom: 20px;
}

.toolbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px 20px;
}

.left-buttons {
    display: flex;
}

.left-buttons .toolbar-item {
    margin-right: 10px;
}

.right-buttons {
    display: flex;
}

.right-buttons .toolbar-item {
    margin-left: 10px;
}

.toolbar-item {
    cursor: pointer;
    color: #333;
    font-weight: bold;
    background-color: #d6d4d4;
    border: none;
}

.content {
    margin: 0 auto;
    max-width: 800px;
}

.database-buttons {
    margin-bottom: 20px;
}

.database-buttons .el-button {
    width: 120px;
}

.database-data {
    width: 100%;
}
</style>
  