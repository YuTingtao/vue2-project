import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.sessionStorage
})

import dataDic from './modules/dataDic.js'
import menuData from '../router/menuData.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      token: '',
      userInfo: {},
      menus: [] // 菜单
    }
  },
  getters: {
    // 扁平菜单路径
    menuPaths(state) {
      return getFlatPaths(state.menus)
    },
    // 首个菜单路径
    firstMenuPath(state) {
      let res = '/login'
      if (state.menus.length > 0) {
        let item = state.menus[0]
        res = item.redirect || item.path
        if (item.children && item.children.length > 0) {
          res = item.children[0].redirect || item.children[0].path
        }
      }
      return res
    }
  },
  mutations: {
    // 登录
    setLogin(state, data) {
      state.token = data.token
      state.userInfo = data.userInfo
    },
    // 退出登录
    setLogout(state) {
      state.token = ''
      state.userInfo = {}
    },
    // 设置菜单
    setMenus(state, data) {
      state.menus = data
    }
  },
  actions: {
    // 获取菜单
    getMenus({ commit }) {
      commit('setMenus', menuData)
    }
  },
  modules: {
    dataDic // 数据字典
  },
  plugins: [vuexLocal.plugin]
})

// 获取菜单扁平路径
function getFlatPaths(menus, res = []) {
  menus.forEach((item) => {
    if (item.path) {
      res.push(item.path)
    }
    if (item.children && item.children.length > 0) {
      getFlatPaths(item.children, res)
    }
  })
  return res
}

export default store
