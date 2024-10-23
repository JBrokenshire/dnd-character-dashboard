import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { Feature } from '@/models/Feature'

const toast = useToast()

export const fetchCharacterFeatures = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/features`)
    return data as Feature[]
  } catch (error) {
    console.error(`error fetching features for character id ${id} - `, error)
    toast.error('Error fetching features')
  }
}
