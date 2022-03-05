import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // create login route
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboardhome',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children:[
      {
        path:'home',
        component: () => import(/*webpackChunkName:"dashboardhome" */ '../dashboard/Home.vue'),
        
        
      },
      {
        path:'create',
        component: () => import(/*webpackChunkName:"dashboardhome" */ '../dashboard/Create.vue'),
        
        
      },
      {
        path:'profile',
        component: () => import(/*webpackChunkName:"dashboardhome" */ '../dashboard/Profile.vue'),
        
        
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
