// 按钮权限指令
import store from '@/store'
import router from '@/router'

export default {
  inserted(el, binding) {
    // console.log(binding.value)
    const currentRoute = router.currentRoute
    const flatMenus = store.getters['flatMenus']
    if (typeof binding.value == 'object') {
      const { path, btn } = binding.value
      if (!btn) {
        // 菜单权限
        if (!flatMenus[path]) {
          el.parentNode.removeChild(el)
        }
      } else {
        // 按钮权限
        const btns = flatMenus[path]
        if (!btns.some(item => item.name == btn)) {
          el.parentNode.removeChild(el)
        }
      }
    } else {
      // 当前路由对应页面按钮权限
      const btns = flatMenus[currentRoute.path]
      if (!btns.some(item => item.name == binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  }
}