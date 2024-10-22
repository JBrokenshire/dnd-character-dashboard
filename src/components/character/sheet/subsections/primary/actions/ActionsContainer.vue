<script setup lang="ts">
import type { Character } from '@/models/Character'
import AttackTable from '@/components/character/sheet/subsections/primary/actions/AttackTable.vue'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'

defineProps<{
  className: string
  character: Character
}>()
</script>

<template>
  <section class="flex flex-col w-full h-[600px] pb-4">
    <h2 class="sr-only">Actions</h2>

    <div class="overflow-y-auto">
      <!-- Actions List -->
      <titled-section class="mb-[25px]" :class-name="className">
        <template #title>
          <div>
            Actions • &nbsp;
            <span class="text-cs-gray font-normal normal-case">
              Attacks per Action: {{ character.attacks_per_action }}</span
            >
          </div>
        </template>

        <template #content>
          <div id="actions-content">
            <AttackTable :className="className" :character="character" />

            <div class="flex flex-col gap-4 text-[12px]">
              <div id="actions-in-combat" class="text-white">
                <div class="font-bold">Actions in Combat</div>
                <div class="border-l-2 mx-1 p-2" :class="`border-${className}`">
                  Attack, Dash, Disengage, Dodge, Grapple, Help, Hide, Improvise, Influence, Magic,
                  Ready, Search, Shove, Study, Utilise
                </div>
              </div>

              <div id="unarmed-strike-description" class="text-white">
                <div class="font-bold">Unarmed Strike</div>
                <div class="flex flex-col gap-1">
                  <div>
                    You make a melee attack that involves using your body to deal one of the
                    following effects:
                  </div>
                  <div>
                    <strong class="italic">Damage.</strong> You make an attack roll against the
                    creature, and on a hit, you deal 1 + STR Bludgeoning damage.
                  </div>
                  <div>
                    <strong class="italic">Grapple.</strong> The target must succeed on a Str./Dex.
                    (it chooses which) saving throw (DC = 8 + Prof. Bonus + Str.) or it has the
                    Grappled condition.
                  </div>
                  <div>
                    <strong class="italic">Shove.</strong> The target must succeed on a Str./Dex.
                    (it chooses which) saving throw (DC = 8 + Prof. Bonus + Str.) or you can either
                    push it 5 ft. away or cause it to have the Prone condition.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </titled-section>

      <titled-section class="mb-[25px]" :class-name="className">
        <template #title>Bonus Actions</template>
      </titled-section>

      <titled-section class="mb-[25px]" :class-name="className">
        <template #title>Reactions</template>
      </titled-section>

      <titled-section class="mb-[25px]" :class-name="className">
        <template #title>Other</template>
      </titled-section>
    </div>
  </section>
</template>
