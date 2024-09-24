<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Character } from '@/models/Character'
import NoCharacters from '@/components/character/NoCharacters.vue'
import CharacterCard from '@/components/character/CharacterCard.vue'
import { getAllCharacters } from '@/services/CharacterService.ts'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'

const isLoading = ref(true)
const characters = ref<Character[]>([])

const fetchCharacters = async () => {
  isLoading.value = true
  characters.value = await getAllCharacters()
  isLoading.value = false
}

onMounted(async () => {
  await fetchCharacters()
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else-if="characters.length === 0">
    <NoCharacters />
  </div>

  <div v-else class="max-width padding-x">
    <div class="flex-between border-b border-gray-300 pb-4">
      <div class="text-2xl md:text-5xl font-bold">My Characters</div>
      <RouterLink :to="`/characters/add`" class="flex items-center sm:gap-2 text-lg nav-link">
        Create Character
        <i class="pi pi-chevron-right scale-[.75]" />
      </RouterLink>
    </div>
    <div
      v-if="characters.length > 0"
      class="grid-three"
    >
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        @character-deleted="fetchCharacters()"
      />
    </div>
  </div>
</template>
