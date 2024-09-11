<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'
import ClassCard from '@/components/ClassCard.vue'

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
    <h2 class="border-b border-gray-300 pb-4 font-bold text-5xl text-center sm:text-start">
      Classes
    </h2>
    <div
      v-if="state.classes.length > 0"
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-4"
    >
      <ClassCard
        v-for="classType in state.classes"
        :key="`class-card-${classType.id}`"
        :classType="classType"
      />
    </div>
  </div>
</template>
