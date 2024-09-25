<script lang="ts" setup>
defineProps({
  profilePictureURL: String
})
</script>

<template>
  <img
    :src="
      profilePictureURL
        ? profilePictureURL
        : `/src/assets/img/character/card/default-profile-picture.png`
    "
    alt="Character Profile Picture"
    class="max-w-20 aspect-square object-cover z-10 rounded-lg"
  />
</template>
