import axios from 'axios'
import router from '@/router'
import type { Race } from '@/models/Race'

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
