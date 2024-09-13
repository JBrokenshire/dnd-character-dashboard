import ClassView from '@/views/ClassView.vue'
import AllClassesView from '@/views/AllClassesView.vue'

export const classRoutes = [
  {
    path: '/classes',
    name: 'classes',
    component: AllClassesView
  },
  {
    path: '/classes/:id',
    name: 'class',
    component: ClassView
  }
]
