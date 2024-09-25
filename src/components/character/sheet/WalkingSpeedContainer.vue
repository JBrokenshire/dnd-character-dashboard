<script setup lang="ts">
import BonusContainer from '@/components/character/sheet/BonusContainer.vue'

defineProps<{ speed: number }>()
</script>

<template>
  <section id="cs-quick-info__walking-speed">
    <div class="sr-only">Walking Speed</div>
    <BonusContainer>
      <template #top-title>Walking</template>
      <template #bonus-value>
        <div class="font-bold">
          <span>
            {{ speed }}
          </span>
          <span class="text-cs-gray text-sm ms-1">ft.</span>
        </div>
      </template>
      <template #bottom-title>Speed</template>
    </BonusContainer>
  </section>
</template>
