<script lang="ts" setup>
defineProps<{
  className: string
  profilePictureURL: string | null
}>()
</script>

<template>
  <img
    :src="
      profilePictureURL
        ? profilePictureURL
        : `/src/assets/img/character/card/default-profile-picture.png`
    "
    alt="Character Profile Picture"
    :class="`max-w-16 xl:max-w-20 aspect-square object-cover z-10 rounded-md border-2 border-${className}`"
  />
</template>
