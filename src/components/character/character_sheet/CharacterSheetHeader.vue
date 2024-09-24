<script lang="ts" setup>
import { Character } from '@/models/Character'
import CharacterProfilePicture from '@/components/character/CharacterProfilePicture.vue'

defineProps({
  character: {
    type: Object as Character,
    required: true
  }
})
</script>

<template>
  <div class="w-full flex items-center gap-2 sm:gap-8">
    <div class="flex justify-center sm:justify-start items-center gap-4">
      <CharacterProfilePicture
        :profilePictureURL="character.profile_picture_url ? character.profile_picture_url : null"
        class="border border-black"
      />

      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-2 sm:gap-4">
          <div class="lg:text-3xl text-xl font-bold">{{ character.name }}</div>
          <RouterLink
            :to="`/characters/${character.id}/edit`"
            class="text-xs uppercase text-center font-bold border border-primary rounded-md px-2 py-1 transition-200 hover:bg-primary hover:text-white"
          >
            Edit
          </RouterLink>
        </div>
        <div class="text-gray-600 text-sm lg:text-md">
          Level {{ character.level }} | {{ character.race.name }} | {{ character.class.name }}
        </div>
      </div>
    </div>

  </div>
</template>
