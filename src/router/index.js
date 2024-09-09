import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AllCharactersView from '@/views/AllCharactersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'all-characters',
      component: AllCharactersView
    },
    {
      name: 'not-found',
      path: '/:catchAll(.*)',
      component: NotFoundView
    }
  ]
})

export default router
