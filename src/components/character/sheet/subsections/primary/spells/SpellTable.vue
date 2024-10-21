<script setup lang="ts">
import type { CharacterSpell } from '@/models/Spell'
import SpellItem from '@/components/character/sheet/subsections/primary/spells/SpellItem.vue'

defineProps<{
  className: string
  characterSpells: CharacterSpell[]
  spellAttackModifier: number
  spellSaveDc: number
}>()
</script>

<template>
  <div class="flex text-cs-gray">
    <div class="table__column-header w-[30px]" />
    <div class="table__column-header w-[140px]">Name</div>
    <div class="table__column-header w-[35px]">Time</div>
    <div class="table__column-header w-[55px]">Range</div>
    <div class="table__column-header w-[45px]">Hit / DC</div>
    <div class="table__column-header w-[85px]">Effect</div>
    <div class="table__column-header flex-1">Notes</div>
  </div>

  <div class="pt-[5px] pb-[8px]">
    <spell-item
      v-for="characterSpell in characterSpells"
      :key="`spell-table__item-${characterSpell.id}`"
      :class-name="className"
      :spell="characterSpell.spell"
      :origin="characterSpell.origin"
      :spell-attack-modifier="spellAttackModifier"
      :spell-save-dc="spellSaveDc"
    />
  </div>
</template>
