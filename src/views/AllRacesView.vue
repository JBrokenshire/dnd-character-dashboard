<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

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

  <div v-else class="max-width padding-x py-8 flex flex-col gap-8">
    <div v-if="state.races.length > 0" class="grid gap-8 mt-8 lg:grid-cols-2 xl:grid-cols-3">
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${race.id}`"
          v-for="race in state.races.slice(0, Math.floor(state.races.length / 3))"
          :key="race.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ race.name }}</div>
          <p
            v-for="(section, index) in race.description.split('\n')"
            :key="`${race.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${race.id}`"
          v-for="race in state.races.slice(
            Math.floor(state.races.length / 3),
            2 * Math.floor(state.races.length / 3) - 1
          )"
          :key="race.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ race.name }}</div>
          <p
            v-for="(section, index) in race.description.split('\n')"
            :key="`${race.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${race.id}`"
          v-for="race in state.races.slice(
            2 * Math.floor(state.races.length / 3) - 1,
            state.races.length
          )"
          :key="race.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ race.name }}</div>
          <p
            v-for="(section, index) in race.description.split('\n')"
            :key="`${race.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
