import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const fetchArmourProficiencies = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient/armour`)
    return data as string[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching armour proficiencies')
  }
}

export const fetchWeaponProficiencies = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient/weapons`)
    return data as string[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching weapon proficiencies')
  }
}

export const fetchToolProficiencies = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient/tools`)
    return data as string[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching tool proficiencies')
  }
}

export const fetchLanguageProficiencies = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/proficient/languages`)
    return data as string[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching languages')
  }
}
