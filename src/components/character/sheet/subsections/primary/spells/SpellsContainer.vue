<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type Character, characterProficiencyBonus } from '@/models/Character'
import { modifierFromLevel } from '@/utils/utils'

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

const spellcastingAttackModifier = computed(() => {
  return spellcastingAbilityModifier.value + characterProficiencyBonus(props.character.level)
})
const spellSaveDC = computed(() => {
  return 8 + spellcastingAttackModifier.value
})
</script>

<template>
  <section class="flex flex-col w-full h-[600px] overflow-y-scroll pb-2 text-[14px] text-white">
    <h2 class="sr-only">Spells</h2>

    <div class="border-b mb-[10px] pb-[10px] flex w-full" :class="`border-${className}-faded`">
      <div
        v-if="character.class.spellcasting_ability"
        class="flex flex-1 gap-[16px] justify-center"
      >
        <!-- Spellcasting Ability Modifier -->
        <div class="cs-subsection__spells-spellcasting-info">
          <div class="flex">
            <span class="text-[16px] text-white">
              <span class="inline-flex items-center align-top">
                <span class="text-cs-gray text-[.75rem] mr-[.063rem]">
                  {{ spellcastingAbilityModifier >= 0 ? '+' : '-' }}
                </span>
                <span>{{ Math.abs(spellcastingAbilityModifier) }}</span>
              </span>
            </span>
          </div>
          <div class="text-cs-gray uppercase text-[10px]">Modifier</div>
        </div>

        <!-- Spellcasting Attack Modifier -->
        <div class="cs-subsection__spells-spellcasting-info">
          <div class="flex">
            <span class="text-[16px] text-white">
              <span class="inline-flex items-center align-top">
                <span class="text-cs-gray text-[.75rem] mr-[.063rem]">
                  {{ spellcastingAttackModifier >= 0 ? '+' : '-' }}
                </span>
                <span>{{ Math.abs(spellcastingAttackModifier) }}</span>
              </span>
            </span>
          </div>
          <div class="text-cs-gray uppercase text-[10px]">Spell Attack</div>
        </div>

        <!-- Spell Save DC -->
        <div class="cs-subsection__spells-spellcasting-info">
          <div class="flex">
            <span class="text-[16px] text-white">
              <span class="inline-flex items-center align-top">
                <span>{{ spellSaveDC }}</span>
              </span>
            </span>
          </div>
          <div class="text-cs-gray uppercase text-[10px]">Save DC</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cs-subsection__spells-spellcasting-info {
  @apply flex flex-col items-center font-bold tracking-tightest leading-[1];
}
</style>
