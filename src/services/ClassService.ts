import axios from 'axios'
import router from '@/router'
import type { Feature } from '@/models/Feature'
import type { ClassType } from '@/models/ClassType'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const getAllClasses = async (): Promise<ClassType[]> => {
  try {
    const { data } = await axios.get('/api/classes')
    return data as ClassType[]
  } catch (error) {
    console.error('Error fetching classes', error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const getClassByID = async (id: number): Promise<ClassType | null> => {
  try {
    const { data } = await axios.get(`/api/classes/${id}`)
    return data as ClassType
  } catch (error) {
    console.error(`Error fetching class with ID: ${id}.`, error)
    await router.push(`/error/${error.response.status}`)
  }
}

export const fetchClassFeatures = async (id: number) => {
  try {
    const { data } = await axios.get(`/api/classes/${id}/features`)
    return data as Feature[]
  } catch (error) {
    console.error(`Error fetching class features with ID: ${id}.`, error)
    toast.error('Error fetching class features')
  }
}
