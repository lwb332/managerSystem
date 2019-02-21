import Layout from '@/page/index/'
const _import = require('../_import')

export default [{
  path: '/',
  name: '首页',
  redirect: '/login'
}, {
  path: '/login',
  name: '登陆',
  components: _import('login/index')
}, {
  path: '/wel',
  redirect: '/wel/index',
  components: Layout,
  children: [{
    path: '/index',
    name: '个人首页',
    components: _import('index')
  }]
}]
