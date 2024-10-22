<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  className: string
  active: boolean
}>()
const emit = defineEmits(['toggle'])

const active = ref(props.active)

const toggle = () => {
  active.value = !active.value
  emit('toggle')
}
</script>

<template>
  <button
    class="relative active-indicator transition-200"
    :class="`${active ? `border-${className} bg-${className}` : `border-cs-gray`}`"
    @click="toggle"
  />
</template>

<style scoped>
.active-indicator {
  @apply relative w-[20px] h-[20px] min-w-[20px] m-[2px] bg-black border;
}

.active-indicator::after {
  @apply content-[''] absolute w-[10px] h-[10px] m-auto translate-x-[-50%] translate-y-[-50%];
}
</style>
