<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CharacterInventoryItem } from '@/models/CharacterInventoryItem'
import { toggleCharacterInventoryItemEquipped } from '@/services/CharacterInventoryService'
import ActiveIndicator from '@/components/character/sheet/subsections/primary/ActiveIndicator.vue'

const props = defineProps<{
  className: string
  item: CharacterInventoryItem
}>()

onMounted(async () => {
  equipped.value = props.item.equipped
  weight.value = props.item.item.weight * (props.item.quantity || 1)
  loading.value = false
})

const equipped = ref(false)
const weight = ref(0)
const loading = ref(true)

const toggleEquipped = async () => {
  const updatedItem = await toggleCharacterInventoryItemEquipped(
    props.item.character_id,
    props.item.id
  )
  equipped.value = updatedItem.equipped

  if (props.item.item.notes.includes('Stealth Disadvantage')) {
    emit('toggle-stealth-disadvantage')
  }

  if (updatedItem.type === 'armour' || updatedItem.type === 'shield') {
    emit('update-ac')
  }
}

const emit = defineEmits(['update-ac', 'toggle-stealth-disadvantage'])
</script>

<template>
  <div
    v-if="!loading"
    class="flex items-center cursor-pointer leading-[1] py-[8px] text-white text-[14px]"
  >
    <!-- Equipped Indicator -->
    <div class="w-[40px]">
      <div class="flex flex-wrap">
        <active-indicator
          v-if="item.item.equippable && item.location === 'Equipment'"
          :class-name="className"
          :active="equipped"
          @toggle="toggleEquipped"
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
      <span
        v-for="(section, index) in item.item.notes.split(', ')"
        :key="`item-${item.id}-notes-section__${index}`"
      >
        <span v-if="section.includes(' Disadvantage')">
          {{ section.replace(' Disadvantage', '') }}
          <span class="inline-flex align-middle w-[14px] h-[14px] mb-[1px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M15.1364 12C15.1364 9.97059 13.8933 8.41764 11.6113 8.41764H10.1345V15.5823H11.6113C13.8933 15.5823 15.1364 14.0471 15.1364 12Z"
                fill="#e40712"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.241 1.13253C12.0909 1.05 11.9091 1.05 11.759 1.13252L2.25904 6.35753C2.09927 6.4454 2 6.61329 2 6.79563V17.2044C2 17.3867 2.09927 17.5546 2.25904 17.6425L11.759 22.8675C11.9091 22.95 12.0909 22.95 12.241 22.8675L21.741 17.6425C21.9007 17.5546 22 17.3867 22 17.2044V6.79563C22 6.61329 21.9007 6.4454 21.741 6.35753L12.241 1.13253ZM11.6299 18H7.5V6H11.6299C15.4703 6 17.8636 8.48823 17.8636 12C17.8636 15.5118 15.4703 18 11.6299 18Z"
                fill="#e40712"
              />
            </svg>
          </span>
        </span>
        <span v-else>{{ section }}</span>
        <span v-if="index < item.item.notes.split(', ').length - 1">, </span>
      </span>
    </div>
  </div>
</template>

<!--<style scoped>-->
<!--.active-indicator {-->
<!--  @apply relative w-[20px] h-[20px] min-w-[20px] m-[2px] bg-black border;-->
<!--}-->

<!--.active-indicator::after {-->
<!--  @apply content-[''] absolute w-[10px] h-[10px] m-auto translate-x-[-50%] translate-y-[-50%];-->
<!--}-->
<!--</style>-->
