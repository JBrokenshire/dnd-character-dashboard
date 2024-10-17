export const getCombinedWeight = (items: CharacterInventoryItem[]): number => {
  let totalWeight = 0
  for (const item of items) {
    const quantity = item.quantity || 1
    totalWeight += item.item.weight * quantity
  }

  return totalWeight
}

export interface CharacterInventoryItem {
  id: number
  character_id: number
  item_id: number
  equipped: boolean
  quantity: number
  location: 'Equipment' | 'Backpack'
  type: 'weapon' | 'armour' | 'shield' | 'item'
  item: Item
}

export interface Item {
  id: number
  name: string
  meta: string
  weight: number
  cost: number
  notes: string
  rarity: Rarity
  equippable: boolean
}

type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Very Rare' | 'Legendary'
