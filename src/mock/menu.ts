import * as Mock from 'mockjs'

const data = [
  {
    icon: 'home',
    id: 0,
    name: '首页',
    route: '/index'
  },
  {
    children: [
      {
        id: 11,
        name: '按钮',
        route: '/ui/button'
      },
      {
        id: 12,
        name: '图标',
        route: '/ui/icon'
      }
    ],
    icon: 'scan',
    id: 1,
    name: 'UI',
    route: '/ui',
  },
  {
    icon: 'rocket',
    id: 3,
    name: '动画',
    route: '/animation'
  },
  {
    children: [
      {
        id: 41,
        name: '基础表格',
        route: '/table/base'
      },
      {
        id: 42,
        name: '高级表格',
        route: '/table/high'
      },
      {
        id: 43,
        name: '异步表格',
        route: '/table/async'
      },
      {
        id: 44,
        name: '可配置表格',
        route: '/table/configurable'
      },
    ],
    icon: 'table',
    id: 4,
    name: '表格',
    route: '/table'
    
  },
  {
    children: [
      {
        id: 51,
        name: '登陆表单',
        route: '/form/loginForm'
      },
      {
        id: 52,
        name: '注册表单',
        route: '/form/register'
      }
    ],
    icon: 'form',
    id: 5,
    name: '表单',
    route: '/form'
  },
  {
    children: [
      {
        id: 61,
        name: '图片裁剪',
        route: '/component/cropper'
      },
      {
        id: 62,
        name: '富文本编辑器',
        route: '/component/editor'
      },
      {
        id: 62,
        name: '地图',
        route: '/component/map'
      }
    ],
    icon: 'component',
    id: 6,
    name: '复杂组件',
    route: '/component',
  }
]

Mock.mock('/api/user/menu',{
  code: 0,
  data
})