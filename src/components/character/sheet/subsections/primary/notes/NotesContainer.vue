<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Character } from '@/models/Character'
import TitledSection from '@/components/character/sheet/subsections/primary/TitledSection.vue'

const props = defineProps<{
  className: string
  character: Character
}>()

onMounted(() => {
  if (props.character.organisations != '') {
    props.character.organisations.split(', ').map((section) => organisations.value.push(section))
  }
})

const organisations = ref<string[]>([])
</script>

<template>
  <section class="flex flex-col w-full h-[600px] overflow-y-scroll pb-2 text-[14px] text-white">
    <h2 class="sr-only">Inventory</h2>

    <!-- Organisations -->
    <TitledSection class="cursor-pointer mb-[25px]" :class-name="className">
      <template #title>Organisations</template>
      <template #content v-if="organisations.length > 0">
        <ul>
          <li
            v-for="organisation in organisations"
            :key="`organisations__${organisation.replace(' ', '-')}`"
          >
            {{ organisation }}
          </li>
        </ul>
      </template>
      <template #content v-else><span class="text-cs-gray">+ Add Organisations</span></template>
    </TitledSection>

    <!-- Allies -->
    <TitledSection class="cursor-pointer mb-[25px]" :class-name="className">
      <template #title>Allies</template>
      <template #content v-if="character.allies">{{ character.allies }}</template>
      <template #content v-else><span class="text-cs-gray">+ Add Allies</span></template>
    </TitledSection>

    <!-- Enemies -->
    <TitledSection class="cursor-pointer mb-[25px]" :class-name="className">
      <template #title>Enemies</template>
      <template #content v-if="character.enemies">{{ character.enemies }}</template>
      <template #content v-else><span class="text-cs-gray">+ Add Enemies</span></template>
    </TitledSection>

    <!-- Backstory -->
    <TitledSection class="cursor-pointer mb-[25px]" :class-name="className">
      <template #title>Backstory</template>
      <template #content v-if="character.backstory">
        <span class="whitespace-pre-line">{{ character.backstory }}</span>
      </template>
      <template #content v-else><span class="text-cs-gray">+ Add Backstory</span></template>
    </TitledSection>
  </section>
</template>
