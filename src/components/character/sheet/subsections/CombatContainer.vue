<script setup lang="ts">
import type { Character } from '@/models/Character'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <div id="cs-subsections__combat" class="absolute top-0 right-0">
    <div class="w-[517px] xl:w-[623px]">
      <div class="flex"></div>
    </div>
  </div>
</template>
