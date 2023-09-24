import Vue from 'vue'
import error from './modules/error.js'
import permission from './modules/permission.js'

function importDirectives() {
  Vue.directive('error', error)
  Vue.directive('permission', permission)
}

export default importDirectives