<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Feat } from '@/models/Feat'
import type { Trait } from '@/models/Trait'
import type { Character } from '@/models/Character'
import type { ClassFeature } from '@/models/Feature'
import { fetchRaceTraits } from '@/services/RaceService'
import { fetchCharacterFeats } from '@/services/CharacterFeatService'
import { fetchCharacterFeatures } from '@/services/CharacterFeatureService'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'
import ActiveIndicator from '@/components/character/sheet/subsections/primary/ActiveIndicator.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(async () => {
  raceTraits.value = await fetchRaceTraits(props.character.race.id)
  features.value = await fetchCharacterFeatures(props.character.id)
  feats.value = (await fetchCharacterFeats(props.character.id)) || []
  loading.value = false
})

const raceTraits = ref<Trait[]>([])
const features = ref<ClassFeature[]>([])
const feats = ref<Feat[]>([])
const loading = ref(true)

const getDescriptionSection = (sectionText: string) => {
  switch (sectionText) {
    case 'level':
      return `<span class=font-bold>${props.character.level}</span>`
    default:
      return sectionText
  }
}
</script>

<template>
  <section v-if="!loading" class="flex flex-col w-full h-[600px] pb-4">
    <h2 class="sr-only">Features & Traits</h2>

    <div class="overflow-y-scroll">
      <titled-section :class-name="className">
        <template #title>Class Features</template>
        <template #content>
          <div
            v-for="classFeature in features"
            :key="`class-feature-${classFeature.feature.id}`"
            class="text-white text-[13px] tracking-tightest my-3"
          >
            <div class="font-bold">{{ classFeature.feature.name }}</div>
            <div class="flex flex-col gap-1">
              <p
                v-for="(section, sectionIndex) in classFeature.feature.description.split('\n')"
                :key="`${classFeature.feature.id}-description-section-${sectionIndex}`"
              >
                <span
                  v-for="(part, partIndex) in section.split('%%')"
                  :key="`${classFeature.feature.id}-description-section-${sectionIndex}-${partIndex}`"
                  v-html="getDescriptionSection(part)"
                />
              </p>
            </div>

            <div
              v-if="classFeature.feature.action || classFeature.choices"
              class="border-l-2 my-2 mx-1 p-2"
              :class="`border-${className}`"
            >
              <div v-if="classFeature.choices">
                <div v-if="classFeature.choices.length > 0" class="flex flex-col gap-1">
                  <div
                    v-for="choice in classFeature.choices"
                    :key="`class-feature-${classFeature.feature.id}-choice-${choice.option.replace(' ', '-')}`"
                  >
                    <div class="font-bold">{{ choice.option }}</div>
                    <div v-html="choice.body" />
                  </div>
                </div>
              </div>

              <div v-if="classFeature.feature.action">
                <div>
                  {{ classFeature.feature.action }}:
                  {{
                    classFeature.feature.action_type
                      ? `1 ${classFeature.feature.action_type}`
                      : '(No Action)'
                  }}
                </div>
                <div class="flex items-center gap-1">
                  <div class="flex">
                    <active-indicator
                      v-for="index in classFeature.feature.action_uses"
                      :key="`${classFeature.feature.name.replace(' ', '-')}-active-indicator-${index}`"
                      :class-name="className"
                      :active="false"
                    />
                  </div>
                  /&nbsp; {{ classFeature.feature.action_reset }}
                </div>
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
        <template #content>
          <div class="w-full flex-center py-2 border-b" :class="`border-${className}-faded`">
            <button
              class="mb-[10px] px-2 py-1 rounded text-white text-xs tracking-tightest bg-black"
              :class="`button-${className}`"
            >
              Manage Feats
            </button>
          </div>
          <div v-if="feats.length > 0">
            <div
              v-for="feat in feats"
              :key="`feat-${feat.name.replace(' ', '-')}`"
              class="text-white text-[13px] tracking-tightest my-3"
            >
              <div class="font-bold">{{ feat.name }}</div>
              <div class="flex flex-col gap-1">
                <p
                  v-for="(section, sectionIndex) in feat.description.split('\n')"
                  :key="`${feat.name}-description-section-${sectionIndex}`"
                >
                  <span
                    v-for="(part, partIndex) in section.split('%%')"
                    :key="`${feat.name}-description-section-${sectionIndex}-${partIndex}`"
                    v-html="getDescriptionSection(part)"
                  />
                </p>
              </div>
            </div>
          </div>
        </template>
      </titled-section>
    </div>
  </section>
</template>
