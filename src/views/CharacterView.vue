<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { getCharacterByID } from '@/services/CharacterService'
import CustomScaleLoader from '@/components/CustomScaleLoader.vue'
import CharacterSheetHeader from '@/components/character_sheet/CharacterSheetHeader.vue'

const route = useRoute()

const characterID = route.params.id

const isLoading = ref(true)
const character = ref<Character>(null)

onMounted(async () => {
  character.value = await getCharacterByID(characterID)
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="max-width padding-x py-8 flex flex-col gap-8">
    <RouterLink to="/characters" class="w-fit my-2 flex items-center gap-2 text-lg nav-link">
      <i class="pi pi-chevron-left scale-[.75]" />
      Back To Character List
    </RouterLink>
    <CharacterSheetHeader :character="character" />
  </div>
</template>