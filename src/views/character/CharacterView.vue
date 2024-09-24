<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { getCharacterByID } from '@/services/CharacterService'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import AbilitySummary from '@/components/character/character_sheet/AbilitySummary.vue'
import CharacterSheetHeader from '@/components/character/character_sheet/CharacterSheetHeader.vue'

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

  <div v-else class="max-w-[1200px] mx-auto padding-x py-8 flex flex-col gap-4">
    <RouterLink to="/characters" class="w-fit flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back To Character List
    </RouterLink>

    <CharacterSheetHeader :character="character" />
    <div id="cs-quick-info" class="flex justify-between w-full border border-lime-400">
      <section
        id="cs-quick-info__abilities"
        class="w-[463px] xl:w-[564px] flex justify-between border border-pink-400"
      >
        <div class="sr-only">Abilities</div>
        <AbilitySummary :stat="character.strength" title="STRENGTH" />
        <AbilitySummary :stat="character.dexterity" title="DEXTERITY" />
        <AbilitySummary :stat="character.constitution" title="CONSTITUTION" />
        <AbilitySummary :stat="character.intelligence" title="INTELLIGENCE" />
        <AbilitySummary :stat="character.wisdom" title="WISDOM" />
        <AbilitySummary :stat="character.charisma" title="CHARISMA" />
      </section>
    </div>
  </div>
</template>
