import { useToast } from 'vue-toastification'
import axios from 'axios'

const toast = useToast()

export const fetchCharacterEquippedWeapons = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/inventory/equipped-weapons`)
    return data
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character equipped weapons')
  }
}
