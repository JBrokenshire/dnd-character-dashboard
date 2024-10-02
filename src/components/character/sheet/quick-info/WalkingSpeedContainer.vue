<script setup lang="ts">
import BonusContainer from '@/components/character/sheet/quick-info/BonusContainer.vue'

defineProps<{
  speed: number
  className: string
}>()
</script>

<template>
  <section id="cs-quick-info__walking-speed">
    <div class="sr-only">Walking Speed</div>
    <BonusContainer :className="className">
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
