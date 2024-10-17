<script lang="ts" setup>
import {
  healCharacter,
  damageCharacter,
  getCharacterByID,
  toggleInspiration,
  fetchCharacterArmourClass
} from '@/services/CharacterService'
import {
  getCharacterSkillsAdvantages,
  toggleSkillDisadvantage
} from '@/services/CharacterSkillService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Character } from '@/models/Character'
import { cleanClassName } from '@/utils/utils'
import CustomScaleLoader from '@/components/loaders/CustomScaleLoader.vue'
import type { CharacterSkillAdvantage } from '@/models/CharacterSkillsAdvantage'
import CharacterSheetHeader from '@/components/character/sheet/CharacterSheetHeader.vue'
import QuickInfoContainer from '@/components/character/sheet/quick-info/QuickInfoContainer.vue'
import CombatContainer from '@/components/character/sheet/subsections/combat/CombatContainer.vue'
import SensesContainer from '@/components/character/sheet/subsections/senses/SensesContainer.vue'
import SkillsContainer from '@/components/character/sheet/subsections/skills/SkillsContainer.vue'
import PrimaryContainer from '@/components/character/sheet/subsections/primary/PrimaryContainer.vue'
import SavingThrowsContainer from '@/components/character/sheet/subsections/saving-throws/SavingThrowsContainer.vue'
import ProficiencyGroupsContainer from '@/components/character/sheet/subsections/proficiencies/ProficiencyGroupsContainer.vue'

onMounted(async () => {
  character.value = await getCharacterByID(characterID)
  cleanedClassName.value = cleanClassName(character.value.class.name)
  armourClass.value = await fetchCharacterArmourClass(characterID)
  characterSkillsAdvantages.value = await getCharacterSkillsAdvantages(character.value.id)
  characterSkillsAdvantages.value.map((skillAdvantage) =>
    skillsAdvantagesMap.value.set(skillAdvantage.skill_name, skillAdvantage)
  )
  loading.value = false
})

const route = useRoute()

const characterID = route.params.id
const character = ref<Character>(null)
const armourClass = ref(0)
const characterSkillsAdvantages = ref<CharacterSkillAdvantage[]>([])
const skillsAdvantagesMap = ref<Map<string, CharacterSkillAdvantage>>(
  new Map<string, CharacterSkillAdvantage>()
)
const loading = ref(true)

const cleanedClassName = ref<string>('')

const heal = async (healValue) => {
  character.value = await healCharacter(character.value.id, healValue)
}

const damage = async (damageValue) => {
  character.value = await damageCharacter(character.value.id, damageValue)
}

const inspiration = async () => {
  character.value = await toggleInspiration(character.value.id)
}

const updateArmourClass = async () => {
  armourClass.value = await fetchCharacterArmourClass(characterID)
}

const toggleStealthDisadvantage = async () => {
  await toggleSkillDisadvantage(characterID, 'Stealth')
  characterSkillsAdvantages.value = await getCharacterSkillsAdvantages(character.value.id)
  characterSkillsAdvantages.value.map((skillAdvantage) =>
    skillsAdvantagesMap.value.set(skillAdvantage.skill_name, skillAdvantage)
  )
}
</script>

<template>
  <!-- Show loading spinner while isLoading = true -->
  <div v-if="loading" class="text-center py-6">
    <CustomScaleLoader />
  </div>

  <div v-else class="relative flex flex-col gap-4 min-h-screen pb-8">
    <!-- Background Image -->
    <img
      :src="`/img/character/sheet/backgrounds/${cleanedClassName}.png`"
      alt=""
      class="absolute top-0 left-0 w-full h-full -z-20 object-cover"
    />

    <CharacterSheetHeader :character="character" />

    <QuickInfoContainer
      :character="character"
      @toggle-inspiration="inspiration"
      @heal-character="heal"
      @damage-character="damage"
    />

    <!-- Subsections Container -->
    <div class="relative w-full max-w-[990px] xl:max-w-[1200px] mx-auto h-[770px]">
      <SavingThrowsContainer :className="cleanedClassName" :character="character" />

      <SensesContainer :className="cleanedClassName" :character="character" />

      <ProficiencyGroupsContainer :className="cleanedClassName" :character="character" />

      <SkillsContainer
        :className="cleanedClassName"
        :character="character"
        :character-skills-advantages="skillsAdvantagesMap"
      />

      <CombatContainer
        :className="cleanedClassName"
        :character="character"
        :armour-class="armourClass"
      />

      <PrimaryContainer
        :className="cleanedClassName"
        :character="character"
        @update-ac="updateArmourClass"
        @toggle-stealth-disadvantage="toggleStealthDisadvantage"
      />
    </div>
  </div>
</template>
