<script setup lang="ts">
import { ref } from 'vue'
import { cleanClassName } from '@/utils/utils'
import type { Character } from '@/models/Character'
import AbilitySummary from '@/components/character/sheet/AbilitySummary.vue'
import InspirationContainer from '@/components/character/sheet/InspirationContainer.vue'
import WalkingSpeedContainer from '@/components/character/sheet/WalkingSpeedContainer.vue'
import ProficiencyBonusContainer from '@/components/character/sheet/ProficiencyBonusContainer.vue'
import HealthContainer from '@/components/character/sheet/HealthContainer.vue'

const props = defineProps<{
  character: Character
}>()

const cleanedClassName = ref<string>(cleanClassName(props.character.class.name))
</script>

<template>
  <div
    id="cs-quick-info"
    class="max-w-[990px] xl:max-w-[1200px] mx-auto flex justify-between w-full"
  >
    <section id="cs-quick-info__abilities" class="w-[463px] xl:w-[564px] flex justify-between">
      <div class="sr-only">Abilities</div>
      <AbilitySummary
        :stat="character.strength"
        title="STRENGTH"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.dexterity"
        title="DEXTERITY"
        :colour="colour"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.constitution"
        title="CONSTITUTION"
        :colour="colour"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.intelligence"
        title="INTELLIGENCE"
        :colour="colour"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.wisdom"
        title="WISDOM"
        :colour="colour"
        :className="`${cleanedClassName}`"
      />
      <AbilitySummary
        :stat="character.charisma"
        title="CHARISMA"
        :colour="colour"
        :className="`${cleanedClassName}`"
      />
    </section>

    <ProficiencyBonusContainer
      :bonus="2 + Math.floor((character.level - 1) / 4)"
      :className="`${cleanedClassName}`"
    />
    <WalkingSpeedContainer
      :speed="character.race.base_walking_speed + character.walking_speed_modifier"
      :className="`${cleanedClassName}`"
    />
    <InspirationContainer :className="`${cleanedClassName}`" :inspiration="character.inspiration" />

    <HealthContainer
      :currentHitPoints="28"
      :maxHitPoints="28"
      :tempHitPoints="0"
      :className="cleanedClassName"
    />
  </div>
</template>
