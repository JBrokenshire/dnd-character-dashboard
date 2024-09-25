<script setup lang="ts">
import type { Character } from '@/models/Character'
import BonusContainer from '@/components/character/sheet/BonusContainer.vue'
import AbilitySummary from '@/components/character/sheet/AbilitySummary.vue'
import ProficiencyBonusContainer from '@/components/character/sheet/ProficiencyBonusContainer.vue'
import WalkingSpeedContainer from '@/components/character/sheet/WalkingSpeedContainer.vue'

defineProps<{
  character: Character
}>()
</script>

<template>
  <div id="cs-quick-info" class="max-w-[1200px] mx-auto flex justify-between w-full">
    <section id="cs-quick-info__abilities" class="w-[463px] xl:w-[564px] flex justify-between">
      <div class="sr-only">Abilities</div>
      <AbilitySummary :stat="character.strength" title="STRENGTH" />
      <AbilitySummary :stat="character.dexterity" title="DEXTERITY" />
      <AbilitySummary :stat="character.constitution" title="CONSTITUTION" />
      <AbilitySummary :stat="character.intelligence" title="INTELLIGENCE" />
      <AbilitySummary :stat="character.wisdom" title="WISDOM" />
      <AbilitySummary :stat="character.charisma" title="CHARISMA" />
    </section>

    <ProficiencyBonusContainer :level="character.level" />
    <WalkingSpeedContainer
      :speed="character.race.base_walking_speed + character.walking_speed_modifier"
    />
  </div>
</template>
