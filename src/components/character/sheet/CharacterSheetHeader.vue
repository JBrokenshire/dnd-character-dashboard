<script lang="ts" setup>
import { Character } from '@/models/Character'
import CharacterProfilePicture from '@/components/character/CharacterProfilePicture.vue'
import { cleanClassName } from '@/utils/utils'

defineProps({
  character: {
    type: Object as Character,
    required: true
  }
})
</script>

<template>
  <div class="relative w-full flex items-center gap-2 sm:gap-8 p-4">
    <div class="absolute left-0 top-0 h-[140px] w-full bg-cs-gray-dark -z-10" />
    <div class="w-[1200px] max-w-[1200px] mx-auto flex sm:justify-between items-center gap-4">
      <div class="flex gap-4">
        <CharacterProfilePicture
          :className="cleanClassName(character.class.name)"
          :profilePictureURL="character.profile_picture_url ? character.profile_picture_url : null"
          :style="`border: 2px solid ${character.class.colour}`"
        />

        <div class="flex flex-col justify-center items-start gap-2">
          <div class="flex items-center gap-2 sm:gap-4">
            <div class="lg:text-3xl text-xl font-bold text-white">{{ character.name }}</div>
            <RouterLink
              :to="`/characters/${character.id}/edit`"
              :class="`text-xs text-center font-bold rounded-md px-2 py-1 text-white transition-200 button-${cleanClassName(character.class.name)}`"
              :style="`border: 1px solid ${character.class.colour}`"
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
