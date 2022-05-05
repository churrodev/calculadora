import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView'

const Profile = () => import(/* webpackChunkName: "Profile" */ '@/views/auth/ProfileAuth');
const NoPageFound = () => import(/* webpackChunkName: "No Page Found" */ '@/modules/shared/pages/NoPageFound');
const CalculatorHead = () => import(/* webpackChunkName: "Calculator Head" */ '@/modules/calculator/CalculatorHead');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashboardView,
    children: [
      {
        path: '',
        name: 'CalculatorHead',
        component: CalculatorHead
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NoPageFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
