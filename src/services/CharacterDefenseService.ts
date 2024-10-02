import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterDefense } from '@/models/CharacterDefense'

const toast = useToast()

export const getCharacterDefenses = async (id: number) => {
  try {
    const { data } = await axios.get(`/characters/${id}/defenses`)
    return data as CharacterDefense[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character defenses')
  }
}
