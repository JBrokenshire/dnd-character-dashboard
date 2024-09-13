import axios from 'axios'
import router from '@/router'
import Character from '@/models/Character'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const createNewCharacter = async (newCharacter: Character) => {
  try {
    const { data } = await axios.post('/api/characters', newCharacter)
    return data as Character
  } catch (error) {
    console.error('Error creating new character', error)
    toast.error('Error creating new character')
  }
}

export const getAllCharacters = async (): Promise<Character[]> => {
  try {
    const { data } = await axios.get('/api/characters')
    return data
  } catch (error) {
    console.error(error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const getCharacterByID = async (id: number): Promise<Character> => {
  try {
    const { data } = await axios.get(`/api/characters/${id}`)
    return data
  } catch (error) {
    console.error(error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const updateCharacter = async (id: number, newCharacter: Character) => {
  try {
    const { data } = await axios.put(`/api/characters/${id}`, newCharacter)
    return data as Character
  } catch (error) {
    console.error(`Error updating character with ID: ${id}.`, error)
  }
}

export const deleteCharacter = async (characterID) => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this character?')
    if (confirm) {
      await axios.delete(`/api/characters/${characterID}`)
      toast.success('Character deleted successfully.')
    }
  } catch (error) {
    toast.error('Error deleting character')
    console.error('Error deleting character', error)
  }
}
