type Ability = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'
type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary'

export interface Attack {
  item: {
    name: string
    meta: string
    notes?: string
    rarity: Rarity
  }
  type: string
  short_range: number
  long_range?: number
  ability: Ability
  damage: string
  alt_damage?: string
  damage_type: string
  bonus: number
}
