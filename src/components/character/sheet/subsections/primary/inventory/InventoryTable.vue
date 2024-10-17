<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type CharacterInventoryItem, getCombinedWeight } from '@/models/CharacterInventoryItem'
import InventoryItem from '@/components/character/sheet/subsections/primary/inventory/InventoryItem.vue'

const props = defineProps<{
  className: string
  items: CharacterInventoryItem[]
}>()

onMounted(() => {
  totalWeight.value = getCombinedWeight(props.items)
})

const totalWeight = ref(0)

defineEmits(['update-ac', 'toggle-stealth-disadvantage'])
</script>

<template>
  <div class="flex-1 flex-col overflow-y-auto mb-4">
    <div class="flex text-cs-gray">
      <slot name="column-headers" />
    </div>

    <div class="flex-1 pr-[5px]">
      <div class="flex items-center mb-[10px] border-b" :class="`border-${className}-faded`">
        <div class="flex-1 font-bold uppercase text-[12px] tracking-tightest text-white">
          <div class="flex items-center cursor-pointer py-[8px] leading-[1]">
            <div class="w-[40px]" />
            <div class="w-[200px]">
              <slot name="container-title" /> <span class="text-cs-gray">({{ items.length }})</span>
            </div>
            <div>
              <span>{{ totalWeight }}</span>
              <span class="text-cs-gray text-[10px] ml-[4px] normal-case">lb.</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <InventoryItem
          v-for="item in items"
          :key="item.id"
          :className="className"
          :item="item"
          @update-ac="$emit('update-ac')"
          @toggle-stealth-disadvantage="$emit('toggle-stealth-disadvantage')"
        />
      </div>
    </div>
  </div>
</template>
