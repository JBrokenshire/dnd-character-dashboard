<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { primaryColour } from '@/constants'
import { ScaleLoader } from 'vue-spinner/src'
import { useRoute, useRouter } from 'vue-router'
import CharacterSheetHeader from '@/components/character_sheet/CharacterSheetHeader.vue'

const route = useRoute()
const router = useRouter()

const characterID = route.params.id

const state = reactive({
  character: Object,
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get(`/api/characters/${characterID}`)

    state.character = response.data
  } catch (error) {
    console.error(`Error fetching character with id ${characterID}`)
    await router.push('/not-found')
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="state.isLoading" class="text-center py-6">
    <ScaleLoader :color="primaryColour" size="1rem" />
  </div>

  <CharacterSheetHeader v-else :character="state.character" />
</template>

<style scoped></style>
