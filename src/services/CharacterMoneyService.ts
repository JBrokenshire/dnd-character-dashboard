import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterMoney } from '@/models/Money'

const toast = useToast()

export const fetchCharacterMoney = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/inventory/money`)
    return data as CharacterMoney[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching money')
  }
}
