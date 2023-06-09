import VueRouter from 'vue-router';
import Vue from 'vue';
import LoginComponent from './components/LoginComponent.vue';
import AdminLogin from './components/AdminLogin.vue'
import RegisterComponent from './components/RegisterComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
import App from './App.vue'
import userCenter from './components/userCenter.vue'
import setUserInfo from './components/setUserInfo.vue'
import PublishVegetable from './components/PublishVegetable.vue'
import foodDetail from './components/foodDetail.vue'
import AllFood from './components/AllFood.vue'
import ModifyVegetable from './components/ModifyVegetable.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: LoginComponent, name: 'login',meta:{showHome:false}},
    { path: '/adminlogin', component: AdminLogin, name: 'adminlogin',meta:{showHome:false}},
    { path: '/register', component: RegisterComponent, name: 'register',meta:{showHome:false}},
    { path: '/', component: App, name: '/',meta:{showHome:true}},
    { path: '/home', component: HomeComponent, name: 'home',meta:{showHome:true,rcm:true}},
    { path: '/userCenter/:id', component: userCenter, name: 'userCenter',meta:{showHome:false} },
    { path: '/setUserInfo/:id', component: setUserInfo, name: 'setUserInfo',meta:{showHome:false} },
    { path: '/publishvegetable', component: PublishVegetable, name: 'publishVegetable',meta:{publishVegetable:true} },
    { path: "/food/:id", component: foodDetail, name: 'foodDetail', meta: { showHome: false } },
    { path: "/allfood", component: AllFood, name: 'allFood', meta: { showHome: false } },
    {path:"/modifyvegetable/:id",component:ModifyVegetable,name:'modify',meta:{showHome:false}}

    // 其他路由配置
];

const router = new VueRouter({
    routes,
    mode: 'history' // 如果需要使用 history 模式而不是默认的 hash 模式，可以添加此配置
});

export default router;
