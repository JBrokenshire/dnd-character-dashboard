<script lang="ts" setup>
import { Character } from '@/models/Character'
import { cleanClassName } from '@/utils/utils'
import CharacterProfilePicture from '@/components/character/CharacterProfilePicture.vue'
import { ref } from 'vue'

const props = defineProps({
  character: {
    type: Object as Character,
    required: true
  }
})

const cleanedClassName = ref<string>(cleanClassName(props.character.class.name))
</script>

<template>
  <div class="relative w-full flex items-center gap-2 sm:gap-8 p-4">
    <div class="absolute left-0 top-0 h-[120px] xl:h-[140px] w-full bg-cs-gray-dark -z-10" />
    <div
      class="w-full max-w-[990px] xl:max-w-[1200px] mx-auto flex sm:justify-between items-center gap-4"
    >
      <div class="flex gap-4">
        <CharacterProfilePicture
          :className="cleanedClassName"
          :profilePictureURL="character.profile_picture_url ? character.profile_picture_url : null"
        />

        <div class="flex flex-col justify-center items-start gap-2">
          <div class="flex items-center gap-2 sm:gap-4">
            <div class="lg:text-3xl text-xl font-bold text-white">{{ character.name }}</div>
            <RouterLink
              :to="`/characters/${character.id}/edit`"
              :class="`text-[8px] uppercase text-center rounded-md px-2 py-1 text-white transition-200 button-${cleanedClassName}`"
            >
              Edit
            </RouterLink>
          </div>
          <div class="text-gray-300 text-sm lg:text-md">
            Level {{ character.level }} | {{ character.race.name }} | {{ character.class.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
