import Layout from '@/page/index/'
const _import = require('../_import')

export default [{
  path: '/',
  name: '欢迎',
  redirect: '/wel'
},{
  path: '/wel',
  name: '主页',
  components: _import('index'),
  redirect: '/wel/index',
  children: [
    {  
      path: 'index',
      name: '首页',
      components: _import('index/index')
    },
    {
      path: 'activities',
      name: '动态',
      components: _import('index/activities')
    },
    {  
      path: 'topics',
      name: '话题',
      components: _import('index/topics')
    },
    {  
      path: 'books',
      name: '小册',
      components: _import('index/books')
    },
    {  
      path: 'all',
      name: '活动',
      components: _import('index/all'),
      meta: {keepAlive: true}
    },
  ]
},{
  path: '/login',
  name: '登陆',
  component: _import('login/index')
}]
