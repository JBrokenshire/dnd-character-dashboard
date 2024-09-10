<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterSheetHeader from '@/components/character_sheet/CharacterSheetHeader.vue'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'

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

  <div v-else class="max-width py-8 flex flex-col gap-8">
    <RouterLink to="/characters" class="w-fit my-2 flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back To Character List
    </RouterLink>
    <CharacterSheetHeader :character="state.character" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <RouterLink
          :to="`/classes/${state.character.class_id}`"
          class="w-fit mx-auto flex items-center gap-4 m-4 nav-link"
        >
          <h2 class="text-xl md:text-3xl font-bold text-center">
            {{ state.character.class.name }}
          </h2>
          <i class="pi pi-chevron-right text-2xl" />
        </RouterLink>
        <div class="border border-gray-300 rounded-md px-4">
          <p
            class="py-2"
            v-for="(section, index) in state.character.class.long_description.split('\n')"
            :key="`character-class-description-section-${index}`"
          >
            {{ section }}
          </p>
        </div>
      </div>
      <div>
        <RouterLink
          :to="`/races/${state.character.race_id}`"
          class="w-fit mx-auto flex items-center gap-4 m-4 nav-link"
        >
          <h2 class="text-xl md:text-3xl font-bold text-center">
            {{ state.character.race.name }}
          </h2>
          <i class="pi pi-chevron-right text-2xl" />
        </RouterLink>
        <div class="border border-gray-300 rounded-md px-4">
          <p
            class="py-2"
            v-for="(section, index) in state.character.race.long_description.split('\n')"
            :key="`character-race-description-section-${index}`"
          >
            {{ section }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
