import type { Item } from '@/models/CharacterInventoryItem'

type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'

export interface Attack {
  item: Item
  type: string
  short_range: number
  long_range?: number
  ability: Ability
  damage: string
  alt_damage?: string
  damage_type: string
  bonus: number
}
