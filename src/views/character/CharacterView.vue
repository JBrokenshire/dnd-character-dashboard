<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { cleanClassName } from '@/utils/utils'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import QuickInfoContainer from '@/components/character/sheet/QuickInfoContainer.vue'
import CharacterSheetHeader from '@/components/character/sheet/CharacterSheetHeader.vue'
import {
  damageCharacter,
  getCharacterByID,
  healCharacter,
  toggleInspiration
} from '@/services/CharacterService'
import SavingThrowsContainer from '@/components/character/sheet/SavingThrowsContainer.vue'
import SensesContainer from '@/components/character/sheet/SensesContainer.vue'

const route = useRoute()

const characterID = route.params.id

const isLoading = ref(true)
const character = ref<Character>(null)
const cleanedClassName = ref<string>('')

onMounted(async () => {
  character.value = await getCharacterByID(characterID)
  cleanedClassName.value = cleanClassName(character.value.class.name)
  isLoading.value = false
})
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="isLoading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="relative flex flex-col gap-4 min-h-screen">
    <!-- Background Image -->
    <img
      :src="`/img/character/sheet/backgrounds/${cleanedClassName}.png`"
      alt=""
      class="absolute top-0 left-0 w-full h-full -z-20 object-cover"
    />

    <CharacterSheetHeader :character="character" />

    <QuickInfoContainer
      :character="character"
      @toggle-inspiration="
        async () => {
          character = await toggleInspiration(character.id)
        }
      "
      @heal-character="
        async (healValue) => {
          character = await healCharacter(character.id, healValue)
        }
      "
      @damage-character="
        async (damageValue) => {
          character = await damageCharacter(character.id, damageValue)
        }
      "
    />

    <!-- Subsections Container -->
    <div class="relative w-full max-w-[990px] xl:max-w-[1200px] mx-auto h-[770px]">
      <SavingThrowsContainer :className="cleanedClassName" :character="character" />

      <SensesContainer :className="cleanedClassName" :character="character" />
    </div>
  </div>
</template>
