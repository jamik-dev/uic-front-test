import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import NotFound from '../views/NotFound/NotFound.vue'

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
        },
        {
          path: '/students',
          name: 'students',
          component: () => import('../views/Home/Students.vue'),
          meta: {requiresAuth: true}
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/Home/Dashboard.vue'),
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
    },
    {
      path: '/:notFound(.*)',
      name: 'notfound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, _, next) => {
  const loggedIn = localStorage.getItem('user')
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (loggedIn) {
      next()
    } else {
      router.push({ name: 'login' })
    }
  } else if(loggedIn && to.path === '/login') {
    router.push({name: 'home'})
  } else {
    next();
  }
})

export default router
