<script setup lang="ts">
import type { Skill } from '@/models/Skill'
import type { Proficiency } from '@/models/Proficiency'
import ProficiencyIndicator from '@/components/character/sheet/subsections/ProficiencyIndicator.vue'
import type { CharacterSkillAdvantage } from '@/models/CharacterSkillsAdvantage'

defineProps<{
  className: string
  skill: Skill
  proficiency?: Proficiency
  advantages?: CharacterSkillAdvantage
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
    <div class="pr-[2px] flex-center">
      <span class="inline-block w-[17px] align-top">
        <span v-if="advantages?.disadvantage && !advantages.advantage" aria-label="Disadvantage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M15.1364 12C15.1364 9.97059 13.8933 8.41764 11.6113 8.41764H10.1345V15.5823H11.6113C13.8933 15.5823 15.1364 14.0471 15.1364 12Z"
              fill="#e40712"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.241 1.13253C12.0909 1.05 11.9091 1.05 11.759 1.13252L2.25904 6.35753C2.09927 6.4454 2 6.61329 2 6.79563V17.2044C2 17.3867 2.09927 17.5546 2.25904 17.6425L11.759 22.8675C11.9091 22.95 12.0909 22.95 12.241 22.8675L21.741 17.6425C21.9007 17.5546 22 17.3867 22 17.2044V6.79563C22 6.61329 21.9007 6.4454 21.741 6.35753L12.241 1.13253ZM11.6299 18H7.5V6H11.6299C15.4703 6 17.8636 8.48823 17.8636 12C17.8636 15.5118 15.4703 18 11.6299 18Z"
              fill="#e40712"
            />
          </svg>
        </span>
        <span v-if="!advantages?.disadvantage && advantages.advantage" aria-label="Advantage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <path d="M13.3665 12.5235L12.009 8.78235L10.6516 12.5235H13.3665Z" fill="#00c680" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.241 1.13253C12.0909 1.05 11.9091 1.05 11.759 1.13252L2.25904 6.35753C2.09927 6.4454 2 6.61329 2 6.79563V17.2044C2 17.3867 2.09927 17.5546 2.25904 17.6425L11.759 22.8675C11.9091 22.95 12.0909 22.95 12.241 22.8675L21.741 17.6425C21.9007 17.5546 22 17.3867 22 17.2044V6.79563C22 6.61329 21.9007 6.4454 21.741 6.35753L12.241 1.13253ZM18 17.5H15.1222L14.1991 14.9412H9.80091L8.87783 17.5H6L10.5611 5.5H13.4389L18 17.5Z"
                fill="#00c680"
              />
            </g>
          </svg>
        </span>
      </span>
    </div>
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
