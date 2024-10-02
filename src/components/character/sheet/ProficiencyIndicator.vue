<script setup lang="ts">
import type { Proficiency } from '@/models/Proficiency'

defineProps<{
  proficiency: Proficiency
  className: string
}>()
</script>

<template>
  <div class="relative w-[10px] h-[10px] translate-x-[-50%]">
    <div v-if="proficiency === 'Proficiency'" aria-label="Proficient">
      <div class="indicator" :class="`bg-${className}`" />
    </div>
    <div v-else-if="proficiency === 'Half-Proficiency'" aria-label="Half-Proficient">
      <div
        class="indicator overflow-hidden after:w-full after:h-full after:bottom-[50%] after:bg-cs-gray-dark after:border-dashed"
        :class="`bg-${className}`"
      />
    </div>
    <div v-else-if="proficiency === 'Expertise'" aria-label="Expertise">
      <div
        class="indicator after:w-[20px] after:h-[20px] after:left-[-5px] after:top-[-5px] after:bg-transparent after:border-2 after:rounded-full"
        :class="`bg-${className} border-${className}`"
      />
    </div>
    <div v-else aria-label="Not Proficient">
      <div class="indicator z-20 bg-cs-gray-dark border border-dashed border-cs-gray" />
    </div>
  </div>
</template>

<style scoped>
.indicator {
  @apply w-[10px] h-[10px] rounded-full relative;
}

.indicator::after {
  @apply content-[''] absolute;
}
</style>
