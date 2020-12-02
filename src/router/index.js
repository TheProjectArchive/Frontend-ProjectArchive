import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/modules/About/pages/About.vue'
import Index from '../views/Index.vue'
import Contact from '../views/modules/Contact/pages/Contact.vue'
import Work from '../views/modules/Work/pages/Work.vue'
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
    component: About
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
