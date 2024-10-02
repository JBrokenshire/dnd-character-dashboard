<script setup lang="ts">
import DefensesContainer from '@/components/character/sheet/subsections/DefensesContainer.vue'
import ConditionsContainer from '@/components/character/sheet/subsections/ConditionsContainer.vue'
import { onMounted, ref } from 'vue'
import type { CharacterDefense } from '@/models/CharacterDefense'
import { getCharacterDefenses } from '@/services/CharacterDefenseService'

const props = defineProps<{
  className: string
  characterID: number
}>()

const defenses = ref<CharacterDefense[]>([])
const conditions = ref<CharacterCondition[]>([])
const loading = ref(true)

onMounted(async () => {
  defenses.value = await getCharacterDefenses(props.characterID)
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="flex-1 min-w-0 pl-[5px]">
    <div class="h-[95px] flex p-[10px] relative">
      <div class="svg-background">
        <!-- Large Screen SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 408 95"
          class="w-full h-full hidden xl:block"
        >
          <polygon fill="#10161ADB" points="8 93 401 93 401 2 8 2 8 93" />
          <path
            :class="className"
            d="M408,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H399.18V91.69H8.82V95s1.06-1.54,3.91-1.54H395.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H408V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S405.47,6.39,408,6.39ZM6.27,81.91H4.14V12.12H6.27Zm397.79.48h-2.12V12.61h2.12Z"
          />
        </svg>

        <!-- Small Screen SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 344 95"
          class="w-full h-full block xl:hidden"
        >
          <polygon fill="#10161ADB" points="8 93 337 93 337 2 8 2 8 93" />
          <path
            :class="className"
            d="M344,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H335.18V91.69H8.82V95s1.06-1.54,3.91-1.54H331.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H344V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S341.47,6.39,344,6.39ZM6.27,81.91H4.14V12.12H6.27Zm333.79.48h-2.12V12.61h2.12Z"
          />
        </svg>
      </div>

      <h2 class="sr-only">Defenses & Conditions</h2>
      <DefensesContainer :defenses="defenses" />
      <ConditionsContainer :conditions="conditions" />
    </div>
  </div>
</template>
