export default [
  {
    title: '系统首页',
    path: '/index',
    name: 'index',
    icon: 'el-icon-house',
    hidden: 0
  },
  {
    title: '使用案例',
    path: '',
    name: '',
    redirect: '/baseCase',
    icon: 'el-icon-magic-stick',
    hidden: 0,
    children: [
      {
        title: '基础案例',
        path: '/baseCase',
        name: 'baseCase',
        redirect: '',
        icon: '',
        hidden: 0,
        buttons: [ // 按钮权限
          { name: 'add' },
          { name: 'edit' },
          { name: 'delete' }
        ]
      }
    ]
  }
]
