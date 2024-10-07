export interface CharacterMoney {
  id: number
  character_id: number
  money: 'platinum' | 'gold' | 'electrum' | 'silver' | 'copper'
  amount: number
}
