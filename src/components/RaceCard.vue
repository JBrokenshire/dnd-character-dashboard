<script setup>
defineProps({
  race: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="rounded-2xl transition-200 shadow-lg shadow-gray-300 bg-gray-100 hover:scale-[1.02] hover:shadow-gray-400"
  >
    <RouterLink :to="`/races/${race.id}`">
      <div
        class="p-6 flex flex-grow gap-4 items-center hover:cursor-pointer relative overflow-hidden"
      >
        <img
          :src="`/src/assets/img/races/icons/${race.name.replace(/\s/g, '-').toLowerCase()}.jpeg`"
          alt="Race Icon"
          class="max-w-20 aspect-square object-cover z-10 rounded-lg"
        />

        <div class="z-10">
          <h1 class="text-xl md:text-2xl font-bold line-clamp-1">
            {{ race.name }}
          </h1>
          <p class="text-xs sm:text-sm text-gray-700 line-clamp-3">
            {{ race.short_description }}
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
