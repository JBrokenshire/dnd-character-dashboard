<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { getCharacterByID } from '@/services/CharacterService'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import AbilitySummary from '@/components/character/sheet/AbilitySummary.vue'
import ProficiencyBonus from '@/components/character/sheet/BonusContainer.vue'
import CharacterSheetHeader from '@/components/character/sheet/CharacterSheetHeader.vue'
import BonusContainer from '@/components/character/sheet/BonusContainer.vue'

const route = useRoute()

const characterID = route.params.id

const isLoading = ref(true)
const character = ref<Character>(null)

onMounted(async () => {
  character.value = await getCharacterByID(characterID)
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="relative flex flex-col gap-4 min-h-screen">
    <CharacterSheetHeader :character="character" />

    <!-- Background Image -->
    <img
      :src="`/img/character/sheet/backgrounds/${character.class.name.replace(' ', '-').toLowerCase()}.png`"
      alt=""
      class="absolute left-0 h-screen -z-20 object-contain"
    />

    <div
      id="cs-quick-info"
      class="max-w-[1200px] mx-auto flex justify-between w-full border border-lime-400"
    >
      <section id="cs-quick-info__abilities" class="w-[463px] xl:w-[564px] flex justify-between">
        <div class="sr-only">Abilities</div>
        <AbilitySummary :stat="character.strength" title="STRENGTH" />
        <AbilitySummary :stat="character.dexterity" title="DEXTERITY" />
        <AbilitySummary :stat="character.constitution" title="CONSTITUTION" />
        <AbilitySummary :stat="character.intelligence" title="INTELLIGENCE" />
        <AbilitySummary :stat="character.wisdom" title="WISDOM" />
        <AbilitySummary :stat="character.charisma" title="CHARISMA" />
      </section>

      <section id="cs-quick-info__proficiency-bonus">
        <div class="sr-only">Proficiency Bonus</div>
        <BonusContainer>
          <template #top-title>
            <span class="block md:hidden">Prof.</span>
            <span class="hidden md:block">Proficiency</span>
          </template>
          <template #bonus-value>
            <div class="font-bold">
              <span class="text-cs-gray">+</span>
              <span>{{ 2 + Math.floor((character.level - 1) / 4) }}</span>
            </div>
          </template>
          <template #bottom-title>Bonus</template>
        </BonusContainer>
      </section>
      <section id="cs-quick-info__walking-speed">
        <div class="sr-only">Walking Speed</div>
        <BonusContainer>
          <template #top-title>Walking</template>
          <template #bonus-value>
            <div class="font-bold">
              <span>
                {{ character.race.base_walking_speed + character.walking_speed_modifier }}
              </span>
              <span class="text-cs-gray text-sm ms-1">ft.</span>
            </div>
          </template>
          <template #bottom-title>Speed</template>
        </BonusContainer>
      </section>
    </div>
  </div>
</template>
