<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Race } from '@/models/Race'
import RaceCard from '@/components/race/RaceCard.vue'
import { getAllRaces } from '@/services/RaceService'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'

const races = ref<Race[]>([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  races.value = await getAllRaces()
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="max-width padding-x mt-8">
    <h2 class="border-b border-gray-300 pb-4 font-bold text-5xl text-center sm:text-start">
      Races
    </h2>
    <div v-if="races.length > 0" class="grid-three">
      <RaceCard v-for="race in races" :key="`race-card-${race.id}`" :race="race" />
    </div>
  </div>
</template>
