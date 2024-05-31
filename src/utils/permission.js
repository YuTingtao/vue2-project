import router from '@/router'
import store from '@/store'

/**
 * 判断是否有按钮权限
 * @param {String} str 权限标识
 * @param {String} path 菜单path
 * @returns {Boolean}
 */
function hasPerm(str, path) {
  const currentRoute = router.currentRoute
  if (!path) {
    path = currentRoute.path
  }
  const { buttons = [] } = store.getters.menuObj[path].meta
  if (buttons.some(item => item == str)) {
    return true
  } else {
    return false
  }
}

export default hasPerm