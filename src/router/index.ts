import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      redirect: '/sponsors',
      children: [
        {
          path: '/sponsors',
          name: 'sponsors',
          component: () => import('../views/Home/Sponsors.vue'),
          meta: {requiresAuth: true}
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      redirect: '/login',
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Auth/Login.vue'),
          meta: {requiresAuth: false}
        }
      ]
    }
  ]
})


export default router
