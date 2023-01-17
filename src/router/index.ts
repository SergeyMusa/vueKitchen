import Vue from 'vue'
import VueRouter from 'vue-router'
import PageMain from '../views/PageMain.vue'
import NotFound from '../views/ErrorPage.vue'
import p1_KitchenPlans from '../views/useful/p1-KitchenPlans.vue'
import p2_KitchenUhod from '../views/useful/p2-KitchenUhod.vue'
import p3_temp from '../views/useful/p3-temp.vue'
import p4_temp from '../views/useful/p4-temp.vue'
import p5_temp from '../views/useful/p5-temp.vue'
import p10_temp from '../views/useful/p10-temp.vue'
import p20_temp from '../views/useful/p20-temp.vue'


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
      component: p1_KitchenPlans
    },
    {
      path: '/page2',
      name: 'информация',
      component: p2_KitchenUhod
    },
    {
      path: '/page3',
      name: 'информация3',
      component: p3_temp
    },    
    {
      path: '/page4',
      name: 'информация4',
      component: p4_temp
    },    
    {
      path: '/page5',
      name: 'информация5',
      component: p5_temp
    },    
    {
      path: '/page6',
      name: 'информация6',
      component: p5_temp
    },    
    {
      path: '/page10',
      name: 'ЛДСП ЭГГЕР',
      component: p10_temp
    },    
    {
      path: '/page20',
      name: 'ЛДСП цвета',
      component: p20_temp
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
