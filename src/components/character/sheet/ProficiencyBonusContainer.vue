<script setup lang="ts">
import BonusContainer from '@/components/character/sheet/BonusContainer.vue'

defineProps<{ level: number }>()
</script>

<template>
  <section id="cs-quick-info__proficiency-bonus">
    <div class="sr-only">Proficiency Bonus</div>
    <BonusContainer>
      <template #top-title>
        <span class="block md:hidden">Prof.</span>
        <span class="hidden md:block">Proficiency</span>
      </template>
      <template #bonus-value>
        <div class="font-bold">
          <span class="text-cs-gray me-1">+</span>
          <span>{{ 2 + Math.floor((level - 1) / 4) }}</span>
        </div>
      </template>
      <template #bottom-title>Bonus</template>
    </BonusContainer>
  </section>
</template>
