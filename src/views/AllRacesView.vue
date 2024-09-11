<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'
import RaceCard from '@/components/RaceCard.vue'

const router = useRouter()

const state = reactive({
  races: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/races')
    state.races = response.data
  } catch (error) {
    console.error('Error fetching races:', error)
    await router.push(`/error/${error.response.status}`)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="state.isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="max-width padding-x py-8 flex flex-col gap-2 sm:gap-8">
    <h2 class="border-b border-gray-300 pb-2 sm:pb-4 font-bold text-5xl text-center sm:text-start">
      Races
    </h2>
    <div
      v-if="state.races.length > 0"
      class="grid gap-2 sm:gap-8 mt-8 lg:grid-cols-2 xl:grid-cols-3"
    >
      <RaceCard v-for="race in state.races" :key="`race-card-${race.id}`" :race="race" />
    </div>
  </div>
</template>
