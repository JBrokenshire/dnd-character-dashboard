import type { SkillName } from '@/models/Skill'

export interface CharacterSkillAdvantage {
  id: number
  character_id: number
  skill_name: SkillName
  advantage: boolean
  disadvantage: boolean
}
