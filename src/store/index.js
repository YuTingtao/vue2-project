import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import dataDic from './modules/dataDic.js'
import routes from '../router/modules/index.js'
import { getMenuObj, getFirstMenu } from './utils.js'

const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.sessionStorage
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [] // 菜单
    }
  },
  getters: {
    // 菜单对象: key为path
    menuObj: (state) => {
      return getMenuObj(state.userMenus)
    },
    // 首个菜单
    firstMenu: (state) => {
      if (state.userMenus.length < 1) {
        return '/login'
      }
      return getFirstMenu(state.userMenus[0])
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
    setUserMenus(state, data) {
      state.userMenus = data
    }
  },
  actions: {
    // 获取菜单
    getUserMenus({ commit }) {
      return new Promise((resolve, reject) => {
        // 执行完异步resolve
        commit('setUserMenus', routes)
        resolve()
      })
    }
  },
  modules: {
    dataDic // 数据字典
  },
  plugins: [vuexLocal.plugin]
})

export default store
