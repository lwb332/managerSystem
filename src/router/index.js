import Vue from 'vue'
import Router from 'vue-router'
import PageRouter from './page/'
import ViewsRouter from './view/'
//  import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//  const _import = require('./_import')

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: []
})

export const asyncRouterMap = [].concat(PageRouter, ViewsRouter)
