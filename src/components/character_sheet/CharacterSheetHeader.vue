<script setup>
import CharacterProfilePicture from '@/components/CharacterProfilePicture.vue'

defineProps({
  character: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-full padding-x py-8">
    <div class="max-width flex-between">
      <div class="flex justify-center sm:justify-start items-center gap-4">
        <CharacterProfilePicture
          :profilePictureURL="character.profile_picture_url ? character.profile_picture_url : null"
          class="border border-black"
        />

        <div class="flex flex-col items-start gap-4">
          <div class="lg:text-3xl text-xl font-bold">{{ character.name }}</div>
          <div class="text-gray-600 text-sm lg:text-md">
            Level {{ character.level }} | {{ character.race.name }} | {{ character.class.name }}
          </div>
        </div>
      </div>

      <RouterLink
        :to="`/characters/${character.id}/edit`"
        class="flex items-center gap-2 text-lg nav-link"
      >
        Edit Character
        <i class="pi pi-chevron-right scale-[.75]" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
