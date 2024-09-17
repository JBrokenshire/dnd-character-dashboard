import type { Race } from '@/models/Race'
import type { ClassType } from '@/models/ClassType'


interface Character {
  id: number
  name: string
  level: number
  class_id: number
  race_id: number
  profile_picture_url: string

  class: ClassType
  race: Race
}

export { Character }
