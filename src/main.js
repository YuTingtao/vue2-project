import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './assets/style/element.scss'
import './assets/style/main.scss'
// svgIcon
import './components/svgIcon/index.js'
// 自定义指令
import importDirectives from './directives'
importDirectives()
// 版本检测
import checkVersion from './utils/checkVersion.js'

Vue.use(ElementUI, {
  size: 'medium'
})
// EventBus
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
// Vue.config.devtools = true
// 处理错误
Vue.config.errorHandler = function (err, vm, info) {
  // 版本检测
  checkVersion()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
