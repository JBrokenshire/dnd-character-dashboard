export type SpellcastingAbility = 'Intelligence' | 'Wisdom' | 'Charisma' | null

interface ClassType {
  id: number
  name: string
  short_description: string
  long_description: string
  spellcasting_ability: SpellcastingAbility
}

export { ClassType }
