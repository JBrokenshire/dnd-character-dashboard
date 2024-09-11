import HomeView from '@/views/HomeView.vue'
import RaceView from '@/views/RaceView.vue'
import ClassView from '@/views/ClassView.vue'
import ErrorView from '@/views/ErrorView.vue'
import AllRacesView from '@/views/AllRacesView.vue'
import CharacterView from '@/views/CharacterView.vue'
import AllClassesView from '@/views/AllClassesView.vue'
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
      path: '/classes',
      name: 'classes',
      component: AllClassesView
    },
    {
      path: '/classes/:id',
      name: 'class',
      component: ClassView
    },
    {
      path: '/races',
      name: 'races',
      component: AllRacesView
    },
    {
      path: '/races/:id',
      name: 'race',
      component: RaceView
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
