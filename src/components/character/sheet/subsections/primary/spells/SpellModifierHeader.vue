<script setup lang="ts">
defineProps<{
  className: string
  spellcastingAbilityModifier: number
  spellcastingAttackModifier: number
  spellSaveDc: number
}>()
</script>

<template>
  <div class="border-b mb-[10px] pb-[10px] flex w-full" :class="`border-${className}-faded`">
    <div class="flex flex-1 gap-[16px] justify-center">
      <!-- Spellcasting Ability Modifier -->
      <div class="cs-subsection__spells-spellcasting-info">
        <div class="flex">
          <span class="text-[16px] text-white">
            <span class="inline-flex items-center align-top">
              <span class="text-cs-gray text-[.75rem] mr-[.063rem]">
                {{ spellcastingAbilityModifier >= 0 ? '+' : '-' }}
              </span>
              <span>{{ Math.abs(spellcastingAbilityModifier) }}</span>
            </span>
          </span>
        </div>
        <div class="text-cs-gray uppercase text-[10px]">Modifier</div>
      </div>

      <!-- Spellcasting Attack Modifier -->
      <div class="cs-subsection__spells-spellcasting-info">
        <div class="flex">
          <span class="text-[16px] text-white">
            <span class="inline-flex items-center align-top">
              <span class="text-cs-gray text-[.75rem] mr-[.063rem]">
                {{ spellcastingAttackModifier >= 0 ? '+' : '-' }}
              </span>
              <span>{{ Math.abs(spellcastingAttackModifier) }}</span>
            </span>
          </span>
        </div>
        <div class="text-cs-gray uppercase text-[10px]">Spell Attack</div>
      </div>

      <!-- Spell Save DC -->
      <div class="cs-subsection__spells-spellcasting-info">
        <div class="flex">
          <span class="text-[16px] text-white">
            <span class="inline-flex items-center align-top">
              <span>{{ spellSaveDc }}</span>
            </span>
          </span>
        </div>
        <div class="text-cs-gray uppercase text-[10px]">Save DC</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cs-subsection__spells-spellcasting-info {
  @apply flex flex-col items-center font-bold tracking-tightest leading-[1];
}
</style>
