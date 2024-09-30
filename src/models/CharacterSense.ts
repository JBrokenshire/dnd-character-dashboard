interface CharacterSense {
  id: number
  character_id: string
  sense_name: 'Darkvision' | 'Blindsight' | 'Truesight'
  distance: number
}

export { CharacterSense }
