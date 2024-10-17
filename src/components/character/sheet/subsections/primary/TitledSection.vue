<script setup lang="ts">
defineProps<{
  className: string
}>()
</script>

<template>
  <section>
    <div class="section__header" :class="`text-${className} border-${className}-faded`">
      <slot name="title" />
    </div>

    <slot name="content" />
  </section>
</template>

<style scoped>
.section__header {
  @apply border-b text-[13px] font-bold tracking-tightest mb-[10px] uppercase;
}
</style>
