<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { getCharacterByID } from '@/services/CharacterService'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'
import CharacterSheetHeader from '@/components/character_sheet/CharacterSheetHeader.vue'

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

  <div v-else class="max-width padding-x py-8 flex flex-col gap-8">
    <RouterLink to="/characters" class="w-fit my-2 flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back To Character List
    </RouterLink>
    <CharacterSheetHeader :character="character" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <RouterLink
          :to="`/classes/${character.class_id}`"
          class="w-fit mx-auto flex items-center gap-4 m-4 nav-link"
        >
          <h2 class="text-xl md:text-3xl font-bold text-center">
            {{ character.class.name }}
          </h2>
          <i class="pi pi-chevron-right text-2xl" />
        </RouterLink>
        <div class="border border-gray-300 rounded-md px-4">
          <p
            class="py-2"
            v-for="(section, index) in character.class.long_description.split('\n')"
            :key="`character-class-description-section-${index}`"
          >
            {{ section }}
          </p>
        </div>
      </div>
      <div>
        <RouterLink
          :to="`/races/${character.race_id}`"
          class="w-fit mx-auto flex items-center gap-4 m-4 nav-link"
        >
          <h2 class="text-xl md:text-3xl font-bold text-center">
            {{ character.race.name }}
          </h2>
          <i class="pi pi-chevron-right text-2xl" />
        </RouterLink>
        <div class="border border-gray-300 rounded-md px-4">
          <p
            class="py-2"
            v-for="(section, index) in character.race.long_description.split('\n')"
            :key="`character-race-description-section-${index}`"
          >
            {{ section }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>