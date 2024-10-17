import type { Item } from '@/models/CharacterInventoryItem'

type armourType = 'Light Armour' | 'Medium Armour' | 'Heavy Armour' | 'Shields'

export interface Armour {
  item_id: number
  type: armourType
  base_ac: number
  bonus_ac: number
  max_dexterity_modifier: number
  strength_requirement: number
  stealth_disadvantage: boolean

  item: Item
}
