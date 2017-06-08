import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import Cakes from '@/components/cakes'
import About from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cakes',
      name: 'cakes',
      component: Cakes
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
