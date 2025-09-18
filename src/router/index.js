import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './modules/index.js'
import { Message } from 'element-ui'

Vue.use(VueRouter)

// 路由
const allRoutes = [
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    children: [...routes]
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = new VueRouter({
  routes: allRoutes,
  mode: 'hash', // "hash" | "history" | "abstract"
  base: '/', // 基础路径
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
  // 所有菜单
  const allMenus = ['/login', ...Object.keys(store.getters.menuObj)]
  // 首个菜单路径
  const firstMenu = store.getters.firstMenu

  // 路由拦截
  if (!store.state.token && to.path !== '/login') {
    next('/login')
  } else if (!allMenus.includes(to.path)) {
    if (to.path != '/') {
      Message.error('访问地址不存在')
    }
    next(firstMenu)
  } else {
    next()
  }
})

export default router
