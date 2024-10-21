<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { modifierFromLevel } from '@/utils/utils'
import { type Character, characterProficiencyBonus } from '@/models/Character'
import type { CharacterSpell } from '@/models/Spell'
import { getCharacterSpells } from '@/services/CharacterSpellService'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'
import SpellTable from '@/components/character/sheet/subsections/primary/spells/SpellTable.vue'
import SpellModifierHeader from '@/components/character/sheet/subsections/primary/spells/SpellModifierHeader.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  switch (props.character.class.spellcasting_ability) {
    case 'Intelligence':
      spellcastingAbilityModifier.value = modifierFromLevel(props.character.intelligence)
      break
    case 'Wisdom':
      spellcastingAbilityModifier.value = modifierFromLevel(props.character.wisdom)
      break
    case 'Charisma':
      spellcastingAbilityModifier.value = modifierFromLevel(props.character.charisma)
      break
  }

  const res = await getCharacterSpells(props.character.id)
  res.map((characterSpell) => {
    const mapKey = getMapKey(characterSpell.spell.level)
    spells.value.has(mapKey)
      ? spells.value.set(mapKey, [...spells.value.get(mapKey), characterSpell])
      : spells.value.set(mapKey, [characterSpell])
  })

  loading.value = false
})

const spellcastingAbilityModifier = ref(0)
const spells = ref<Map<string, CharacterSpell[]>>(new Map<string, CharacterSpell[]>())
const loading = ref(true)

const spellcastingAttackModifier = computed(() => {
  return spellcastingAbilityModifier.value + characterProficiencyBonus(props.character.level)
})
const spellSaveDC = computed(() => {
  return 8 + spellcastingAttackModifier.value
})

const getMapKey = (level: number): string => {
  switch (level) {
    case 0:
      return 'Cantrips'
    case 1:
      return '1st Level'
    case 2:
      return '2nd Level'
    case 3:
      return '3rd Level'
    default:
      return level.toString() + 'th Level'
  }
}
</script>

<template>
  <section
    v-if="!loading"
    class="flex flex-col w-full h-[600px] overflow-y-scroll pb-4 text-[14px] text-white"
  >
    <h2 class="sr-only">Spells</h2>
    <spell-modifier-header
      v-if="character.class.spellcasting_ability"
      :class-name="className"
      :spellcasting-ability-modifier="spellcastingAbilityModifier"
      :spellcasting-attack-modifier="spellcastingAttackModifier"
      :spell-save-dc="spellSaveDC"
    />

    <titled-section
      v-for="key of spells.keys()"
      :key="`levelled-spell-section__${key.replace(' ', '-')}`"
      :class-name="className"
    >
      <template #title>{{ key }}</template>
      <template #content>
        <spell-table
          :class-name="className"
          :character-spells="spells.get(key)"
          :spell-attack-modifier="spellcastingAttackModifier"
          :spell-save-dc="spellSaveDC"
        />
      </template>
    </titled-section>
  </section>
</template>
