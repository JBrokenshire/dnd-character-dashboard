import { useToast } from 'vue-toastification'
import axios from 'axios'
import type { CharacterInventoryItem } from '@/models/CharacterInventoryItem'

const toast = useToast()

export const fetchCharacterInventory = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/inventory`)
    return data as CharacterInventoryItem[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character inventory')
  }
}

export const fetchCharacterEquippedWeapons = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/inventory/equipped-weapons`)
    return data
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character equipped weapons')
  }
}

export const toggleCharacterInventoryItemEquipped = async (characterID: number, itemID: number) => {
  try {
    const { data } = await axios.put(`/api/characters/${characterID}/inventory/${itemID}`)
    return data as CharacterInventoryItem
  } catch (error) {
    console.error(error)
    toast.error('Error equipping/unequipping item')
  }
}
