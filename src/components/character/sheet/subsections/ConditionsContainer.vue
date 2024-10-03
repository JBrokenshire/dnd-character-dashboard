<script setup lang="ts">
import type { CharacterConditions } from '@/models/CharacterConditions'

defineProps<{
  className: string
  conditions: CharacterConditions[]
}>()
</script>

<template>
  <div
    class="border-l flex-1 min-w-0 overflow-hidden px-[10px] relative cursor-pointer"
    :class="`border-${className}-faded`"
  >
    <div class="text-[12px] tracking-tightest font-bold uppercase text-cs-gray">Conditions</div>

    <!-- No Conditions Display -->
    <div v-if="conditions.length === 0" class="text-[12px] text-cs-gray">Add Active Conditions</div>

    <div v-else class="text-[12px] text-white">{{ conditions.join(', ') }}</div>
  </div>
</template>
