<script setup lang="ts">
import type { Attack } from '@/models/Action'

defineProps<{
  className: string
  attack: Attack
}>()
</script>

<template>
  <div class="attack-item__container text-white" :class="`border-${className}-faded`">
    <!-- Attack Icon -->
    <div class="w-[27px] cursor-pointer">
      <img
        class="attack-item__icon"
        :src="`/src/assets/svg/attack-icons/${attack.type}.svg`"
        alt=""
      />
    </div>

    <!-- Attack Name -->
    <div class="w-[140px] cursor-pointer">
      <div class="text-[14px] tracking-tightest">{{ attack.name }}</div>
      <div class="flex flex-wrap text-[10px] text-cs-gray italic">{{ attack.meta }}</div>
    </div>

    <!-- Attack Range -->
    <div class="w-[55px]">
      <div class="flex items-center font-bold text-[14px]">
        <span>
          <span>{{ attack.range }}</span>
          <span class="text-cs-gray text-[.625rem] ml-[.188rem]">
            {{ attack.long_range ? `(${attack.long_range})` : 'ft.' }}
          </span>
        </span>
      </div>
    </div>

    <!-- Attack Action -->
    <div class="w-[55px]">
      <div class="text-[16px]">
        <button
          class="text-[20px] w-[42px] h-[36px] inline-flex items-center justify-center rounded-[4px] align-baseline"
          :class="`button-${className}`"
        >
          <span class="inline-flex items-center">
            <span class="text-cs-gray text-[.75rem] mr-[.063rem]">
              {{ attack.action < 0 ? '-' : '+' }}
            </span>
            <span>{{ attack.action }}</span>
          </span>
        </button>
      </div>
    </div>

    <!-- Attack Damage -->
    <div class="w-[100px]">
      <button
        class="max-w-[96px] min-h-[36px] p-[3px] pl-[5px] inline-flex items-center justify-center rounded-[4px] align-baseline"
        :class="`button-${className}`"
      >
        <span class="mx-[3px] inline-flex items-center text-[14px]">
          <span class="flex flex-col items-start gap-0.5">
            <span>{{ attack.damage }}</span>
            <span v-if="attack.alt_damage" class="text-cs-gray">{{ attack.alt_damage }}</span>
          </span>
          <span>
            <img
              class="attack-item__icon ml-[8px]"
              :src="`/src/assets/svg/damage-types/${attack.damage_type}.svg`"
              alt=""
            />
          </span>
        </span>
      </button>
    </div>

    <!-- Attack Notes -->
    <div class="flex-1 text-cs-gray text-[12px] tracking-tightest">
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.attack-item__container {
  @apply mb-[8px] pb-[8px] border-b border-dotted flex items-center leading-[1];
}

.attack-item__icon {
  @apply inline-block w-[16px] h-[16px] align-middle cursor-pointer;
}
</style>
