<script lang="ts" setup>
import { primaryColour } from '@/constants'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
</script>

<template>
  <ScaleLoader :color="primaryColour" height="72px" width="8px" margin="8px" />
</template>
