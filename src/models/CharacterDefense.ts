export type DefenseType = 'Resistance' | 'Immunity' | 'Vulnerability'

export type CharacterDefense = {
  ID: number
  CharacterID: number
  DamageType: string
  DefenseType: DefenseType
}
