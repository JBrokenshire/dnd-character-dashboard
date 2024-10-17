import axios from 'axios'
import router from '@/router'
import { useToast } from 'vue-toastification'
import type { Character } from '@/models/Character'

const toast = useToast()

const baseURL = '/api/characters'

export const createNewCharacter = async (newCharacter: Character) => {
  try {
    const { data } = await axios.post(baseURL, newCharacter)
    return data as Character
  } catch (error) {
    console.error('Error creating new character', error)
    toast.error('Error creating new character')
  }
}

export const getAllCharacters = async (): Promise<Character[]> => {
  try {
    const { data } = await axios.get(baseURL)
    return data
  } catch (error) {
    console.error(error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const getCharacterByID = async (id: number): Promise<Character> => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}`)
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
    toast.error('Error updating character')
  }
}

export const toggleInspiration = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/inspiration`)
    return data as Character
  } catch (error) {
    console.error(`Error updating inspiration for character with ID: ${id}.`, error)
    toast.error('Error toggling character inspiration')
  }
}

export const healCharacter = async (id: number, value: number) => {
  try {
    const { data } = await axios.put(`/api/characters/${id}/heal/${value}`)
    return data as Character
  } catch (error) {
    console.error(`Error healing character with ID: ${id}.`, error)
    toast.error('Error healing character')
  }
}

export const damageCharacter = async (id: number, value: number) => {
  try {
    const { data } = await axios.put(`/api/characters/${id}/damage/${value}`)
    return data as Character
  } catch (error) {
    console.error(`Error healing character with ID: ${id}.`, error)
    toast.error('Error damaging character')
  }
}

export const fetchCharacterArmourClass = async (id: number) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}/armour-class`)
    return data
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character armour class')
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
    console.error('Error deleting character', error)
    toast.error('Error deleting character')
  }
}
