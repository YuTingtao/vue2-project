// 按钮权限指令
import store from '@/store'
import router from '@/router'

export default {
  inserted(el, binding) {
    // console.log(binding.value)
    const currentRoute = router.currentRoute
    const menuObj = store.getters['menuObj']
    if (typeof binding.value == 'object') {
      const { name, btn } = binding.value
      if (!btn) {
        // 菜单权限
        if (!menuObj[name]) {
          el.parentNode.removeChild(el)
        }
      } else if (menuObj[name]) {
        // 按钮权限
        const { buttons } = menuObj[name]
        if (!buttons.some(item => item.name == btn)) {
          el.parentNode.removeChild(el)
        }
      }
    } else {
      // 当前路由对应页面按钮权限
      const { buttons } = menuObj[currentRoute.name]
      if (!buttons.some(item => item.name == binding.value)) {
        el.parentNode.removeChild(el)
      }
    }
  }
}