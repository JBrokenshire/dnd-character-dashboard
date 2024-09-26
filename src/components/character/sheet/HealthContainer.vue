<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  currentHitPoints: number
  maxHitPoints: number
  tempHitPoints: number
  className: string
}>()

const emit = defineEmits(['heal-character', 'damage-character'])

const emitHeal = () => {
  if (healthAdjusterValue.value == 0 || healthAdjusterValue.value == undefined) {
    healthAdjusterValue.value = undefined
    return
  }

  emit('heal-character', healthAdjusterValue.value)
  healthAdjusterValue.value = undefined
}

const emitDamage = () => {
  if (healthAdjusterValue.value == 0 || healthAdjusterValue.value == undefined) {
    healthAdjusterValue.value = undefined
    return
  }

  emit('damage-character', healthAdjusterValue.value)
  healthAdjusterValue.value = undefined
}

const healthAdjusterValue = ref<number>()
</script>

<template>
  <section id="cs-quick-info__health" class="cursor-pointer">
    <h2 class="sr-only">Character Health</h2>

    <div class="relative text-center h-[73px] xl:h-[89px] w-[260px] xl:w-[317px]">
      <!-- Background -->
      <div class="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317 88.98">
          <path
            fill="#10161ADB"
            d="M9.35,8,7,10.29a38.78,38.78,0,0,1,.35,6.19l.85,57c0,4.29.29,6.67,3.67,9.37l3.76,2.46c2.56,2,19.53,1.87,9.58,1.87l271.48-.68c3.29,0,5.19-2.23,7.75-4.28l3-2.64c3.38-2.7,1.7-2.4,1.7-6.69L310,17.06c0-4.28-.76-8-4.13-10.71h0a18.9,18.9,0,0,0-10.39-3.64L19.59,2.48A36.38,36.38,0,0,0,9.35,8Z"
          />
          <path
            :class="className"
            d="M305.89,0H11.1L0,9V79.93l11.1,9H305.89l11.11-9V9ZM294.34,86.5H22.6A24.06,24.06,0,0,1,8.69,78.78V10.24a24.36,24.36,0,0,1,14-7.76H294.4a24.09,24.09,0,0,1,13.91,7.72V78.73a24.36,24.36,0,0,1-14,7.77ZM3.05,21.16a27.77,27.77,0,0,1,4-8.79V76.63c-.37-.53-.76-1-1.09-1.62a27.78,27.78,0,0,1-2.89-7.1ZM310,12.34c.37.54.76,1.05,1.09,1.62A28,28,0,0,1,314,21.07V67.81a27.91,27.91,0,0,1-4,8.8Zm4-2.27v7a26.94,26.94,0,0,0-4-6.77v-.13h-.1a24.53,24.53,0,0,0-11.24-7.68h6ZM12.37,2.48h6A24.53,24.53,0,0,0,7.13,10.16H7v.13a26.94,26.94,0,0,0-4,6.77v-7ZM3.05,78.91v-7a26.81,26.81,0,0,0,4,6.78v.13h.1A24.61,24.61,0,0,0,18.37,86.5h-6ZM304.63,86.5h-6a24.61,24.61,0,0,0,11.24-7.68h.1v-.13a26.81,26.81,0,0,0,4-6.78v7Z"
          />
        </svg>
      </div>

      <div class="relative flex pt-[8px] pl-[15px]">
        <!-- Adjuster -->
        <div class="flex justify-center flex-grow basis-0">
          <div class="w-full">
            <button
              :class="`block xl:p-[4px] text-[7px] w-full button-${className} uppercase text-white font-bold bg-black rounded-[3px]`"
              @click="emitHeal"
            >
              Heal
            </button>
            <div class="text-center">
              <input
                v-model="healthAdjusterValue"
                :class="`mb-[4px] xl:my-[2px] w-full bg-black text-white text-center border-${className} text-[8px] my-auto xl:text-xs radius-[3px] p-[4px] appearance-none focus:outline-none min-h-[10px]`"
                style="-webkit-appearance: textfield; -moz-appearance: textfield"
                type="number"
                min="0"
                max="1000"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              />
            </div>
            <button
              :class="`block xl:p-[4px] text-[7px] w-full button-${className} uppercase text-white font-bold bg-black rounded-[3px]`"
              @click="emitDamage"
            >
              Damage
            </button>
          </div>
        </div>

        <!-- Current Hit Point Display -->
        <div
          class="min-w-[120px] xl:min-w-[130px] flex justify-center flex-grow flex-shrink basis-0"
        >
          <div class="flex flex-col">
            <div
              class="font-bold h-[1em] mb-[4px] xl:mb-[8px] uppercase text-[10px] xl:text-xs text-cs-gray tracking-tightest"
            >
              Current
            </div>
            <div class="text-[24px] xl:text-[26px] font-bold relative text-white">
              {{ currentHitPoints }}
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="font-bold h-[1em] mb-[4px] xl:mb-[8px] uppercase text-[10px] xl:text-xs text-cs-gray tracking-tightest"
            ></div>
            <div class="text-[24px] xl:text-[26px] text-cs-gray font-bold relative">
              <span class="px-[10px]">/</span>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="font-bold h-[1em] mb-[4px] xl:mb-[8px] uppercase text-[10px] xl:text-xs text-cs-gray tracking-tightest"
            >
              MAX
            </div>
            <div class="text-[24px] xl:text-[26px] font-bold relative text-white">
              {{ maxHitPoints }}
            </div>
          </div>
        </div>

        <!-- Temp Hit Point Display -->
        <div class="flex justify-center flex-grow flex-shrink basis-0">
          <div class="flex flex-col">
            <div
              class="font-bold h-[1em] mb-[4px] xl:mb-[8px] uppercase text-[10px] xl:text-xs text-cs-gray tracking-tightest"
            >
              Temp
            </div>
            <div
              v-if="tempHitPoints == 0"
              class="text-[24px] xl:text-[26px] font-bold relative text-cs-gray"
            >
              --
            </div>
            <div v-else class="text-[26px] font-bold relative text-white">{{ tempHitPoints }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
