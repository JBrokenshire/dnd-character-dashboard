<script setup lang="ts">
defineProps<{
  type: string
  amount: number
}>()
</script>

<template>
  <div class="text-[14px] font-bold uppercase">
    <span class="flex-center cursor-pointer">
      <span>{{ amount }}</span>
      <span class="w-[16px] h-[16px]">
        <img :src="`/src/assets/svg/money/${type}.svg`" alt="" />
      </span>
    </span>
  </div>
</template>
