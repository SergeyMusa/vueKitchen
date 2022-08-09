import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMain from '../views/PageMain.vue'
import NotFound from '../views/ErrorPage.vue'
import KitchenPlans from '../views/KitchenPlans.vue'
import KitchenAfter from '../views/KitchenAfter.vue'

Vue.use(VueRouter)

//можно сделать страницу динамически
// const Page2 = { template: '<div>Page2</div>' }

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageMain
  },
  {
    path: '/about',
    name: 'Полезная информация',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageUseful.vue')
    //  или проще  // component: Page2
  },
    {
      path: '/page1',
      name: 'page1',
      component: KitchenPlans
    },
    {
      path: '/page2',
      name: 'информация',
      component: KitchenAfter
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
