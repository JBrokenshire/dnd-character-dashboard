export interface Trait {
  id: number
  name: string
  description: string
  action: string | null
  action_type: 'Action' | 'Bonus Action' | 'Reaction' | null
  action_uses: number | null
  action_reset: 'Short Rest' | 'Long Rest' | null
}
