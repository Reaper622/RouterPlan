import Vue from 'vue'
import Application from './Application'
import VueRouter from 'vue-router'
import createStore from './store/store'
import { routes } from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import 'es6-promise/auto'

Vue.use(ElementUI)
Vue.use(VueRouter)
// Axios.defaults.baseURL = 'http://47.107.65.249:8081/RoutePlanSystem'
Axios.defaults.baseURL = '/RoutePlanSystem'
//  Axios.defaults.baseURL = 'http://172.22.1.181:8081/RoutePlanSystem'
// Axios.defaults.baseURL = 'http://192.168.43.115:8081/RoutePlanSystem'
Axios.defaults.withCredentials = true
Vue.prototype.$axios = Axios

const store = createStore()

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由守卫，检测是否已经登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) { // 如果前往页面需要登录
    if (store.getters.getUserId == null) { // 未登录
      next('/login')// 跳转到登录界面
    } else { // 已登录
      next()
    }
  } else { // 前往页面不需要登录
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Application)
})
