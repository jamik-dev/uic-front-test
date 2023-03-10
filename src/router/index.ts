import { createRouter, createWebHistory } from 'vue-router'
import { useSponsors } from '@/stores/sponsors'
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
          props: true,
          path: '/sponsors/:id',
          name: 'singleSponsor',
          component: () => import('../views/Home/SponsorsSingle.vue'),
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
      component: NotFound,
      meta: {requiresAuth: false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  const sponsors = useSponsors();

  if (to.path.includes('/sponsors/')) {
    sponsors.navigationTrigger(false);
    sponsors.sponsorsSingle(Number(to.path.slice(10, to.path.length)))
    window.scrollTo(0,0);
  } else {
    sponsors.navigationTrigger(true);
  }

  if (from.path.includes('/sponsors/')) {
    sponsors.sponsors({page: sponsors.page_sp, page_size: sponsors.page_size_sp, search: '', ordering: ''});
  }

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
