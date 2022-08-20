import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

// 路由
const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue'),
            },
            {
                path: '/svgIcon',
                name: 'svgIcon',
                component: () => import(/* webpackChunkName: "svgIcon" */ '@/views/useCase/svgIcon.vue'),
            },
        ],
    },
    // 登录
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
    },
];

const router = new VueRouter({
    routes,
    model: 'hash', // "hash" | "history" | "abstract"
    base: '/',     // 基路径
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

// 路由拦截
router.beforeEach((to, from, next) => {
    if (!store.state.token && to.path != '/login') {
        next('/login');
    } else {
        next();
    }
})

export default router;
