import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { Message } from 'element-ui'

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
        meta: {
          // activePath: '', // 导航高亮
        }
      },
      {
        path: '/svgIcon',
        name: 'svgIcon',
        component: () => import(/* webpackChunkName: "svgIcon" */ '@/views/useCase/svgIcon.vue'),
        meta: {
          // activePath: '', // 导航高亮
        }
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = new VueRouter({
  routes,
  model: 'hash', // "hash" | "history" | "abstract"
  base: '/',     // 基础路径
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由拦截
router.beforeEach((to, from, next) => {
  // 菜单路径
  const menuPaths = ['/', '/login', ...store.getters.menuPaths]
  // 第一个菜单路径
  const firstMenuPath = store.getters.firstMenuPath

  // 路由拦截
  if (!store.state.token && to.path !== '/login') {
    next('/login')
  } else if (!menuPaths.includes(to.path)) {
    if (to.path != '/index') {
      Message.error('暂无权限访问')
    }
    next(firstMenuPath)
  } else {
    next()
  }
})

export default router
