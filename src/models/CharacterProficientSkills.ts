interface CharacterProficientSkills {
  id: number
  character_id: string
  skill_name: string
  proficiency_type: 'Proficiency' | 'Half-Proficiency' | 'Expertise'
}

export { CharacterProficientSkills }
