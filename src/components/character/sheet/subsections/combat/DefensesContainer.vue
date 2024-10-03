<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CharacterDefense } from '@/models/CharacterDefense'
import DefenseItem from '@/components/character/sheet/subsections/combat/DefenseItem.vue'

const props = defineProps<{
  defenses: CharacterDefense[]
}>()

const resistances = ref<CharacterDefense[]>([])
const immunities = ref<CharacterDefense[]>([])
const vulnerabilities = ref<CharacterDefense[]>([])

onMounted(async () => {
  for (const d of props.defenses) {
    switch (d.defense_type) {
      case 'Resistance':
        resistances.value.push(d.damage_type)
        break
      case 'Immunity':
        immunities.value.push(d.damage_type)
        break
      case 'Vulnerability':
        vulnerabilities.value.push(d.damage_type)
        break
    }
  }
})
</script>

<template>
  <div class="cursor-pointer flex-1 min-w-0 overflow-hidden px-[10px] relative">
    <div class="text-[12px] tracking-tightest font-bold uppercase text-cs-gray">Defenses</div>
    <div class="max-h-[57px] overflow-y-scroll">
      <!-- Resistances -->
      <DefenseItem v-if="resistances.length > 0" :values="resistances">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40.89941 48"
            class="w-[12px] h-[12px] mr-[4px]"
          >
            <path
              fill="#00c680"
              d="M21.18969,15.5h-4.12v7.44h4.12a3.68142,3.68142,0,0,0,2.79-.97,3.75732,3.75732,0,0,0,.94-2.73,3.81933,3.81933,0,0,0-.95-2.74A3.638,3.638,0,0,0,21.18969,15.5Z"
            />
            <path
              fill="#00c680"
              d="M40.4497,8c-11,0-20-6-20-8,0,2-9,8-20,8-4,35,20,40,20,40S44.4497,43,40.4497,8Zm-8.11,29.51h-6.97l-4.77-9.56h-3.53v9.56h-6.51V10.49h10.63c3.2,0,5.71.71,7.51,2.13a7.21618,7.21618,0,0,1,2.71,6.03,8.78153,8.78153,0,0,1-1.14,4.67005,8.14932,8.14932,0,0,1-3.57,3l5.64,10.91Z"
            />
          </svg>
        </template>
      </DefenseItem>

      <!-- Immunities -->
      <DefenseItem v-if="immunities.length > 0" :values="immunities">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40.89941 48"
            class="w-[12px] h-[12px] mr-[4px]"
          >
            <path
              fill="#00c680"
              d="M40.4497,8c-11,0-20-6-20-8,0,2-9,8-20,8-4,35,20,40,20,40S44.4497,43,40.4497,8Zm-16.75,29.42h-6.5V10.4h6.5Z"
            />
          </svg>
        </template>
      </DefenseItem>

      <!-- Vulnerabilities -->
      <DefenseItem v-if="vulnerabilities.length > 0" :values="vulnerabilities">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40.89941 48"
            class="w-[12px] h-[12px] mr-[4px]"
          >
            <path
              fill="#e40712"
              d="M40.4497,8c-11,0-20-6-20-8,0,2-9,8-20,8-4,35,20,40,20,40S44.4497,43,40.4497,8Zm-16.63,30.42h-7.12l-9.02-27.02h7.22L20.2597,31.07l5.38-19.67h7.27Z"
            />
          </svg>
        </template>
      </DefenseItem>

      <!-- No Defenses Display -->
      <div
        v-if="resistances.length === 0 && immunities.length === 0 && vulnerabilities.length === 0"
        class="text-[12px] text-cs-gray"
      >
        Resistances, Immunities or Vulnerabilities
      </div>
    </div>
  </div>
</template>
