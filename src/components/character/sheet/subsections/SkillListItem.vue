<script setup lang="ts">
import type { Skill } from '@/models/Skill'
import type { Proficiency } from '@/models/Proficiency'
import ProficiencyIndicator from '@/components/character/sheet/ProficiencyIndicator.vue'

defineProps<{
  className: string
  skill: Skill
  proficiency?: Proficiency
  modifier: number
}>()
</script>

<template>
  <div
    class="flex items-center cursor-pointer mb-[5px] border-b"
    :class="`border-${className}-faded`"
  >
    <div class="flex-center pl-[3px] w-[30px]">
      <ProficiencyIndicator :proficiency="proficiency || ''" :class-name="className" />
    </div>
    <div class="w-[40px] text-cs-gray text-[12px] font-bold uppercase px-[5px]">
      {{ skill.ability.slice(0, 3) }}
    </div>
    <div class="py-[5px] text-[14px] text-white flex-1">{{ skill.name }}</div>
    <div class="self-end text-[14px] text-right">
      <div
        class="my-[2px] h-[24px] w-[40px] inline-flex items-center justify-center bg-transparent align-baseline rounded-[4px]"
        :class="`button-${className}`"
      >
        <span class="inline-flex items-center gap-0.5 align-top text-[20px] text-white">
          <span class="text-[.75rem] text-cs-gray">{{ modifier < 0 ? '-' : '+' }}</span>
          <span>{{ Math.abs(modifier) }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
