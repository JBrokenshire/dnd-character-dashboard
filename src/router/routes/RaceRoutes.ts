import RaceView from '@/views/RaceView.vue'
import AllRacesView from '@/views/AllRacesView.vue'

export const raceRoutes = [
  {
    path: '/races',
    name: 'races',
    component: AllRacesView
  },
  {
    path: '/races/:id',
    name: 'race',
    component: RaceView
  }
]
