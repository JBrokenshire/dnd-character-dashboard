<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const router = useRouter()

const state = reactive({
  classes: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get('/api/classes')
    state.classes = response.data
  } catch (error) {
    console.error('Error fetching classes:', error)
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
    <div
      v-if="state.classes.length > 0"
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8"
    >
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${classType.id}`"
          v-for="classType in state.classes.slice(0, Math.floor(state.classes.length / 3))"
          :key="classType.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ classType.name }}</div>
          <p
            v-for="(section, index) in classType.short_description.split('\n')"
            :key="`${classType.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${classType.id}`"
          v-for="classType in state.classes.slice(
            Math.floor(state.classes.length / 3),
            2 * Math.floor(state.classes.length / 3) + 1
          )"
          :key="classType.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ classType.name }}</div>
          <p
            v-for="(section, index) in classType.short_description.split('\n')"
            :key="`${classType.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
      <div class="flex flex-col gap-8">
        <RouterLink
          :to="`/classes/${classType.id}`"
          v-for="classType in state.classes.slice(
            2 * Math.floor(state.classes.length / 3) + 1,
            state.classes.length
          )"
          :key="classType.id"
          class="border border-gray-300 rounded-md px-4 py-2 transition-200 hover:text-primary hover:shadow-lg"
        >
          <div class="text-3xl font-bold mb-2">{{ classType.name }}</div>
          <p
            v-for="(section, index) in classType.short_description.split('\n')"
            :key="`${classType.name}-description-section-${index}`"
            class="mb-2 text-black"
          >
            {{ section }}
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
