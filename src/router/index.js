import { createRouter, createWebHashHistory } from 'vue-router'
import Femeni from '../views/Femeni.vue'
import Masculi from '../views/Masculi.vue'
import Tots from '../views/Tots.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/tots'
  },
  {
    path: '/femeni',
    name:'Femeni',
    component:Femeni
  },
  {
    path: '/masculi',
    name:'Masculi',
    component: Masculi
  },
  {
    path: '/tots',
    name:'Tots',
    component: Tots
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
