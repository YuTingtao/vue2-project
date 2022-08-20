import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/index',
        component: () => import(
            /* webpackChunkName: "layout" */
            '@/layout/index.vue'
        ),
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import(
                    /* webpackChunkName: "index" */
                    '@/views/index/index.vue'
                ),
            },
            {
                path: '/svgIcon',
                name: 'svgIcon',
                component: () => import(
                    /* webpackChunkName: "svgIcon" */
                    '@/views/useCase/svgIcon.vue'
                ),
            },
        ],
    },
];

const router = new VueRouter({
    routes,
})

export default router;
