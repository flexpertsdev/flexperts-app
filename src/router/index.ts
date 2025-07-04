import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/auth/SignupPage.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/WelcomeTour.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/app',
    component: () => import('@/layouts/AppLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/app/Dashboard.vue')
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/app/Projects.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/app/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guards
router.beforeEach(async (_to, _from, next) => {
  // Skip auth check for now - all pages are public
  next()
})

export default router