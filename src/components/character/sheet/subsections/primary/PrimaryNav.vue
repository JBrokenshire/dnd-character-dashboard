<script setup lang="ts">
const props = defineProps<{
  className: string
  hasSpells?: boolean
}>()

const emit = defineEmits(['toggle'])

const toggleActive = (name: string) => {
  const elems = document.getElementsByClassName('primary-container__nav-item')

  for (let e of elems) {
    if (e.id != `cs-subsections__primary-nav-${name}`) {
      e.classList.remove('text-white', `border-${props.className}`)
      e.classList.add('border-transparent')
    } else {
      e.classList.add('text-white', `border-${props.className}`)
    }
  }

  emit('toggle', name)
}
</script>

<template>
  <div class="relative z-[4]">
    <menu class="mb-[1rem] flex-between gap-[1rem] list-none p-0 text-cs-gray tracking-tightest">
      <li>
        <button
          id="cs-subsections__primary-nav-actions"
          class="transition-200 primary-container__nav-item text-white"
          :class="`border-${className}`"
          @click="toggleActive('actions')"
          role="radio"
          aria-checked="true"
        >
          Actions
        </button>
      </li>
      <li v-if="hasSpells">
        <button
          id="cs-subsections__primary-nav-spells"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('spells')"
          role="radio"
          aria-checked="false"
        >
          Spells
        </button>
      </li>
      <li>
        <button
          id="cs-subsections__primary-nav-inventory"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('inventory')"
          role="radio"
          aria-checked="false"
        >
          Inventory
        </button>
      </li>
      <li>
        <button
          id="cs-subsections__primary-nav-features-and-traits"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('features-and-traits')"
          role="radio"
          aria-checked="false"
        >
          Features & Traits
        </button>
      </li>
      <li>
        <button
          id="cs-subsections__primary-nav-background"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('background')"
          role="radio"
          aria-checked="false"
        >
          Background
        </button>
      </li>
      <li>
        <button
          id="cs-subsections__primary-nav-notes"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('notes')"
          role="radio"
          aria-checked="false"
        >
          Notes
        </button>
      </li>
      <li>
        <button
          id="cs-subsections__primary-nav-extras"
          class="transition-200 primary-container__nav-item border-transparent"
          @click="toggleActive('extras')"
          role="radio"
          aria-checked="false"
        >
          Extras
        </button>
      </li>
    </menu>
  </div>
</template>

<style scoped>
.primary-container__nav-item {
  @apply flex items-center border-b-[.188rem] text-[.725rem] xl:text-[.875rem] font-bold gap-[.25rem] py-[.188rem] uppercase hover:text-white;
}
</style>
