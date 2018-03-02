import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Art from '@/components/Art'
import Lindsey from '@/components/Lindsey'
import Kalin from '@/components/Kalin'
import Jacob from '@/components/Jacob'
import Portfolios from '@/components/Portfolios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/art',
      name: 'Art',
      component: Art
    },
    {
      path: '/lindsey',
      name: 'Lindsey',
      component: Lindsey
    },
    {
      path: '/kalin',
      name: 'Kalin',
      component: Kalin
    },
    {
      path: '/jacob',
      name: 'Jacob',
      component: Jacob
    },
    {
      path: '/portfolios',
      name: 'Portfolios',
      component: Portfolios
    }
  ]
})
