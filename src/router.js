import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x:0, y:0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trainEquip',
      name: 'trainEquip',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/trainingEquip.vue')
    },
    {
      path: '/backhome',
      name: 'backhome',
      redirect: { name: 'home' }
    },
    {
      path: '/trainMuscle',
      name: 'trainMuscle',
      component: () => import('./components/trainingMuscle.vue')
    },
    {
      path:'/food-menu',
      name: 'foodMenu',
      component: () => import('./components/foodMenuFunc.vue')
    }
  ]
})
