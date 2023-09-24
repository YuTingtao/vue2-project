import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.sessionStorage
})

import dataDic from './modules/dataDic.js'
import userMenus from '../router/userMenus.js'
import { getFlatMenus, getFirstPath } from './utils.js'

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
    // 扁平菜单路径
    flatMenus: (state) => {
      return getFlatMenus(state.userMenus)
    },
    // 首个菜单路径
    firstMenuPath(state) {
      return getFirstPath(state.userMenus[0])
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
      commit('setUserMenus', userMenus)
    }
  },
  modules: {
    dataDic // 数据字典
  },
  plugins: [vuexLocal.plugin]
})

export default store
