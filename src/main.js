// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.scss'
import './assets/icon/iconfont'
import {asyncRouterMap} from '@/router/router'
Vue.use(Element)
Vue.config.productionTip = false
router.addRoutes(asyncRouterMap)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
