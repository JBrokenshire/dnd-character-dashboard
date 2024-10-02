<script setup lang="ts">
import BonusContainer from '@/components/character/sheet/quick-info/BonusContainer.vue'

defineProps<{
  bonus: number
  className: string
}>()
</script>

<template>
  <section id="cs-quick-info__proficiency-bonus">
    <div class="sr-only">Proficiency Bonus</div>
    <BonusContainer :className="className">
      <template #top-title>
        <span>Proficiency</span>
      </template>
      <template #bonus-value>
        <div class="font-bold">
          <span class="text-cs-gray me-1">+</span>
          <span>{{ bonus }}</span>
        </div>
      </template>
      <template #bottom-title>Bonus</template>
    </BonusContainer>
  </section>
</template>
