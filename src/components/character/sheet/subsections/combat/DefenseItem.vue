<script setup lang="ts">
defineProps<{
  values: string[]
}>()
</script>

<template>
  <div class="leading-[1.2] flex gap-0.5">
    <span class="cursor-default">
      <slot name="icon" />
    </span>
    <span class="text-white text-[12px]">{{ values.join(', ') }}</span>
  </div>
</template>
