<script setup lang="ts">
import type { Character } from '@/models/Character'
import InitiativeContainer from '@/components/character/sheet/subsections/InitiativeContainer.vue'
import { modifierFromLevel } from '@/utils/utils'

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
      </div>
    </div>
  </div>
</template>
