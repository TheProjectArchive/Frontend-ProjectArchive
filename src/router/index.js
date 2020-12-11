import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/modules/Contact/pages/Contact.vue'
import Detail from '../views/modules/Work/pages/details/index.vue'
 
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
  {
    path: '/about',
    name: 'About',
    component: () => import(/*webpackChunkName: "about" */'../views/modules/About/pages/index.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import(/*webpackChunkName: "work" */'../views/modules/Work/pages/Work.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/detail/:detailId',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
