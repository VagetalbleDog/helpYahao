import VueRouter from 'vue-router';
import Vue from 'vue';
import LoginComponent from './components/LoginComponent.vue';
import RegisterComponent from './components/RegisterComponent.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/login', component: LoginComponent, name: 'login' },
    { path: '/register', component: RegisterComponent, name: 'register' },
    // 其他路由配置
];

const router = new VueRouter({
    routes,
    mode: 'history' // 如果需要使用 history 模式而不是默认的 hash 模式，可以添加此配置
});

export default router;
