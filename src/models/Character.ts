import type { Race } from '@/models/Race'
import type { ClassType } from '@/models/ClassType'

interface Character {
  id: number
  name: string
  level: number
  class_id: number
  race_id: number
  profile_picture_url: string
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  walking_speed_modifier: number
  inspiration: boolean

  class: ClassType
  race: Race
}

export { Character }
