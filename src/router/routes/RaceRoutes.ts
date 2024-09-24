import RaceView from '@/views/race/RaceView.vue'
import AllRacesView from '@/views/race/AllRacesView.vue'

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
