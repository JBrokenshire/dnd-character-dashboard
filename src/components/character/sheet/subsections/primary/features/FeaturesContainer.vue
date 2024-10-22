<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Trait } from '@/models/Trait'
import type { Feature } from '@/models/Feature'
import type { Character } from '@/models/Character'
import { fetchRaceTraits } from '@/services/RaceService'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'
import ActiveIndicator from '@/components/character/sheet/subsections/primary/ActiveIndicator.vue'
import { fetchClassFeatures } from '@/services/ClassService'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  raceTraits.value = await fetchRaceTraits(props.character.race.id)
  classFeatures.value = await fetchClassFeatures(props.character.class.id)
  loading.value = false
})

const raceTraits = ref<Trait[]>([])
const classFeatures = ref<Feature[]>([])
const loading = ref(true)
</script>

<template>
  <section v-if="!loading" class="flex flex-col w-full h-[600px] pb-4">
    <h2 class="sr-only">Features & Traits</h2>

    <div class="overflow-y-scroll">
      <titled-section :class-name="className">
        <template #title>Class Features</template>
        <template #content>
          <div
            v-for="feature in classFeatures"
            :key="`class-feature-${feature.id}`"
            class="text-white text-[13px] tracking-tightest my-3"
          >
            <div class="font-bold">{{ feature.name }}</div>
            <div>{{ feature.description }}</div>

            <div
              v-if="feature.action"
              class="border-l-2 my-2 mx-1 p-2"
              :class="`border-${className}`"
            >
              <div>
                {{ feature.action }}:
                {{ feature.action_type ? `1 ${feature.action_type}` : '(No Action)' }}
              </div>
              <div class="flex items-center gap-1">
                <div class="flex">
                  <active-indicator
                    v-for="index in feature.action_uses"
                    :key="`${feature.name.replace(' ', '-')}-active-indicator-${index}`"
                    :class-name="className"
                    :active="false"
                  />
                </div>
                /&nbsp; {{ feature.action_reset }}
              </div>
            </div>
          </div>
        </template>
      </titled-section>

      <titled-section :class-name="className">
        <template #title>Racial Traits</template>
        <template #content>
          <div
            v-for="trait in raceTraits"
            :key="`race-trait-${trait.id}`"
            class="text-white text-[13px] tracking-tightest my-3"
          >
            <div class="font-bold">{{ trait.name }}</div>
            <div>{{ trait.description }}</div>

            <div
              v-if="trait.action"
              class="border-l-2 my-2 mx-1 p-2"
              :class="`border-${className}`"
            >
              <div>{{ trait.action }}: 1 {{ trait.action_type }}</div>
              <div class="flex items-center gap-1">
                <div class="flex">
                  <active-indicator
                    v-for="index in trait.action_uses"
                    :key="`${trait.name.replace(' ', '-')}-active-indicator-${index}`"
                    :class-name="className"
                    :active="false"
                  />
                </div>
                /&nbsp; {{ trait.action_reset }}
              </div>
            </div>
          </div>
        </template>
      </titled-section>

      <titled-section :class-name="className">
        <template #title>Feats</template>
        <template #content> </template>
      </titled-section>
    </div>
  </section>
</template>
