import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { Message } from 'element-ui'
import { checkUpdate } from '@/utils/checkUpdate.js'

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
        path: '/baseCase',
        name: 'baseCase',
        component: () => import(/* webpackChunkName: "baseCase" */ '@/views/useCase/baseCase/index.vue'),
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
    component: () => import('@/views/login/index.vue')
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
  // 所有菜单
  const allMenus = ['/login', ...Object.keys(store.getters.menuObj)]
  // 第一个菜单路径
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

router.onError((error) => {
  checkUpdate() // 检测更新
})

export default router
