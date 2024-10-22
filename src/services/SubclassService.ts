import axios from 'axios'
import type { Feature } from '@/models/Feature'
import { useToast } from 'vue-toastification'

const baseURL = '/api/subclasses'
const toast = useToast()

export const fetchSubclassFeatures = async (id: number) => {
  try {
    const { data } = await axios.get(`${baseURL}/${id}/features`)
    return data as Feature[]
  } catch (error) {
    console.error(`error fetching subclass features with ID: ${id}.`, error)
    toast.error('Error fetching subclass features')
  }
}
