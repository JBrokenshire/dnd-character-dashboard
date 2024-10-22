import axios from 'axios'
import router from '@/router'
import type { Race } from '@/models/Race'
import type { RaceTrait } from '@/models/Trait'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const getAllRaces = async () => {
  try {
    const { data } = await axios.get('/api/races')
    return data as Race[]
  } catch (error) {
    console.error(error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const getRaceByID = async (id: number): Promise<Race> => {
  try {
    const { data } = await axios.get(`/api/races/${id}`)
    return data as Race
  } catch (error) {
    console.error(`Error fetching race with ID: ${id}.`, error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const fetchRaceTraits = async (id: number): Promise<RaceTrait[]> => {
  try {
    const { data } = await axios.get(`/api/races/${id}/traits`)
    return data as RaceTrait[]
  } catch (error) {
    console.error(`error fetching race traits for race with id "${id}"`, error)
    toast.error('Error fetching race traits')
  }
}
