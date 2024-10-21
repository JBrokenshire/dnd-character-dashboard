import type { AbilityAbbreviation } from '@/models/Ability'

export interface Spell {
  id: number
  name: string
  level: number
  casting_time: string
  distance: string
  effect: string | null
  damage: string | null
  damage_type: string | null
  save: AbilityAbbreviation | null
  notes: string
}

export interface CharacterSpell {
  id: number
  character_id: number
  spell_id: number
  spell: Spell
  origin: string
}
