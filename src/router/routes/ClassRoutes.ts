import ClassView from '@/views/class/ClassView.vue'
import AllClassesView from '@/views/class/AllClassesView.vue'

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
