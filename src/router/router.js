import Vue from 'vue'
import Router from 'vue-router'
import PageRouter from './page/'
import ViewsRouter from './view/'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: []
})
export const asyncRouterMap = [].concat(PageRouter, ViewsRouter)
