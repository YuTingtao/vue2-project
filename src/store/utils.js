// 菜单树转对象: name为key
function getMenuObj(menus, obj = {}) {
  menus.forEach(item => {
    if (item.path) {
      obj[item.path] = {
        name: item.path,
        title: item.title,
        buttons: item.buttons || []
      }
    }
    if (Array.isArray(item.children)) {
      return getMenuObj(item.children, obj)
    }
  })
  return obj
}

// 获取第一个菜单name
function getFirstMenu(menu) {
  if (!menu) {
    return '/login'
  }
  if (Array.isArray(menu.children)) {
    getFirstMenu(menu.children[0])
  } else {
    return menu.path
  }
}

export {
  getMenuObj,
  getFirstMenu
}