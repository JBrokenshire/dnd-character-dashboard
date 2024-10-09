<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CharacterInventoryItem } from '@/models/CharacterInventoryItem'
import { toggleCharacterInventoryItemEquipped } from '@/services/CharacterInventoryService'

const props = defineProps<{
  className: string
  item: CharacterInventoryItem
}>()

onMounted(() => {
  equipped.value = props.item.equipped
  weight.value = props.item.item.weight * (props.item.quantity || 1)
})

const equipped = ref(false)
const weight = ref(0)

const toggleEquipped = async () => {
  const updatedItem = await toggleCharacterInventoryItemEquipped(
    props.item.character_id,
    props.item.id
  )
  equipped.value = updatedItem.equipped
}
</script>

<template>
  <div class="flex items-center cursor-pointer leading-[1] py-[8px] text-white text-[14px]">
    <!-- Equipped Indicator -->
    <div class="w-[40px]">
      <div class="flex flex-wrap">
        <button
          v-if="item.item.equippable"
          class="relative active-indicator transition-200"
          :class="`${equipped ? `border-${className} bg-${className}` : `border-cs-gray`}`"
          @click="toggleEquipped"
        />
        <div v-else class="text-[10px] text-center w-[20px] mx-[2px]">—</div>
      </div>
    </div>

    <!-- Name -->
    <div class="w-[200px]">
      <span
        class="italic pr-[3px]"
        :class="`text-${item.item.rarity.toLowerCase().replace(' ', '-')}`"
      >
        {{ item.item.name }}
      </span>
      <div class="text-cs-gray text-[10px] tracking-tightest">{{ item.item.meta }}</div>
    </div>

    <!-- Weight -->
    <div class="w-[50px]">
      <span v-if="weight === 0" class="text-[10px] text-center w-[20px] mx-[2px]">—</span>
      <span v-else>
        <span>{{ item.item.weight * (item.quantity || 1) }}</span>
        <span class="text-cs-gray text-[.625rem] ml-[.188rem]">lb.</span>
      </span>
    </div>

    <!-- Quantity -->
    <div class="w-[35px]">
      <span v-if="item.quantity === 0" class="text-[10px] text-center w-[20px] mx-[2px]">—</span>
      <span v-else>
        <span>{{ item.quantity }}</span>
      </span>
    </div>

    <!-- Cost -->
    <div class="w-[50px]">
      <span v-if="item.item.cost === 0" class="text-[10px] text-center w-[20px] mx-[2px]">—</span>
      <span v-else>
        <span>{{ item.item.cost }}</span>
      </span>
    </div>

    <!-- Notes -->
    <div class="flex-1 text-cs-gray text-[12px] tracking-tightest line-clamp-3">
      {{ item.item.notes }}
    </div>
  </div>
</template>

<style scoped>
.active-indicator {
  @apply relative w-[20px] h-[20px] min-w-[20px] m-[2px] bg-black border;
}

.active-indicator::after {
  @apply content-[''] absolute w-[10px] h-[10px] m-auto translate-x-[-50%] translate-y-[-50%];
}
</style>
