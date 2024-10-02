export type DefenseType = 'Resistance' | 'Immunity' | 'Vulnerability'

export type CharacterDefense = {
  id: number
  character_id: number
  damage_type: string
  defense_type: DefenseType
}
