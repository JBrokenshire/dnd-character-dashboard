<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { modifierFromLevel } from '@/utils/utils'
import type { Character } from '@/models/Character'
import { fetchCharacterArmourClass } from '@/services/CharacterService'
import StatusesGroup from '@/components/character/sheet/subsections/combat/StatusesGroup.vue'
import InitiativeContainer from '@/components/character/sheet/subsections/combat/InitiativeContainer.vue'
import ArmourClassContainer from '@/components/character/sheet/subsections/combat/ArmourClassContainer.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  armourClass.value = await fetchCharacterArmourClass(props.character.id)
  loading.value = false
})

const armourClass = ref(0)
const loading = ref(true)
</script>

<template>
  <div v-if="!loading" id="cs-subsections__combat" class="absolute top-0 right-0">
    <div class="w-[517px] xl:w-[623px]">
      <div class="flex">
        <InitiativeContainer
          :className="className"
          :initiative="modifierFromLevel(character.dexterity) + character.initiative_modifier"
        />

        <ArmourClassContainer :className="className" :armourClass="armourClass" />

        <StatusesGroup :className="className" :characterID="character.id" />
      </div>
    </div>
  </div>
</template>
