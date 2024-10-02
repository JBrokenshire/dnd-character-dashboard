<script setup lang="ts">
import { modifierFromLevel } from '@/utils/utils'
import type { Character } from '@/models/Character'
import StatusesGroup from '@/components/character/sheet/subsections/StatusesGroup.vue'
import InitiativeContainer from '@/components/character/sheet/subsections/InitiativeContainer.vue'
import ArmourClassContainer from '@/components/character/sheet/subsections/ArmourClassContainer.vue'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <div id="cs-subsections__combat" class="absolute top-0 right-0">
    <div class="w-[517px] xl:w-[623px]">
      <div class="flex">
        <InitiativeContainer
          :className="className"
          :initiative="modifierFromLevel(character.dexterity) + character.initiative_modifier"
        />

        <ArmourClassContainer
          :className="className"
          :armourClass="
            character.base_armour_class +
            modifierFromLevel(character.dexterity) * character.armour_class_add_dexterity
          "
        />

        <StatusesGroup :className="className" :character="character" />
      </div>
    </div>
  </div>
</template>
