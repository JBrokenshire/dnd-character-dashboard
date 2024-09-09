import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CharacterView from '@/views/CharacterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddCharacterView from '@/views/AddCharacterView.vue'
import AllCharactersView from '@/views/AllCharactersView.vue'
import EditCharacterView from '@/views/EditCharacterView.vue'

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
      path: '/characters/:id/edit',
      name: 'edit-character',
      component: EditCharacterView
    },
    {
      name: 'not-found',
      path: '/:catchAll(.*)',
      component: NotFoundView
    }
  ]
})

export default router
