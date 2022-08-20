import Vue from 'vue'
import Vuex from 'vuex'
import dataDic from './modules/dataDic.js'
import menuData from '../router/menuData.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            token: '',
            userInfo: {},
            menus: [], // 菜单
        };
    },
    getters: {},
    mutations: {
        // 登录
        setLogin(state, data) {
            state.token = data.token;
            state.userInfo = data.userInfo;
            sessionStorage.vuex = state;
        },
        // 退出登录
        setLogout(state) {
            state.token = '';
            state.userInfo = {};
            sessionStorage.removeItem('vuex');
        },
        // 设置菜单
        setMenus(state, data) {
            state.menus = data;
        }
    },
    actions: {
        // 获取菜单
        getMunus({ commit }) {
            commit('setMenus', menuData);
        }
    },
    modules: {
        dataDic, // 数据字典
    },
});

// 防止vuex刷新失效
window.addEventListener('beforeunload', () => {
    sessionStorage.vuex = JSON.stringify(store.state);
});
if (/iphone|ipad|ipod/.test(navigator.userAgent)) {
    window.addEventListener('pagehide', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
}
if (sessionStorage.vuex) {
    store.replaceState(
        Object.assign({}, store.state, JSON.parse(sessionStorage.vuex))
    );
}

export default store;
