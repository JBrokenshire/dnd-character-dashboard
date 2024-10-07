<script setup lang="ts">
import type { Character } from '@/models/Character'
import MoneyDisplay from '@/components/character/sheet/subsections/primary/inventory/MoneyDisplay.vue'
import type { CharacterMoney } from '@/models/Money'
import { onMounted, ref } from 'vue'
import { fetchCharacterMoney } from '@/services/CharacterMoneyService'

const props = defineProps<{
  className: string
  character: Character
}>()

const money = ref<CharacterMoney[]>([])
const loading = ref(true)

onMounted(async () => {
  money.value = await fetchCharacterMoney(props.character.id)
  loading.value = false
})
</script>

<template>
  <section v-if="!loading" class="flex flex-col w-full h-[600px]">
    <h2 class="sr-only">Inventory</h2>

    <div class="border-b mb-[10px] pb-[10px]" :class="`border-${className}-faded`">
      <div class="mt-[7px] flex-between leading-[1] tracking-tightest">
        <!-- Weight Display -->
        <div class="text-white text-[13px] cursor-pointer">
          <div>
            <span class="font-bold uppercase mr-[5px]">Weight Carried:</span>
            <span>
              <span> 139 </span>
              <span class="text-cs-gray text-[.625rem]">lb.</span>
            </span>
          </div>
          <div class="text-cs-gray font-bold uppercase text-[10px]">Unencumbered</div>
        </div>

        <MoneyDisplay :money="money" />
      </div>
    </div>
  </section>
</template>
