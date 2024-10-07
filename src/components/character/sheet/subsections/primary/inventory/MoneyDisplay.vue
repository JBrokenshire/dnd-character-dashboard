<script setup lang="ts">
import type { CharacterMoney } from '@/models/Money'
import MoneyItem from '@/components/character/sheet/subsections/primary/inventory/MoneyItem.vue'

defineProps<{
  money: CharacterMoney[]
}>()
</script>

<template>
  <div class="text-cs-gray transition-200 rounded-[3px] hover:bg-cs-gray-dark">
    <div class="flex items-center justify-end gap-[6px] p-[6px]">
      <MoneyItem v-for="m in money" :key="m.id" :type="m.money" :amount="m.amount" />
    </div>
  </div>
</template>
