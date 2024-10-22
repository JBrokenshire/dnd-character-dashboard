import type { ClassType } from '@/models/ClassType'

export interface Subclass {
  id: number
  class_id: number
  name: string

  class: ClassType
}
