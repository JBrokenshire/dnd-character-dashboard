<script setup lang="ts">
import type { Character } from '@/models/Character'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'
import CharacteristicsContainer from '@/components/character/sheet/subsections/primary/background/CharacteristicsContainer.vue'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <section class="flex flex-col w-full h-[600px] overflow-y-scroll pb-2 text-white">
    <h2 class="sr-only">Background</h2>

    <titled-section :class-name="className">
      <template #title>Background</template>
      <template #content>
        <div class="text-[15px] font-bold">{{ character.background.name }}</div>
        <div class="text-[13px] mt-[5px] mb-[15px]">
          <div class="font-bold">{{ character.background.feature }}</div>
          <p>{{ character.background.description }}</p>
        </div>
      </template>
    </titled-section>

    <characteristics-container :class-name="className" :character="character" />

    <titled-section :class-name="className">
      <template #title>Personality Traits</template>
      <template #content></template>
    </titled-section>
  </section>
</template>
