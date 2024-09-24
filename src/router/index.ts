import HomeView from '@/views/home/HomeView.vue'
import ErrorView from '@/views/error/ErrorView.vue'
import { raceRoutes } from '@/router/routes/RaceRoutes'
import { classRoutes } from '@/router/routes/ClassRoutes'
import { createRouter, createWebHistory } from 'vue-router'
import { characterRoutes } from '@/router/routes/CharacterRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...characterRoutes,
    ...raceRoutes,
    ...classRoutes,
    {
      path: '/error/:code',
      name: 'error',
      component: ErrorView
    },
    {
      name: 'not-found',
      path: '/:catchAll(.*)',
      component: ErrorView
    }
  ]
})

export default router
