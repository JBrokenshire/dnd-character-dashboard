<script setup lang="ts">
import type { Character } from '@/models/Character'
import AttackTable from '@/components/character/sheet/subsections/primary/actions/AttackTable.vue'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <section class="text-[13px] z-20">
    <h2 class="sr-only">Actions</h2>

    <div class="h-[580px] overflow-y-auto">
      <!-- Actions List -->
      <div class="mb-[25px]">
        <div class="actions-list__heading" :class="`text-${className} border-${className}`">
          <div>
            Actions • &nbsp;
            <span class="text-cs-gray font-normal normal-case">
              Attacks per Action: {{ character.attacks_per_action }}</span
            >
          </div>
        </div>

        <div id="actions-content">
          <AttackTable :className="className" :character="character" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.actions-list__heading {
  @apply border-b font-bold tracking-tightest mb-[10px] uppercase;
}
</style>
