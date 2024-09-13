import CharacterView from '@/views/CharacterView.vue'
import AddCharacterView from '@/views/AddCharacterView.vue'
import AllCharactersView from '@/views/AllCharactersView.vue'
import EditCharacterView from '@/views/EditCharacterView.vue'

export const characterRoutes = [
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
  }
]
