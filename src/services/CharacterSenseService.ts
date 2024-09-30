import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterSense } from '@/models/CharacterSense'

const toast = useToast()

export const getCharacterSenses = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/senses`)
    return data as CharacterSense[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching proficient skills')
  }
}
