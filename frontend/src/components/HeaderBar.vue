<template>
    <div>
        <!-- 功能栏 -->
        <el-row class="toolbar" justify="center">
            <el-col :span="24">
                <div class="toolbar-wrapper">
                    <div class="left-buttons" v-if="!isLogin">
                        <el-button class="toolbar-item" type="primary" @click="goToRegister">注册</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToLogin">顾客登录</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToAdminLogin">商家登录</el-button>
                    </div>
                    <div class="left-buttons" v-if="isLogin===2">
                        <el-button class="toolbar-item" type="primary" @click="handlePublishVegetable">发布菜品</el-button>
                        <el-button class="toolbar-item" type="primary" @click="goToAllFood">全部菜品</el-button>
                    </div>
                    <div class="left-buttons" v-if="isLogin===1">
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
    </div>
</template>


<script>
export default {
    name: 'HeaderBar',
    data() {
        return {
            foodList: [], // 数据库food中的数据
            user: {},
            isLogin:0,
        };
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
                const userId = JSON.parse(localStorage.getItem('user')).id; // 替换成实际的用户ID
                this.$router.push(`/userCenter/${userId}`);
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
        handleRead() {
            // 处理读取操作的逻辑
        },
        handleUpdate() {
            // 处理更新操作的逻辑
        },
        handleDelete() {
            // 处理删除操作的逻辑
        },
        handleLogout() {
            localStorage.clear();
            this.$router.push('/login')
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isLogin = JSON.parse(localStorage.getItem('user')).type
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
  