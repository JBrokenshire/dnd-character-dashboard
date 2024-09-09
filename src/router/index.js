import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AllCharactersView from '@/views/AllCharactersView.vue'
import CharacterView from '@/views/CharacterView.vue'
import AddCharacterView from '@/views/AddCharacterView.vue'

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
      path: '/characters/add',
      name: 'add-character',
      component: AddCharacterView
    },
    {
      path: '/characters/:id',
      name: 'character',
      component: CharacterView
    },
    {
      name: 'not-found',
      path: '/:catchAll(.*)',
      component: NotFoundView
    }
  ]
})

export default router
