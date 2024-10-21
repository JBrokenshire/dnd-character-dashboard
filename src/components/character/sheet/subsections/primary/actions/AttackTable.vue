<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Spell } from '@/models/Spell'
import type { Attack } from '@/models/Action'
import { modifierFromLevel } from '@/utils/utils'
import { type Character } from '@/models/Character'
import { fetchCharacterAttackSpells } from '@/services/CharacterSpellService'
import { fetchCharacterEquippedWeapons } from '@/services/CharacterInventoryService'
import AttackItem from '@/components/character/sheet/subsections/primary/actions/AttackItem.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  weaponAttacks.value = await fetchCharacterEquippedWeapons(props.character.id)

  spells.value = await fetchCharacterAttackSpells(props.character.id)
  if (spells.value) {
    spells.value.map((characterSpell) => {
      let metaLevel
      switch (characterSpell.spell.level) {
        case 0:
          metaLevel = 'Cantrip'
          break
        case 1:
          metaLevel = '1st Level'
          break
        case 2:
          metaLevel = '2nd Level'
          break
        case 3:
          metaLevel = '3rd Level'
          break
        default:
          metaLevel = level.toString() + 'th Level'
          break
      }

      let spellCastingAbility: string = props.character.class.spellcasting_ability
      spellCastingAbility = spellCastingAbility.slice(0, 3).toUpperCase()

      const spellAttack: Attack = {
        item: {
          name: characterSpell.spell.name,
          meta: `${metaLevel} • ${characterSpell.origin}`,
          rarity: 'Common',
          notes: characterSpell.spell.notes
        },
        type: characterSpell.spell.school.toLowerCase(),
        short_range: characterSpell.spell.distance,
        ability: spellCastingAbility,
        damage: characterSpell.spell.damage,
        damage_type: characterSpell.spell.damage_type
      }
      spellAttacks.value.push(spellAttack)
    })
  }
  loading.value = false
})

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
  damage_type: 'bludgeoning'
}

const weaponAttacks = ref<Attack[]>([])
const spellAttacks = ref<Attack[]>([])
const spells = ref<Spell>()
const loading = ref(true)
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
        v-for="(attack, index) in weaponAttacks"
        :key="`attack-item-${index}`"
        :className="className"
        :character="character"
        :attack="attack"
      />

      <AttackItem
        v-for="(attack, index) in spellAttacks"
        :key="`attack-item-${index}`"
        :className="className"
        :character="character"
        :attack="attack"
        :hide-modifier="true"
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
