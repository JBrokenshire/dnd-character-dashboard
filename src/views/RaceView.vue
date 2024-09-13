<script lang="ts" setup>
import router from '@/router'
import { onMounted, ref } from 'vue'
import { Race } from '@/models/Race'
import { useRoute } from 'vue-router'
import { getRaceByID } from '@/services/RaceService'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

const raceID = useRoute().params.id

const race = ref<Race>({})
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  race.value = await getRaceByID(raceID)
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="max-width padding-x py-2 md:py-8">
    <button @click="router.back()" class="w-fit my-2 flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back
    </button>

    <div class="text-4xl font-bold text-center md:text-start">{{ race.name }}</div>

    <div class="flex flex-col md:flex-row justify-between w-full">
      <div
        class="flex flex-col gap-2 border border-gray-300 px-2 py-4 my-8 h-fit md:max-w-[50%] rounded-lg"
      >
        <p
          v-for="(section, index) in race.long_description.split('\n')"
          :key="`race-description-section-${index}`"
        >
          {{ section }}
        </p>
      </div>
      <img
        :src="`../src/assets/img/races/hero_images/${race.name.replace(/\s/g, '-').toLowerCase()}.png`"
        alt="Race Hero Image"
        class="md:max-w-[50%] object-contain md:max-h-[720px] h-[320px] md:h-fit"
      />
    </div>
  </div>
</template>
