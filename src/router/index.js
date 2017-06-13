import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomeIndex from '@/page/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'HomeIndex',
      component: HomeIndex
    }
  ],
  mode: 'history'
  // strict: true
})
