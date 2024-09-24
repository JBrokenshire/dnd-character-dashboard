<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="text-3xl md:text-6xl font-bold mb-4">{{ title }}</h1>
  <p class="text-md md:text-xl mb-5">{{ message }}</p>
</template>
