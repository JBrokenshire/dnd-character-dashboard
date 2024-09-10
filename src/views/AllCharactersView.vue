<script setup>
import axios from 'axios'
import router from '@/router'
import { onMounted, reactive } from 'vue'
import NoCharacters from '@/components/NoCharacters.vue'
import CharacterCard from '@/components/CharacterCard.vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const state = reactive({
  characters: [],
  isLoading: true
})

const fetchCharacters = async () => {
  state.isLoading = true
  try {
    const response = await axios.get('/api/characters')
    state.characters = response.data
  } catch (error) {
    console.error('Error fetching characters', error)
    await router.push(`/error/${error.response.status}`)
  } finally {
    state.isLoading = false
  }
}

onMounted(async () => {
  await fetchCharacters()
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="state.isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else-if="state.characters.length === 0">
    <NoCharacters />
  </div>

  <div v-else class="max-width padding-x py-8">
    <div class="flex-between">
      <div class="text-2xl md:text-5xl font-bold">My Characters</div>
      <RouterLink :to="`/characters/add`" class="flex items-center gap-2 text-lg nav-link">
        Create Character
        <i class="pi pi-chevron-right scale-[.75]" />
      </RouterLink>
    </div>
    <div
      v-if="state.characters.length > 0"
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8"
    >
      <CharacterCard
        v-for="character in state.characters"
        :key="character.id"
        :character="character"
        @character-deleted="fetchCharacters()"
      />
    </div>
  </div>
</template>
