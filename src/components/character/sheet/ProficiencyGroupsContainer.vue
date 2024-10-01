<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Character } from '@/models/Character'
import ProficiencyGroup from '@/components/character/sheet/ProficiencyGroup.vue'
import {
  fetchArmourProficiencies,
  fetchLanguageProficiencies,
  fetchToolProficiencies,
  fetchWeaponProficiencies
} from '@/services/CharacterProficiencyService'

const props = defineProps<{
  className: string
  character: Character
}>()

const armour = ref<string[]>([])
const weapons = ref<string[]>([])
const tools = ref<string[]>([])
const languages = ref<string[]>([])
const loading = ref(true)

onMounted(async () => {
  const characterID = props.character.id

  armour.value = await fetchArmourProficiencies(characterID)
  weapons.value = await fetchWeaponProficiencies(characterID)
  tools.value = await fetchToolProficiencies(characterID)
  languages.value = await fetchLanguageProficiencies(characterID)
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="absolute left-0 top-[427px]">
    <div class="relative w-[228px] xl:w-[278px] h-[338px] px-[20px] py-[13px]">
      <div class="svg-background">
        <!-- Large Screen SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278 338" class="hidden xl:block">
          <polygon fill="#10161ADB" points="8 336 271 336 271 2 8 2 8 336" />
          <path
            :class="className"
            d="M278,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V324.91S2.53,329,0,329V331H6.14v7H8.82V3.31H269.18V334.69H8.82V338s1.06-1.54,3.91-1.54H265.27c2.84,0,3.9,1.52,3.91,1.54h2.68v-7H278V329c-2.53,0-2.67-4.13-2.67-4.13V10.53s.14-4.14,2.67-4.14ZM6.27,324.91H4.14V12.12H6.27Zm267.79.48h-2.12V12.61h2.12Z"
          />
        </svg>
        <!-- Small Screen SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 338" class="block xl:hidden">
          <polygon fill="#10161ADB" points="8 336 221 336 221 2 8 2 8 336" />
          <path
            :class="className"
            d="M228,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V324.91S2.53,329,0,329v2H6.14v7H8.82V3.31H219.18V334.69H8.82V338s1.06-1.54,3.91-1.54H215.27c2.84,0,3.9,1.52,3.91,1.54h2.68v-7H228v-2c-2.53,0-2.67-4.13-2.67-4.13V10.53S225.47,6.39,228,6.39ZM6.27,324.91H4.14V12.12H6.27Zm217.79.48h-2.12V12.61h2.12Z"
          />
        </svg>
      </div>

      <h2 class="sr-only">Proficiencies and Languages</h2>

      <div class="relative h-[300px] overflow-y-auto">
        <ProficiencyGroup title="Armour" :values="armour" :className="className" />
        <ProficiencyGroup title="Weapons" :values="weapons" :className="className" />
        <ProficiencyGroup title="Tools" :values="tools" :className="className" />
        <ProficiencyGroup
          title="Languages"
          :values="languages"
          :className="className"
          :noBorder="true"
        />
      </div>
    </div>

    <div id="cs-subsections__proficiencies-languages-footer" class="subsection-footer">
      Proficiencies & Languages
    </div>
  </div>
</template>
