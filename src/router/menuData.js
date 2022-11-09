export default [
  {
    id: 1000,
    title: '系统首页',
    path: '/index',
    name: 'index',
    icon: 'el-icon-house',
    hidden: 0
  },
  {
    id: 2000,
    title: '使用案例',
    path: '',
    name: '',
    redirect: '/svgIcon',
    icon: 'el-icon-magic-stick',
    hidden: 0,
    children: [
      {
        id: 2001,
        title: 'svg图标',
        path: '/svgIcon',
        name: 'svgIcon',
        redirect: '',
        icon: '',
        hidden: 0
      }
    ]
  }
]
