// 按钮权限指令
import store from '@/store'
import router from '@/router'

export default {
  inserted(el, binding) {
    // console.log(binding.value)
    const currentRoute = router.currentRoute
    const menuObj = store.getters['menuObj']
    // 当前路由对应页面按钮权限
    let { buttons = [] } = menuObj[currentRoute.path].meta
    if (!buttons.some(item => item == binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
}