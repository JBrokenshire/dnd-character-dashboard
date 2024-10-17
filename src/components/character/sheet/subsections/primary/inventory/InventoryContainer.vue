<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Character } from '@/models/Character'
import type { CharacterMoney } from '@/models/Money'
import { fetchCharacterMoney } from '@/services/CharacterMoneyService'
import { fetchCharacterInventory } from '@/services/CharacterInventoryService'
import { type CharacterInventoryItem, getCombinedWeight } from '@/models/CharacterInventoryItem'
import MoneyDisplay from '@/components/character/sheet/subsections/primary/inventory/MoneyDisplay.vue'
import InventoryTable from '@/components/character/sheet/subsections/primary/inventory/InventoryTable.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  money.value = await fetchCharacterMoney(props.character.id)
  inventory.value = await fetchCharacterInventory(props.character.id)
  inventoryWeight.value = getCombinedWeight(inventory.value)

  inventory.value.map((item) => {
    if (item.location === 'Equipment') {
      equipment.value.push(item)
    } else if (item.location === 'Backpack') {
      backpack.value.push(item)
    }
  })
  loading.value = false
})

const money = ref<CharacterMoney[]>([])
const inventory = ref<CharacterInventoryItem[]>([])
const inventoryWeight = ref(0)
const equipment = ref<CharacterInventoryItem[]>([])
const backpack = ref<CharacterInventoryItem[]>([])
const loading = ref(true)

defineEmits(['update-ac'])
</script>

<template>
  <section v-if="!loading" class="flex flex-col w-full h-[600px] pb-2">
    <h2 class="sr-only">Inventory</h2>

    <div class="border-b mb-[10px] pb-[10px]" :class="`border-${className}-faded`">
      <div class="mt-[7px] flex-between leading-[1] tracking-tightest">
        <!-- Weight Display -->
        <div class="text-white text-[13px] cursor-pointer">
          <div>
            <span class="font-bold uppercase mr-[5px]">Weight Carried:</span>
            <span>
              <span> {{ inventoryWeight }} </span>
              <span class="text-cs-gray text-[.625rem]">lb.</span>
            </span>
          </div>
          <div class="text-cs-gray font-bold uppercase text-[10px]">Unencumbered</div>
        </div>

        <MoneyDisplay :money="money" />
      </div>
    </div>

    <div class="flex-1 flex-col overflow-y-scroll">
      <div class="flex-1 flex-col h-full">
        <!-- Equipment -->
        <InventoryTable :className="className" :items="equipment" @update-ac="$emit('update-ac')">
          <template #column-headers>
            <div class="table__column-header w-[40px]">Active</div>
            <div class="table__column-header w-[200px]">Name</div>
            <div class="table__column-header w-[50px]">Weight</div>
            <div class="table__column-header w-[35px]">QTY</div>
            <div class="table__column-header w-[50px]">Cost (GP)</div>
            <div class="table__column-header flex-1">Notes</div>
          </template>

          <template #container-title>Equipment</template>
        </InventoryTable>

        <!-- Backpack -->
        <InventoryTable :className="className" :items="backpack">
          <template #column-headers>
            <div class="w-[40px]" />
            <div class="table__column-header w-[200px]">Name</div>
            <div class="table__column-header w-[50px]">Weight</div>
            <div class="table__column-header w-[35px]">QTY</div>
            <div class="table__column-header w-[50px]">Cost (GP)</div>
            <div class="table__column-header flex-1">Notes</div>
          </template>

          <template #container-title>Backpack</template>
        </InventoryTable>
      </div>
    </div>
  </section>
</template>
