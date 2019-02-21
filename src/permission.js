import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router/router'
import {asyncRouterMap} from './router/router'

router.addRoutes(asyncRouterMap)
router.beforeEach(( to, from, next ) => {
  NProgress.start();
  //获取token，判断是否有效，如果无效则跳转登陆页面
  NProgress.done();
})
