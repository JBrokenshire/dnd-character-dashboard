import CharacterView from '@/views/character/CharacterView.vue'
import AddCharacterView from '@/views/character/AddCharacterView.vue'
import AllCharactersView from '@/views/character/AllCharactersView.vue'
import EditCharacterView from '@/views/character/EditCharacterView.vue'

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
