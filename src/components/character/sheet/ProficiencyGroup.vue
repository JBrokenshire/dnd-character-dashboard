<script setup lang="ts">
defineProps<{
  title: string
  values: string[]
  className: string
  noBorder?: boolean
}>()
</script>

<template>
  <div :class="`pb-1 xl:pb-3 mb-1 xl:mb-3 border-${!noBorder && className + ' border-b'}`">
    <div class="text-[14px] text-cs-gray font-bold uppercase tracking-tightest">
      {{ title }}
    </div>
    <div class="text-white cursor-default text-[12px] leading-[1.4]">
      {{ values.join(', ') }}
    </div>
  </div>
</template>
