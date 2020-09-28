import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/users/Home.vue'
import Account from '@/views/users/Login'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Food from '@/views/users/Food'
import Beverage from '@/views/users/Beverage'
import Order from '@/views/users/Order'
import Track from '@/views/users/Track'
import TrackingItem from '@/views/users/TrackingItem'

//const { isNavigationFailure, NavigationFailureType} = VueRouter;

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
        path: '',
        component: Login
      },
      {
        path: 'signup',
        component: SignUp
      }
    ]
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/beverage',
    name: 'Beverage',
    component: Beverage
  },
  {
    path: '/order',
    name: 'Order',
    props: true,
    component: Order
  },
  {
    path: '/track',
    name: 'Track',
    component: Track,
  },
  {
    path: '/track/:id',
    name: 'TrackingItem',
    component: TrackingItem,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/users/About.vue')
  },
  {
    path:'/AllOrder',
    name: 'AllOrder',
    
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
