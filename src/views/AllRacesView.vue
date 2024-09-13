<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Race } from '@/models/Race'
import { useRouter } from 'vue-router'
import RaceCard from '@/components/RaceCard.vue'
import { getAllRaces } from '@/services/RaceService'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const router = useRouter()

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

  <div v-else class="max-width padding-x py-8 flex flex-col gap-2 sm:gap-8">
    <h2 class="border-b border-gray-300 pb-2 sm:pb-4 font-bold text-5xl text-center sm:text-start">
      Races
    </h2>
    <div v-if="races.length > 0" class="grid gap-2 sm:gap-8 mt-8 lg:grid-cols-2 xl:grid-cols-3">
      <RaceCard v-for="race in races" :key="`race-card-${race.id}`" :race="race" />
    </div>
  </div>
</template>
