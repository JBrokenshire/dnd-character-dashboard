<script setup lang="ts">
import type { Attack } from '@/models/Action'
import { type Character, characterProficiencyBonus } from '@/models/Character'
import AttackItem from '@/components/character/sheet/subsections/primary/actions/AttackItem.vue'
import { modifierFromLevel } from '@/utils/utils'

const props = defineProps<{
  className: string
  character: Character
}>()

const strengthModifier = modifierFromLevel(props.character.strength)
const unarmedStrike: Attack = {
  name: 'Unarmed Strike',
  meta: 'Melee Attack',
  type: 'unarmed',
  range: 5,
  action: strengthModifier + characterProficiencyBonus(props.character.level),
  damage: strengthModifier + 1,
  damage_type: 'bludgeoning'
}
</script>

<template>
  <div id="actions-attack-table" class="mb-[13px]">
    <div class="flex">
      <div class="attack-table__column-header w-[27px]" />
      <div class="attack-table__column-header w-[140px]">Attack</div>
      <div class="attack-table__column-header w-[55px]">Range</div>
      <div class="attack-table__column-header w-[55px]">Hit / DC</div>
      <div class="attack-table__column-header w-[100px]">Damage</div>
      <div class="attack-table__column-header flex-1">Notes</div>
    </div>

    <div id="attack-table__content">
      <AttackItem :className="className" :attack="unarmedStrike" />
    </div>
  </div>
</template>

<style scoped>
.attack-table__column-header {
  @apply text-[11px] font-bold py-[5px] uppercase text-white tracking-tightest;
}
</style>
