<script setup lang="ts">
defineProps<{
  className: string
  initiative: number
}>()
</script>

<template>
  <div class="w-[85px] xl:w-[105px] pt-[2px]">
    <div class="w-[4.375rem] xl:w-[5.625rem] cursor-pointer mx-auto relative">
      <div
        class="text-white outlined-text text-[.675rem] xl:text-[.75rem] font-bold mb-[.1875rem] text-center uppercase"
      >
        Initiative
      </div>
      <div
        class="w-[4.375rem] h-[2.8125rem] xl:w-[5.625rem] xl:h-[3.4375rem] flex-center text-[1.625rem] relative"
      >
        <div class="svg-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 45" class="w-full h-full">
            <polygon
              fill="#10161ADB"
              points="68.8,22.5 55.8,43.3 14.2,43.3 1.2,22.5 14.2,1.8 14.3,1.7 55.7,1.7 55.8,1.8 "
            />
            <path
              :class="className"
              d="M59.1,0H10.9L0,17.2v10.5L10.9,45H59l11-17.2V17.2L59.1,0z M58.2,2.2l10,15.8v3L56.5,2.3l-0.1-0.1H58.2z M14.8,2.2h40.5 l0.1,0.1L68,22.5L55.3,42.8H14.7L2,22.5L14.8,2.2L14.8,2.2z M1.8,18l10-15.8h1.8l-0.1,0.1L1.8,21V18z M11.8,42.8L1.8,27v-3 l11.7,18.8H11.8z M68.2,27l-10,15.8h-1.7L68.2,24V27z"
            />
          </svg>
        </div>

        <h2 class="sr-only">Initiative</h2>

        <!-- Modifier Button -->
        <button
          class="relative h-[2.125rem] w-[2.625rem] xl:w-[3.25rem] mx-auto flex-center rounded-[4px] text-white"
          :class="`button-${className}`"
        >
          <span class="relative inline-flex items-center gap-0.5 align-top">
            <span class="text-cs-gray">{{ initiative < 0 ? '-' : '+' }}</span>
            <span>{{ Math.abs(initiative) }}</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
