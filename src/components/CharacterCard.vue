<script setup>
defineProps({
  character: {
    type: Object,
    required: true
  }
})

const cleanCharacterClass = (className) => {
  return className.replace(/\s+/g, '-').toLowerCase()
}
</script>

<template>
  <div class="rounded-2xl bg-white transition-200 shadow-xl hover:scale-[1.05]">
    <RouterLink :to="`/characters/${character.id}`">
      <div
        class="p-6 flex flex-grow gap-4 items-center hover:cursor-pointer relative overflow-hidden"
      >
        <img
          src="@/assets/img/character_card/default-profile-picture.png"
          alt="Character Profile Picture"
          class="max-w-20 aspect-square object-contain z-10 rounded-lg"
        />

        <div class="z-10">
          <h1 class="text-xl md:text-2xl text-white font-bold line-clamp-1">
            {{ character.name }}
          </h1>
          <p class="text-xs sm:text-sm text-gray-200 line-clamp-1">
            Level {{ character.level }} | {{ character.race.name }} | {{ character.class.name }}
          </p>
        </div>

        <img
          :src="`src/assets/img/character_card/backgrounds/${cleanCharacterClass(character.class.name)}.jpg`"
          class="absolute top-0 left-0 w-full h-full object-cover brightness-25 rounded-2xl"
          alt=""
        />
      </div>
    </RouterLink>

    <div class="px-8 py-4 rounded-b-2xl flex-between">
      <RouterLink :to="`/characters/${character.id}`" class="nav-link uppercase font-bold">
        View
      </RouterLink>
      <RouterLink :to="`/characters/${character.id}/edit`" class="nav-link uppercase font-bold">
        Edit
      </RouterLink>
      <RouterLink
        :to="`/characters/${character.id}/delete`"
        class="nav-link uppercase font-bold text-primary"
      >
        Delete
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
