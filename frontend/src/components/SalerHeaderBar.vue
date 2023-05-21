<template>
    <div>
        <!-- 功能栏 -->
        <el-row class="toolbar" justify="center">
            <el-col :span="24">
                <div class="toolbar-wrapper">
                    <div class="left-buttons">
                        <el-button class="toolbar-item" type="primary" @click="handlePublishVegetable">发布菜品</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToAllFood">全部菜品</el-button>
                    </div>
                    <div style="font-size: larger;;color: #409EFF;cursor: pointer;" @click="goTOHome">高校食堂管理信息系统</div>
                    <div v-if="user.id">{{ user.username }}
                        {{ user.type === 1 ? "学生" : "商家" }}</div>
                    <div v-else style="color: red;">请登录！</div>
                    <div v-if="user.id" class="right-buttons">
                        <el-button class="toolbar-item" type="primary" @click="goToUserCenter">个人信息</el-button>
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
                        <el-button type="success" @click="handlePublishVegetable">发布菜品</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleRead">读取</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleUpdate">更新</el-button>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success" @click="handleDelete">删除菜品</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'HeaderBar',
    data() {
        return {
            user: {},
        };
    },
    props:{
        foodList:{
            type:Array,
        }
    },
    methods: {
        goToRegister() {
            if (this.$router.currentRoute.path !== '/register') {
                this.$router.push('/register');
            }
        },
        goToLogin() {
            if (this.$router.currentRoute.path !== '/login') {
                this.$router.push('/login');
            }
        },
        goToAdminLogin() {
            if (this.$router.currentRoute.path !== '/adminlogin') {
                this.$router.push('/adminlogin');
            }
        },
        goToUserCenter() {
            if (this.$router.currentRoute.path !== '/userCenter') {
                const userId = localStorage.getItem('user').id; // 替换成实际的用户ID
                this.$router.push({ name: 'userCenter', params: { id: userId } });
            }
        },
        goTOHome() {
            if (this.$router.currentRoute.path !== '/home'&&this.$router.currentRoute.path !== '/') {
                this.$router.push('/home');
            }
        },
        handlePublishVegetable() {
            if (this.$router.currentRoute.path !== '/publishvegetable') {
                this.$router.push('/publishvegetable');
            }
            return
        },
        goToAllFood(){
            if (this.$router.currentRoute.path !== '/allfood') {
                this.$router.push('/allfood');
            }
            return
        },
        handleLogout() {
            localStorage.clear();
            this.$router.push('/login')
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'));
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
}</style>
  