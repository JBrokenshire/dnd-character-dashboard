<script setup lang="ts">
import { ref } from 'vue'
import { cleanClassName } from '@/utils/utils'
import type { Character } from '@/models/Character'
import AbilitySummary from '@/components/character/sheet/AbilitySummary.vue'
import InspirationContainer from '@/components/character/sheet/InspirationContainer.vue'
import WalkingSpeedContainer from '@/components/character/sheet/WalkingSpeedContainer.vue'
import ProficiencyBonusContainer from '@/components/character/sheet/ProficiencyBonusContainer.vue'

const props = defineProps<{
  character: Character
}>()

const colour = ref<string>(props.character.class.colour)
</script>

<template>
  <div id="cs-quick-info" class="max-w-[1200px] mx-auto flex justify-between w-full">
    <section id="cs-quick-info__abilities" class="w-[463px] xl:w-[564px] flex justify-between">
      <div class="sr-only">Abilities</div>
      <AbilitySummary
        :stat="character.strength"
        title="STRENGTH"
        :className="`${cleanClassName(character.class.name)}`"
      />
      <AbilitySummary
        :stat="character.dexterity"
        title="DEXTERITY"
        :colour="colour"
        :className="`${cleanClassName(character.class.name)}`"
      />
      <AbilitySummary
        :stat="character.constitution"
        title="CONSTITUTION"
        :colour="colour"
        :className="`${cleanClassName(character.class.name)}`"
      />
      <AbilitySummary
        :stat="character.intelligence"
        title="INTELLIGENCE"
        :colour="colour"
        :className="`${cleanClassName(character.class.name)}`"
      />
      <AbilitySummary
        :stat="character.wisdom"
        title="WISDOM"
        :colour="colour"
        :className="`${cleanClassName(character.class.name)}`"
      />
      <AbilitySummary
        :stat="character.charisma"
        title="CHARISMA"
        :colour="colour"
        :className="`${cleanClassName(character.class.name)}`"
      />
    </section>

    <ProficiencyBonusContainer
      :bonus="2 + Math.floor((character.level - 1) / 4)"
      :className="`${cleanClassName(character.class.name)}`"
    />
    <WalkingSpeedContainer
      :speed="character.race.base_walking_speed + character.walking_speed_modifier"
      :className="`${cleanClassName(character.class.name)}`"
    />
    <InspirationContainer
      :className="`${cleanClassName(character.class.name)}`"
      :inspiration="character.inspiration"
    />
  </div>
</template>
