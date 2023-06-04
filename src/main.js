import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/base/main.scss'
// svgIcon
import './components/svgIcon/index.js'
// 版本检测
import checkVersion from './utils/checkVersion.js'

Vue.use(ElementUI, {
  size: 'medium'
})
// EventBus
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  // 版本检测
  checkVersion()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
