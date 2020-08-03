import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/modules/About/pages/About.vue'
import Index from '../views/Index.vue'
import Contact from '../views/modules/Contact/pages/Contact.vue'
 
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
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/modules/Work/pages/Work.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
