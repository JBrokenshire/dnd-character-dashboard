<script setup lang="ts">
import type { Character } from '@/models/Character'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <titled-section :class-name="className">
    <template #title>Characteristics</template>
    <template #content>
      <div class="grid grid-cols-5 mb-[5px]">
        <div class="my-[.375rem]">
          <p class="characteristics__title">Alignment</p>
          <p class="characteristics__content">
            <span :class="!character.alignment && 'text-cs-gray'">
              {{ character.alignment || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Gender</p>
          <p class="characteristics__content">
            <span :class="!character.gender && 'text-cs-gray font-bold'">
              {{ character.gender || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Eyes</p>
          <p class="characteristics__content">
            <span :class="!character.eyes && 'text-cs-gray font-bold'">
              {{ character.eyes || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Size</p>
          <p class="characteristics__content">
            <span :class="!character.size && 'text-cs-gray font-bold'">
              {{ character.size || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Height</p>
          <p class="characteristics__content">
            <span :class="!character.height && 'text-cs-gray font-bold'">
              {{ character.height || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Faith</p>
          <p class="characteristics__content">
            <span :class="!character.faith && 'text-cs-gray font-bold'">
              {{ character.faith || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Hair</p>
          <p class="characteristics__content">
            <span :class="!character.hair && 'text-cs-gray font-bold'">
              {{ character.hair || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Skin</p>
          <p class="characteristics__content">
            <span :class="!character.skin && 'text-cs-gray font-bold'">
              {{ character.skin || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Age</p>
          <p class="characteristics__content">
            <span :class="!character.age && 'text-cs-gray font-bold'">
              {{ character.age || '—' }}
            </span>
          </p>
        </div>
        <div class="my-[.375rem]">
          <p class="characteristics__title">Weight</p>
          <p class="characteristics__content">
            <span :class="!character.weight && 'text-cs-gray font-bold'">
              <span v-if="character.weight">
                {{ character.weight }}
                <span class="text-cs-gray text-[10px]">lb.</span>
              </span>
              <span v-else class="text-cs-gray font-bold">—</span>
            </span>
          </p>
        </div>
      </div>
    </template>
  </titled-section>
</template>

<style scoped>
.characteristics__title {
  @apply text-[.7rem] font-bold uppercase;
}

.characteristics__content {
  @apply text-[.813rem];
}
</style>
