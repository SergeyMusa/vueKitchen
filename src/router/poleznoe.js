import Vue from 'vue'
import VueRouter from 'vue-router'
import KitchenPlans from '../views/KitchenPlans.vue'
import KitchenUhod from '../views/KitchenUhod.vue'
import NotFound from '../views/ErrorPage.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/page1',
      name: 'page1',
      component: KitchenPlans
    },
    {
      path: '/page2',
      name: 'Полезная информация',
      component: KitchenUhod
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  