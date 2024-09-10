<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import router from '@/router/index.js'
import { onMounted, reactive } from 'vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const classID = useRoute().params.id

const state = reactive({
  class: Object,
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get(`/api/classes/${classID}`)
    state.class = response.data
  } catch (error) {
    console.error(`Error fetching class with id ${classID}`, error)
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

  <div v-else class="max-width padding-x py-8">
    <RouterLink to="/classes" class="w-fit my-2 flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back
    </RouterLink>

    <div class="flex justify-center md:justify-start items-center gap-4">
      <img
        :src="`../src/assets/img/classes/card_backgrounds/${state.class.name.replace(/\s/g, '-').toLowerCase()}.jpg`"
        alt=""
        class="object-fill aspect-square max-w-24 rounded-lg"
      />

      <div class="flex flex-col gap-2">
        <div class="text-4xl font-bold">{{ state.class.name }}</div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between mx-auto">
      <div
        class="flex flex-col gap-2 border border-gray-300 px-2 py-4 my-8 h-fit md:max-w-[50%] rounded-lg"
      >
        <p
          v-for="(section, index) in state.class.long_description.split('\n')"
          :key="`class-description-section-${index}`"
        >
          {{ section }}
        </p>
      </div>
      <img
        :src="`../src/assets/img/classes/hero_images/${state.class.name.replace(/\s/g, '-').toLowerCase()}.png`"
        alt="Class Hero Image"
        class="md:max-w-[50%] object-contain md:max-h-[720px] h-[320px] md:h-fit"
      />
    </div>
  </div>
</template>
