<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { primaryColour } from '@/constants'
import { ScaleLoader } from 'vue-spinner/src'
import NoCharacters from '@/components/NoCharacters.vue'
import CharacterCard from '@/components/CharacterCard.vue'

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
    console.log('Error fetching characters', error)
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
    <ScaleLoader :color="primaryColour" height="72px" width="8px" margin="8px" />
  </div>

  <div v-else-if="state.characters.length === 0">
    <NoCharacters />
  </div>

  <div v-else class="max-width padding-x py-8">
    <div class="text-2xl md:text-5xl font-bold">My Characters</div>
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
