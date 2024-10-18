<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Character } from '@/models/Character'
import { modifierFromLevel } from '@/utils/utils'
import SpellModifierHeader from '@/components/character/sheet/subsections/primary/spells/SpellModifierHeader.vue'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(() => {
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
})

const spellcastingAbilityModifier = ref(0)
</script>

<template>
  <section class="flex flex-col w-full h-[600px] overflow-y-scroll pb-2 text-[14px] text-white">
    <h2 class="sr-only">Spells</h2>

    <spell-modifier-header
      v-if="character.class.spellcasting_ability"
      :class-name="className"
      :spellcasting-ability-modifier="spellcastingAbilityModifier"
      :character-level="character.level"
    />

    <titled-section :class-name="className">
      <template #title>Cantrips</template>
      <template #content></template>
    </titled-section>
  </section>
</template>
