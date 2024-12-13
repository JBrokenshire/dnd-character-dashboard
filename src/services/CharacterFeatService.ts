import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const fetchCharacterFeats = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/feats`)
    return data
  } catch (error) {
    console.error(`error fetching feats for character id ${id} - `, error)
    toast.error('Error fetching feats')
  }
}
