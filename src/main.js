import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import './assets/style/element.scss';
import './assets/style/main.scss';
// svgIcon
import './components/SvgIcon/index.js';
// 自定义指令
import importDirectives from './directives';
importDirectives();

Vue.use(ElementUI, {
  size: 'medium'
});
// EventBus
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
