<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Attack } from '@/models/Action'
import { modifierFromLevel } from '@/utils/utils'
import { type Character } from '@/models/Character'
import { fetchCharacterEquippedWeapons } from '@/services/CharacterInventoryService'
import AttackItem from '@/components/character/sheet/subsections/primary/actions/AttackItem.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

const strengthModifier = modifierFromLevel(props.character.strength)
const unarmedStrike: Attack = {
  item: {
    name: 'Unarmed Strike',
    meta: 'Melee Attack',
    rarity: 'Common'
  },
  type: 'unarmed',
  short_range: 5,
  ability: 'STR',
  damage: Math.max(strengthModifier + 1, 0),
  damage_type: 'bludgeoning',
  bonus: 0
}

const weapons = ref<Attack>()
const loading = ref(true)

onMounted(async () => {
  weapons.value = await fetchCharacterEquippedWeapons(props.character.id)
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" id="actions-attack-table" class="mb-[13px]">
    <div class="flex text-cs-gray">
      <div class="table__column-header w-[27px]" />
      <div class="table__column-header w-[140px]">Attack</div>
      <div class="table__column-header w-[55px]">Range</div>
      <div class="table__column-header w-[55px]">Hit / DC</div>
      <div class="table__column-header w-[100px]">Damage</div>
      <div class="table__column-header flex-1">Notes</div>
    </div>

    <div id="attack-table__content">
      <AttackItem
        v-for="(attack, index) in weapons"
        :key="`attack-item-${index}`"
        :className="className"
        :character="character"
        :attack="attack"
      />

      <AttackItem
        :className="className"
        :character="character"
        :attack="unarmedStrike"
        :hideModifier="true"
      />
    </div>
  </div>
</template>
