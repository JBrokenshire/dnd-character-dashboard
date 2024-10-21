import axios from 'axios'
import { useToast } from 'vue-toastification'
import type { CharacterSpell } from '@/models/Spell'

const toast = useToast()

export const getCharacterHasSpells = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/has-spells`)
    return data as boolean
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character spells')
  }
}

export const getCharacterSpells = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/spells`)
    return data as CharacterSpell[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character spells')
  }
}

export const fetchCharacterAttackSpells = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/characters/${id}/spells/attack`)
    return data as CharacterSpell[]
  } catch (error) {
    console.error(error)
    toast.error('Error fetching character attack spells')
  }
}
