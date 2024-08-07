// 路由
export default [
  {
    path: '/useCase',
    component: () => import('@/layout/ModuleLayout.vue'),
    meta: {
      type: 0, // 类型 0:模块，1:菜单
      title: '使用案例', // 标题
      icon: 'document', // 图标
      visible: 1, // 是否可见
      buttons: [], // 按钮权限
      activePath: '', // 设置高亮菜单路径，例如详情页设置列表页高亮
      parentPath: '', // 设置面包屑父级路径
    },
    children: [
      {
        path: '/useCase/base',
        component: () => import('@/views/useCase/base/index.vue'),
        meta: {
          type: 1,
          title: '基础案例',
          icon: '',
          visible: 1,
          buttons: ['add', 'edit', 'delete'], // 按钮权限
          activePath: '',
          parentPath: '',
        }
      },
    ]
  },
  {
    path: '/system',
    component: () => import('@/layout/ModuleLayout.vue'),
    meta: {
      type: 0,
      title: '系统设置',
      icon: 'setting',
      visible: 1,
      buttons: [],
      activePath: '',
      parentPath: '',
    },
    children: [
      {
        path: '/system/menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          type: 1,
          title: '菜单设置',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: '',
        },
      },
      {
        path: '/system/role',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          type: 1,
          title: '角色设置',
          icon: '',
          visible: 1,
          buttons: [],
          activePath: '',
          parentPath: '',
        },
      },
    ]
  },
]
