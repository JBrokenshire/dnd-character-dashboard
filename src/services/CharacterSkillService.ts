import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterProficientSkills } from '@/models/CharacterProficientSkills'

const toast = useToast()

export const getCharacterProficientSkills = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient-skills`)
    return data as CharacterProficientSkills[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching proficient skills')
  }
}
