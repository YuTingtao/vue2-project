import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { Message } from 'element-ui'
import checkVersion from '../utils/checkVersion.js'

Vue.use(VueRouter)

// 路由
const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/Index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index/Index.vue'),
        meta: {
          // activePath: '', // 导航高亮
        }
      },
      {
        path: '/baseCase',
        name: 'baseCase',
        component: () => import(/* webpackChunkName: "baseCase" */ '@/views/useCase/BaseCase.vue'),
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
    component: () => import('@/views/login/Login.vue')
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
  const allMenus = ['/', '/login', ...Object.keys(store.getters.flatMenus)]
  // 第一个菜单路径
  const firstMenuPath = store.getters.firstMenuPath

  // 路由拦截
  if (!store.state.token && to.path !== '/login') {
    next('/login')
  } else if (!allMenus.includes(to.path)) {
    if (to.path != '/' && to.path != '/404') {
      Message.error('访问地址不存在')
    }
    next(firstMenuPath)
  } else {
    next()
  }
})

router.onError((error) => {
  checkVersion() // 版本检测
})

export default router
