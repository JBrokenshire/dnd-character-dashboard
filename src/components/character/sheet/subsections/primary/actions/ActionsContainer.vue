<script setup lang="ts">
import type { Character } from '@/models/Character'
import AttackTable from '@/components/character/sheet/subsections/primary/actions/AttackTable.vue'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'

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
        <TitledSection :class-name="className">
          <template #title>
            <div>
              Actions • &nbsp;
              <span class="text-cs-gray font-normal normal-case">
                Attacks per Action: {{ character.attacks_per_action }}</span
              >
            </div>
          </template>

          <template #content>
            <div id="actions-content">
              <AttackTable :className="className" :character="character" />
            </div>
          </template>
        </TitledSection>
      </div>
    </div>
  </section>
</template>
