<script setup>
import { primaryColour } from '@/constants/index.js'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
</script>

<template>
  <ScaleLoader :color="primaryColour" height="72px" width="8px" margin="8px" />
</template>
