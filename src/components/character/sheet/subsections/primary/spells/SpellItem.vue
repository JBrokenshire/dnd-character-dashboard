<script setup lang="ts">
import type { Spell } from '@/models/Spell'

defineProps<{
  className: string
  spell: Spell
  origin: string
  spellAttackModifier: number
  spellSaveDc: number
}>()
</script>

<template>
  <div class="flex items-center cursor-pointer leading-[1] py-[8px]">
    <!-- Action -->
    <div class="relative w-[30px] pr-[5px]">
      <span
        v-if="spell.level === 0"
        class="block text-center uppercase text-cs-gray text-[8px] mx-[2px]"
      >
        At Will
      </span>
      <button
        v-else
        class="relative block text-[8px] text-center tracking-tightest rounded-[3px] py-[5px] w-full text-white"
        :class="`button-${className}`"
      >
        <span class="uppercase">Cast</span>
      </button>
    </div>

    <!-- Name -->
    <div class="w-[140px]">
      <div class="text-[12.5px]">
        <span class="text-white italic">{{ spell.name }}</span>
      </div>
      <div class="text-cs-gray text-[10px] tracking-tightest">
        <span>{{ origin }}</span>
      </div>
    </div>

    <!-- Time -->
    <div class="w-[35px] text-cs-gray">
      <span>{{ spell.casting_time }}</span>
    </div>

    <!-- Range -->
    <div class="w-[55px] tracking-tightest">
      <div v-if="isNaN(Number(spell.distance))" class="text-cs-gray text-[12px]">
        {{ spell.distance }}
      </div>
      <div v-else class="flex items-baseline text-[14px] font-bold">
        <span>{{ spell.distance }}</span>
        <span class="text-cs-gray text-[.625rem] ml-[.188rem]">ft.</span>
      </div>
    </div>

    <!-- Hit / DC -->
    <div class="w-[45px]">
      <div v-if="spell.effect === 'Attack'">
        <button class="w-[42px] h-[36px] text-[20px] rounded-[5px]" :class="`button-${className}`">
          <span class="inline-flex items-center">
            <span class="text-cs-gray text-[.85rem] mr-[.063rem]">
              {{ spellAttackModifier >= 0 ? '+' : '-' }}
            </span>
            <span>{{ spellAttackModifier }}</span>
          </span>
        </button>
      </div>
      <div v-else-if="spell.save" class="font-bold">
        <span class="text-cs-gray uppercase block text-[10px]">{{ spell.save }}</span>
        <span class="text-[14px]">{{ spellSaveDc }}</span>
      </div>
      <div v-else>
        <span class="text-cs-gray">—</span>
      </div>
    </div>

    <!-- Damage / Effect -->
    <div class="w-[85px]">
      <div v-if="spell.damage">
        <button
          class="max-w-[76px] min-h-[36px] p-[3px] rounded-[5px]"
          :class="`button-${className}`"
        >
          <span class="text-white">{{ spell.damage }}</span>
          <span>
            <img
              :src="`/src/assets/svg/damage-types/${spell.damage_type?.toLowerCase()}.svg`"
              alt=""
              class="inline-block h-[16px] w-[16px] ml-[3px] align-top"
            />
          </span>
        </button>
      </div>
      <div v-else>
        <span class="text-cs-gray text-[12px] tracking-tightest italic">
          {{ spell.effect }}
        </span>
      </div>
    </div>

    <!-- Notes -->
    <div class="flex-1 text-[12px] text-cs-gray">{{ spell.notes }}</div>
  </div>
</template>
