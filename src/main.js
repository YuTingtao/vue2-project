import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './assets/style/element.scss'
import './assets/style/main.scss'
// svgIcon
import './components/SvgIcon/index.js'
// 自定义指令
import importDirectives from './directives'
importDirectives()

// 检测更新
import { checkUpdate, autoCheckUpdate } from '@/utils/checkUpdate.js'
autoCheckUpdate() // 自动检测更新

Vue.use(ElementUI, {
  size: 'medium'
})
// EventBus
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
// Vue.config.devtools = true
// 处理错误
Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
  checkUpdate() // 检测更新
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
