import axios from 'axios'
import router from '@/router'
import type { ClassType } from '@/models/ClassType'

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
