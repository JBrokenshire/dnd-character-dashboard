export interface ClassFeature {
  feature: Feature
  choices: FeatureChoice[]
}

export interface Feature {
  id: number
  name: string
  description: string
  action: string | null
  action_type: 'Action' | 'Bonus Action' | 'Reaction' | null
  action_uses: number | null
  action_reset: 'Short Rest' | 'Long Rest' | null
}

export interface FeatureChoice {
  id: number
  class_feature_id: number
  option: string
  body: string | null
}
